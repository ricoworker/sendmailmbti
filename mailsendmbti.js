const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const { google } = require("googleapis");
const emailHtml = require("./Mailhtml");
const dotenv = require("dotenv");

const fs = require("fs");

// Load data from a JSON file
const data = JSON.parse(fs.readFileSync("./datauat.json", "utf8"));
console.log(data);

// Now, you can use the data in the sendEmailsSequentially function

// Then, proceed with sending emails using the data array

dotenv.config();

console.log(data);

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, REDIRECT_URI, NODE_EMAIL } =
    process.env;

console.log(process.env.REFRESH_TOKEN);
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

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    return pdfBuffer;
}

async function sendEmail(pdfBuffer, recipientEmail) {
    try {
        const accessToken = await oauth2Client.getAccessToken();

        let from = `Ganesha Operation Mailer <${NODE_EMAIL}>`;
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: NODE_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: "coba",
            to: recipientEmail, // Use the recipient's email from the data array
            subject: "testes",
            html: emailHtml(),
            attachments: [
                {
                    filename: "invoice.pdf",
                    content: pdfBuffer,
                },
            ],
        };

        const info = await transporter.sendMail(mailOptions);

        console.log(`Email sent to ${recipientEmail}: ${info.response}`);
    } catch (error) {
        console.error(`Error sending email to ${recipientEmail}:`, error);
    }
}

// Function to send emails to data array with a delay
async function sendEmailsSequentially(data) {
    for (const item of data) {
        const recipientEmail = item.Email;
        const htmlContent = emailHtml(); // You can customize the HTML content for each recipient

        try {
            const pdfBuffer = await generatePdf(htmlContent);
            await sendEmail(pdfBuffer, recipientEmail);

            // Introduce a 5-second delay before sending the next email
            await new Promise((resolve) => setTimeout(resolve, 5000));
        } catch (error) {
            console.error(`Error for ${recipientEmail}:`, error);
        }
    }
}


module.exports = sendEmailsSequentially;
