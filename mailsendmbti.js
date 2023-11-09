const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');
const { google } = require('googleapis');
const emailHtml = require('./Bodymail');
const Hasilmail = require('./Hasilmail');
const dotenv = require('dotenv');
const StatusEmail = require('./models');

// Now, you can use the data in the sendEmailsSequentially function

// Then, proceed with sending emails using the data array

dotenv.config();

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  REDIRECT_URI,
  NODE_EMAIL,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function generatePdf(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent);

  const pdfBuffer = await page.pdf({ format: 'A4' });

  await browser.close();

  return pdfBuffer;
}

async function sendEmail(pdfBuffer, item) {
  const { nama, email } = item;
  const date = new Date();
  try {
    const accessToken = await oauth2Client.getAccessToken();

    let from = `Ganesha Operation Mailer <${NODE_EMAIL}>`;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: NODE_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'e',
      to: item.email, // Use the recipient's email from the data array
      subject: 'testes',
      html: emailHtml(),
      attachments: [
        {
          filename: `Hasil Tes MBTI ${item.nama} .pdf`,
          content: pdfBuffer,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    await StatusEmail.create({
      nama: nama,
      email: email,
      status: 'terkirim',
      tanggal: date,
    });
    console.log(`Email sent to ${item.email}: ${info.response}`);
  } catch (error) {
    await StatusEmail.create({
      nama: nama,
      email: email,
      status: 'tidak terkirim',
      tanggal: date,
    });
    console.error(`Error sending email to ${item.email}:`, error);
  }
}

// Function to send emails to data array with a delay
async function sendEmailsSequentially(data) {
  for (const item of data) {
    const htmlContent = Hasilmail(item); // You can customize the HTML content for each recipient

    try {
      const pdfBuffer = await generatePdf(htmlContent);
      await sendEmail(pdfBuffer, item);
    } catch (error) {
      console.error(`Error for ${item.email}:`, error);
    }
  }
}

module.exports = sendEmailsSequentially;
