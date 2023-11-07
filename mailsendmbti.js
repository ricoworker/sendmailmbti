const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config();

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, REDIRECT_URI, NODE_EMAIL } =
    process.env;

console.log(process.env.REFRESH_TOKEN);
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail(pdfBuffer) {
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
            to: `ricokurnia19@gmail.com`,
            subject: "testes",
            html: `
            <!DOCTYPE html>
            <html
                xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office"
                lang="en"
            >
                <head>
                    <title></title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <!--[if mso
                        ]><xml
                            ><o:OfficeDocumentSettings
                                ><o:PixelsPerInch>96</o:PixelsPerInch
                                ><o:AllowPNG /></o:OfficeDocumentSettings></xml
                    ><![endif]-->
                    <style>
                        * {
                            box-sizing: border-box;
                        }
                        body {
                            margin: 0;
                            padding: 0;
                        }
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                            text-decoration: inherit !important;
                        }
                        #MessageViewBody a {
                            color: inherit;
                            text-decoration: none;
                        }
                        p {
                            line-height: inherit;
                        }
                        .desktop_hide,
                        .desktop_hide table {
                            mso-hide: all;
                            display: none;
                            max-height: 0;
                            overflow: hidden;
                        }
                        .image_block img + div {
                            display: none;
                        }
                        @media (max-width: 720px) {
                            .social_block.desktop_hide .social-table {
                                display: inline-block !important;
                            }
                            .mobile_hide {
                                display: none;
                            }
                            .row-content {
                                width: 100% !important;
                            }
                            .stack .column {
                                width: 100%;
                                display: block;
                            }
                            .mobile_hide {
                                min-height: 0;
                                max-height: 0;
                                max-width: 0;
                                overflow: hidden;
                                font-size: 0;
                            }
                            .desktop_hide,
                            .desktop_hide table {
                                display: table !important;
                                max-height: none !important;
                            }
                        }
                    </style>
                </head>
                <body
                    style="
                        background-color: #fff;
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: none;
                        text-size-adjust: none;
                    "
                >
                    <table
                        class="nl-container"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            background-color: #fff;
                        "
                    >
                        <tbody>
                            <tr>
                                <td>
                                    <table
                                        class="row row-1"
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table
                                                        class="row-content stack"
                                                        align="center"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            color: #000;
                                                            width: 700px;
                                                            margin: 0 auto;
                                                        "
                                                        width="700"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="column column-1"
                                                                    width="100%"
                                                                    style="
                                                                        mso-table-lspace: 0;
                                                                        mso-table-rspace: 0;
                                                                        font-weight: 400;
                                                                        text-align: left;
                                                                        padding-bottom: 20px;
                                                                        padding-top: 30px;
                                                                        vertical-align: top;
                                                                        border-top: 0;
                                                                        border-right: 0;
                                                                        border-bottom: 0;
                                                                        border-left: 0;
                                                                    "
                                                                >
                                                                    <table
                                                                        class="image_block block-1"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    width: 100%;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                    style="
                                                                                        line-height: 10px;
                                                                                    "
                                                                                >
                                                                                    <a
                                                                                        href="https://www.enginemailer.com"
                                                                                        target="_blank"
                                                                                        style="
                                                                                            outline: none;
                                                                                        "
                                                                                        tabindex="-1"
                                                                                        ><img
                                                                                            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/edm-enginemailer-logo.png"
                                                                                            style="
                                                                                                display: block;
                                                                                                height: auto;
                                                                                                border: 0;
                                                                                                max-width: 200px;
                                                                                                width: 100%;
                                                                                            "
                                                                                            width="200"
                                                                                            alt="Enginemailer logo"
                                                                                            title="Enginemailer logo"
                                                                                    /></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        class="row row-2"
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0;
                                            mso-table-rspace: 0;
                                            background-color: #4a65ad;
                                            background-image: url(https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/a31367d3-56d9-4984-bf48-79331695a0bc/galaxy-bg.png);
                                            background-position: top center;
                                            background-repeat: no-repeat;
                                        "
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table
                                                        class="row-content stack"
                                                        align="center"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            color: #000;
                                                            width: 700px;
                                                            margin: 0 auto;
                                                        "
                                                        width="700"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="column column-1"
                                                                    width="100%"
                                                                    style="
                                                                        mso-table-lspace: 0;
                                                                        mso-table-rspace: 0;
                                                                        font-weight: 400;
                                                                        text-align: left;
                                                                        padding-top: 40px;
                                                                        vertical-align: top;
                                                                        border-top: 0;
                                                                        border-right: 0;
                                                                        border-bottom: 0;
                                                                        border-left: 0;
                                                                    "
                                                                >
                                                                    <table
                                                                        class="text_block block-1"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    padding-bottom: 10px;
                                                                                    padding-left: 10px;
                                                                                    padding-right: 10px;
                                                                                    padding-top: 30px;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 14.399999999999999px;
                                                                                            color: #fff;
                                                                                            line-height: 1.2;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 30px;
                                                                                                "
                                                                                                ><strong
                                                                                                    >Create
                                                                                                    beautiful
                                                                                                    emails,
                                                                                                    fast.</strong
                                                                                                ></span
                                                                                            >
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="text_block block-2"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    padding-bottom: 10px;
                                                                                    padding-left: 20px;
                                                                                    padding-right: 20px;
                                                                                    padding-top: 10px;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 18px;
                                                                                            color: #d8ebf8;
                                                                                            line-height: 1.5;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 24px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 16px;
                                                                                                "
                                                                                                >Our
                                                                                                editor
                                                                                                is
                                                                                                the
                                                                                                easiest,
                                                                                                quickest
                                                                                                way
                                                                                                to
                                                                                                design
                                                                                                elegant,
                                                                                                mobile
                                                                                                responsive
                                                                                                emails.
                                                                                            </span>
                                                                                        </p>
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 24px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 16px;
                                                                                                "
                                                                                                >Impress
                                                                                                yourself
                                                                                                (and
                                                                                                your
                                                                                                boss)
                                                                                                and
                                                                                                become
                                                                                                a
                                                                                                professional
                                                                                                designer
                                                                                                today!</span
                                                                                            >
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="button_block block-3"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    padding-bottom: 50px;
                                                                                    padding-left: 10px;
                                                                                    padding-right: 10px;
                                                                                    padding-top: 30px;
                                                                                    text-align: center;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                >
                                                                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.enginemailer.com/create-html-email " style="height:48px;width:233px;v-text-anchor:middle;" arcsize="63%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                                                                    <a
                                                                                        href="https://www.enginemailer.com/create-html-email "
                                                                                        target="_blank"
                                                                                        style="
                                                                                            text-decoration: none;
                                                                                            display: inline-block;
                                                                                            color: #ffffff;
                                                                                            background-color: #3aaee0;
                                                                                            border-radius: 30px;
                                                                                            width: auto;
                                                                                            border-top: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            font-weight: undefined;
                                                                                            border-right: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            border-bottom: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            border-left: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            padding-top: 8px;
                                                                                            padding-bottom: 8px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            font-size: 16px;
                                                                                            text-align: center;
                                                                                            mso-border-alt: none;
                                                                                            word-break: keep-all;
                                                                                        "
                                                                                        ><span
                                                                                            style="
                                                                                                padding-left: 40px;
                                                                                                padding-right: 40px;
                                                                                                font-size: 16px;
                                                                                                display: inline-block;
                                                                                                letter-spacing: normal;
                                                                                            "
                                                                                            ><span
                                                                                                style="
                                                                                                    word-break: break-word;
                                                                                                    line-height: 32px;
                                                                                                "
                                                                                                ><strong
                                                                                                    >Explore
                                                                                                    the
                                                                                                    features</strong
                                                                                                ></span
                                                                                            ></span
                                                                                        ></a
                                                                                    >
                                                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="image_block block-4"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    width: 100%;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                    style="
                                                                                        line-height: 10px;
                                                                                    "
                                                                                >
                                                                                    <img
                                                                                        src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/a31367d3-56d9-4984-bf48-79331695a0bc/blue-bg.jpg"
                                                                                        style="
                                                                                            display: block;
                                                                                            height: auto;
                                                                                            border: 0;
                                                                                            max-width: 700px;
                                                                                            width: 100%;
                                                                                        "
                                                                                        width="700"
                                                                                        alt="Alternate text"
                                                                                        title="Alternate text"
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        class="row row-3"
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table
                                                        class="row-content stack"
                                                        align="center"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            color: #000;
                                                            width: 700px;
                                                            margin: 0 auto;
                                                        "
                                                        width="700"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="column column-1"
                                                                    width="100%"
                                                                    style="
                                                                        mso-table-lspace: 0;
                                                                        mso-table-rspace: 0;
                                                                        font-weight: 400;
                                                                        text-align: left;
                                                                        vertical-align: top;
                                                                        border-top: 0;
                                                                        border-right: 0;
                                                                        border-bottom: 0;
                                                                        border-left: 0;
                                                                    "
                                                                >
                                                                    <table
                                                                        class="image_block block-1"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    width: 100%;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                    style="
                                                                                        line-height: 10px;
                                                                                    "
                                                                                >
                                                                                    <img
                                                                                        src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/Day3_Hero3_compressed.gif"
                                                                                        style="
                                                                                            display: block;
                                                                                            height: auto;
                                                                                            border: 0;
                                                                                            max-width: 700px;
                                                                                            width: 100%;
                                                                                        "
                                                                                        width="700"
                                                                                        alt="Enginemailer's editor"
                                                                                        title="Enginemailer's editor"
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        class="row row-4"
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table
                                                        class="row-content stack"
                                                        align="center"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            background-color: #f6f6f6;
                                                            color: #000;
                                                            width: 700px;
                                                            margin: 0 auto;
                                                        "
                                                        width="700"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="column column-1"
                                                                    width="100%"
                                                                    style="
                                                                        mso-table-lspace: 0;
                                                                        mso-table-rspace: 0;
                                                                        font-weight: 400;
                                                                        text-align: left;
                                                                        padding-top: 40px;
                                                                        vertical-align: top;
                                                                        border-top: 0;
                                                                        border-right: 0;
                                                                        border-bottom: 0;
                                                                        border-left: 0;
                                                                    "
                                                                >
                                                                    <table
                                                                        class="text_block block-1"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    padding-bottom: 10px;
                                                                                    padding-left: 20px;
                                                                                    padding-right: 20px;
                                                                                    padding-top: 10px;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 14.399999999999999px;
                                                                                            color: #555;
                                                                                            line-height: 1.2;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <strong
                                                                                                ><span
                                                                                                    style="
                                                                                                        font-size: 24px;
                                                                                                    "
                                                                                                    >Start
                                                                                                    with
                                                                                                    a
                                                                                                    beautiful,
                                                                                                    mobile-responsive
                                                                                                    template</span
                                                                                                ></strong
                                                                                            >
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="text_block block-2"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    padding-bottom: 10px;
                                                                                    padding-left: 30px;
                                                                                    padding-right: 30px;
                                                                                    padding-top: 10px;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 18px;
                                                                                            color: #555;
                                                                                            line-height: 1.5;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 21px;
                                                                                            "
                                                                                        >
                                                                                            Start
                                                                                            with
                                                                                            a
                                                                                            blank
                                                                                            canvas
                                                                                            to
                                                                                            build
                                                                                            your
                                                                                            email
                                                                                            from
                                                                                            scratch
                                                                                            or
                                                                                            kickstart
                                                                                            your
                                                                                            design
                                                                                            process
                                                                                            with
                                                                                            one
                                                                                            of
                                                                                            our
                                                                                            ready-to-go
                                                                                            email
                                                                                            templates.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="image_block block-3"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    width: 100%;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                    style="
                                                                                        line-height: 10px;
                                                                                    "
                                                                                >
                                                                                    <img
                                                                                        src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/a31367d3-56d9-4984-bf48-79331695a0bc/editor_images/templates-all.jpg"
                                                                                        style="
                                                                                            display: block;
                                                                                            height: auto;
                                                                                            border: 0;
                                                                                            max-width: 700px;
                                                                                            width: 100%;
                                                                                        "
                                                                                        width="700"
                                                                                        alt="Responsive templates"
                                                                                        title="Responsive templates"
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        class="row row-5"
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table
                                                        class="row-content stack"
                                                        align="center"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            color: #000;
                                                            width: 700px;
                                                            margin: 0 auto;
                                                        "
                                                        width="700"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="column column-1"
                                                                    width="100%"
                                                                    style="
                                                                        mso-table-lspace: 0;
                                                                        mso-table-rspace: 0;
                                                                        font-weight: 400;
                                                                        text-align: left;
                                                                        padding-bottom: 40px;
                                                                        padding-top: 5px;
                                                                        vertical-align: top;
                                                                        border-top: 0;
                                                                        border-right: 0;
                                                                        border-bottom: 0;
                                                                        border-left: 0;
                                                                    "
                                                                >
                                                                    <table
                                                                        class="button_block block-1"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="10"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td class="pad">
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                >
                                                                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://portal.enginemailer.com/Account/Register" style="height:48px;width:178px;v-text-anchor:middle;" arcsize="105%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                                                                    <a
                                                                                        href="https://portal.enginemailer.com/Account/Register"
                                                                                        target="_blank"
                                                                                        style="
                                                                                            text-decoration: none;
                                                                                            display: inline-block;
                                                                                            color: #ffffff;
                                                                                            background-color: #3aaee0;
                                                                                            border-radius: 50px;
                                                                                            width: auto;
                                                                                            border-top: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            font-weight: undefined;
                                                                                            border-right: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            border-bottom: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            border-left: 0px
                                                                                                solid
                                                                                                transparent;
                                                                                            padding-top: 8px;
                                                                                            padding-bottom: 8px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            font-size: 16px;
                                                                                            text-align: center;
                                                                                            mso-border-alt: none;
                                                                                            word-break: keep-all;
                                                                                        "
                                                                                        ><span
                                                                                            style="
                                                                                                padding-left: 40px;
                                                                                                padding-right: 40px;
                                                                                                font-size: 16px;
                                                                                                display: inline-block;
                                                                                                letter-spacing: normal;
                                                                                            "
                                                                                            ><span
                                                                                                style="
                                                                                                    word-break: break-word;
                                                                                                    line-height: 32px;
                                                                                                "
                                                                                                ><strong
                                                                                                    >Sign
                                                                                                    Up
                                                                                                    Now</strong
                                                                                                ></span
                                                                                            ></span
                                                                                        ></a
                                                                                    >
                                                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        class="row row-6"
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table
                                                        class="row-content stack"
                                                        align="center"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            color: #000;
                                                            width: 700px;
                                                            margin: 0 auto;
                                                        "
                                                        width="700"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="column column-1"
                                                                    width="100%"
                                                                    style="
                                                                        mso-table-lspace: 0;
                                                                        mso-table-rspace: 0;
                                                                        font-weight: 400;
                                                                        text-align: left;
                                                                        padding-bottom: 25px;
                                                                        padding-top: 25px;
                                                                        vertical-align: top;
                                                                        border-top: 0;
                                                                        border-right: 0;
                                                                        border-bottom: 0;
                                                                        border-left: 0;
                                                                    "
                                                                >
                                                                    <table
                                                                        class="text_block block-1"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="10"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td class="pad">
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 14.399999999999999px;
                                                                                            color: #555;
                                                                                            line-height: 1.2;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 12px;
                                                                                                "
                                                                                                ><a
                                                                                                    href="http://[previewinbrowser]/"
                                                                                                    target="_blank"
                                                                                                    rel="noopener"
                                                                                                    style="
                                                                                                        color: #555555;
                                                                                                    "
                                                                                                    >view
                                                                                                    this
                                                                                                    email
                                                                                                    in
                                                                                                    your
                                                                                                    browser</a
                                                                                                ></span
                                                                                            >
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="social_block block-2"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="10"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td class="pad">
                                                                                <div
                                                                                    class="alignment"
                                                                                    align="center"
                                                                                >
                                                                                    <table
                                                                                        class="social-table"
                                                                                        width="104px"
                                                                                        border="0"
                                                                                        cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation"
                                                                                        style="
                                                                                            mso-table-lspace: 0;
                                                                                            mso-table-rspace: 0;
                                                                                            display: inline-block;
                                                                                        "
                                                                                    >
                                                                                        <tr>
                                                                                            <td
                                                                                                style="
                                                                                                    padding: 0
                                                                                                        10px
                                                                                                        0
                                                                                                        10px;
                                                                                                "
                                                                                            >
                                                                                                <a
                                                                                                    href="https://www.facebook.com/enginemailer/"
                                                                                                    target="_blank"
                                                                                                    ><img
                                                                                                        src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/facebook@2x.png"
                                                                                                        width="32"
                                                                                                        height="32"
                                                                                                        alt="Facebook"
                                                                                                        title="Facebook"
                                                                                                        style="
                                                                                                            display: block;
                                                                                                            height: auto;
                                                                                                            border: 0;
                                                                                                        "
                                                                                                /></a>
                                                                                            </td>
                                                                                            <td
                                                                                                style="
                                                                                                    padding: 0
                                                                                                        10px
                                                                                                        0
                                                                                                        10px;
                                                                                                "
                                                                                            >
                                                                                                <a
                                                                                                    href="https://www.linkedin.com/company/enginemailer"
                                                                                                    target="_blank"
                                                                                                    ><img
                                                                                                        src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/linkedin@2x.png"
                                                                                                        width="32"
                                                                                                        height="32"
                                                                                                        alt="LinkedIn"
                                                                                                        title="LinkedIn"
                                                                                                        style="
                                                                                                            display: block;
                                                                                                            height: auto;
                                                                                                            border: 0;
                                                                                                        "
                                                                                                /></a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="text_block block-3"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="10"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td class="pad">
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 14.399999999999999px;
                                                                                            color: #555;
                                                                                            line-height: 1.2;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 12px;
                                                                                                "
                                                                                                ><strong
                                                                                                    >Our
                                                                                                    mailing
                                                                                                    address:</strong
                                                                                                ></span
                                                                                            >
                                                                                        </p>
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 12px;
                                                                                                "
                                                                                                >{company_address}</span
                                                                                            >
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table
                                                                        class="text_block block-4"
                                                                        width="100%"
                                                                        border="0"
                                                                        cellpadding="0"
                                                                        cellspacing="0"
                                                                        role="presentation"
                                                                        style="
                                                                            mso-table-lspace: 0;
                                                                            mso-table-rspace: 0;
                                                                            word-break: break-word;
                                                                        "
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                class="pad"
                                                                                style="
                                                                                    padding-bottom: 20px;
                                                                                    padding-left: 10px;
                                                                                    padding-right: 10px;
                                                                                    padding-top: 20px;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    style="
                                                                                        font-family: sans-serif;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class
                                                                                        style="
                                                                                            font-size: 12px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            mso-line-height-alt: 14.399999999999999px;
                                                                                            color: #555;
                                                                                            line-height: 1.2;
                                                                                        "
                                                                                    >
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 12px;
                                                                                                "
                                                                                                ><strong
                                                                                                    >Want
                                                                                                    to
                                                                                                    change
                                                                                                    how
                                                                                                    you
                                                                                                    receive
                                                                                                    this
                                                                                                    email?</strong
                                                                                                ></span
                                                                                            >
                                                                                        </p>
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                font-size: 14px;
                                                                                                text-align: center;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                            "
                                                                                        >
                                                                                            <span
                                                                                                style="
                                                                                                    font-size: 12px;
                                                                                                "
                                                                                                ><a
                                                                                                    href="http://[updateprofile]/"
                                                                                                    target="_blank"
                                                                                                    rel="noopener"
                                                                                                    style="
                                                                                                        color: #555555;
                                                                                                    "
                                                                                                    >manage
                                                                                                    preference</a
                                                                                                >
                                                                                                &nbsp;
                                                                                                &nbsp;·&nbsp;
                                                                                                &nbsp;
                                                                                                <a
                                                                                                    href="http://[globalunsubscribe]/"
                                                                                                    target="_blank"
                                                                                                    rel="noopener"
                                                                                                    style="
                                                                                                        color: #555555;
                                                                                                    "
                                                                                                    >unsubscribe</a
                                                                                                ></span
                                                                                            >
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- End -->
                    <div style="background-color: transparent">
                        <div
                            style="
                                margin: 0 auto;
                                min-width: 320px;
                                max-width: 500px;
                                overflow-wrap: break-word;
                                word-wrap: break-word;
                                word-break: break-word;
                                background-color: transparent;
                            "
                            class="block-grid"
                        >
                            <div
                                style="
                                    border-collapse: collapse;
                                    display: table;
                                    width: 100%;
                                    background-color: transparent;
                                "
                            >
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
                                <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                                <div
                                    class="col num12"
                                    style="
                                        min-width: 320px;
                                        max-width: 500px;
                                        display: table-cell;
                                        vertical-align: top;
                                    "
                                >
                                    <div
                                        style="
                                            background-color: transparent;
                                            width: 100% !important;
                                        "
                                    >
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="
                                                border-top: 0px solid transparent;
                                                border-left: 0px solid transparent;
                                                border-bottom: 0px solid transparent;
                                                border-right: 0px solid transparent;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                                padding-right: 0px;
                                                padding-left: 0px;
                                            "
                                        >
                                            <!--<![endif]-->
            
                                            <div
                                                align="center"
                                                class="img-container center autowidth"
                                                style="
                                                    padding-right: 0px;
                                                    padding-left: 0px;
                                                "
                                            >
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
            
                                                <a
                                                    href="https://goo.gl/sDhD5J"
                                                    target="_blank"
                                                    title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer"
                                                >
                                                    <img
                                                        class="center autowidth"
                                                        align="center"
                                                        border="0"
                                                        src="https://enginemailerblobv1.blob.core.windows.net/images/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/enginemailer-forever-free.png"
                                                        alt="Image"
                                                        title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer"
                                                        style="
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                            clear: both;
                                                            display: block !important;
                                                            border: 0;
                                                            height: auto;
                                                            float: none;
                                                            width: 100%;
                                                            max-width: 168px;
                                                        "
                                                        width="168"
                                                    />
                                                </a>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                            </div>
            
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>
                </body>
            </html>
            
        `,
            attachments: [
                {
                    filename: "invoice.pdf",
                    content: pdfBuffer,
                },
            ],
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(`Email  tidak dikirim ${error}`);
            } else {
                console.log(`Email diterima sent${info.response}`);
            }
        });
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
async function generatePdf(htmlContent) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    return pdfBuffer;
}

const dynamicData = "Hello, World!";
const htmlContent = `<!DOCTYPE html>
<html
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <!--[if mso
            ]><xml
                ><o:OfficeDocumentSettings
                    ><o:PixelsPerInch>96</o:PixelsPerInch
                    ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }
            body {
                margin: 0;
                padding: 0;
            }
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
            p {
                line-height: inherit;
            }
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0;
                overflow: hidden;
            }
            .image_block img + div {
                display: none;
            }
            @media (max-width: 720px) {
                .social_block.desktop_hide .social-table {
                    display: inline-block !important;
                }
                .mobile_hide {
                    display: none;
                }
                .row-content {
                    width: 100% !important;
                }
                .stack .column {
                    width: 100%;
                    display: block;
                }
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0;
                }
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>
    <body
        style="
            background-color: #fff;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
        "
    >
        <table
            class="nl-container"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                background-color: #fff;
            "
        >
            <tbody>
                <tr>
                    <td>
                        <table
                            class="row row-1"
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="row-content stack"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                                mso-table-lspace: 0;
                                                mso-table-rspace: 0;
                                                color: #000;
                                                width: 700px;
                                                margin: 0 auto;
                                            "
                                            width="700"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        width="100%"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            padding-bottom: 20px;
                                                            padding-top: 30px;
                                                            vertical-align: top;
                                                            border-top: 0;
                                                            border-right: 0;
                                                            border-bottom: 0;
                                                            border-left: 0;
                                                        "
                                                    >
                                                        <table
                                                            class="image_block block-1"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                        style="
                                                                            line-height: 10px;
                                                                        "
                                                                    >
                                                                        <a
                                                                            href="https://www.enginemailer.com"
                                                                            target="_blank"
                                                                            style="
                                                                                outline: none;
                                                                            "
                                                                            tabindex="-1"
                                                                            ><img
                                                                                src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/edm-enginemailer-logo.png"
                                                                                style="
                                                                                    display: block;
                                                                                    height: auto;
                                                                                    border: 0;
                                                                                    max-width: 200px;
                                                                                    width: 100%;
                                                                                "
                                                                                width="200"
                                                                                alt="Enginemailer logo"
                                                                                title="Enginemailer logo"
                                                                        /></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            class="row row-2"
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                background-color: #4a65ad;
                                background-image: url(https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/a31367d3-56d9-4984-bf48-79331695a0bc/galaxy-bg.png);
                                background-position: top center;
                                background-repeat: no-repeat;
                            "
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="row-content stack"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                                mso-table-lspace: 0;
                                                mso-table-rspace: 0;
                                                color: #000;
                                                width: 700px;
                                                margin: 0 auto;
                                            "
                                            width="700"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        width="100%"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            padding-top: 40px;
                                                            vertical-align: top;
                                                            border-top: 0;
                                                            border-right: 0;
                                                            border-bottom: 0;
                                                            border-left: 0;
                                                        "
                                                    >
                                                        <table
                                                            class="text_block block-1"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        padding-bottom: 10px;
                                                                        padding-left: 10px;
                                                                        padding-right: 10px;
                                                                        padding-top: 30px;
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                color: #fff;
                                                                                line-height: 1.2;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 30px;
                                                                                    "
                                                                                    ><strong
                                                                                        >Create
                                                                                        beautiful
                                                                                        emails,
                                                                                        fast.</strong
                                                                                    ></span
                                                                                >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="text_block block-2"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        padding-bottom: 10px;
                                                                        padding-left: 20px;
                                                                        padding-right: 20px;
                                                                        padding-top: 10px;
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 18px;
                                                                                color: #d8ebf8;
                                                                                line-height: 1.5;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 24px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 16px;
                                                                                    "
                                                                                    >Our
                                                                                    editor
                                                                                    is
                                                                                    the
                                                                                    easiest,
                                                                                    quickest
                                                                                    way
                                                                                    to
                                                                                    design
                                                                                    elegant,
                                                                                    mobile
                                                                                    responsive
                                                                                    emails.
                                                                                </span>
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 24px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 16px;
                                                                                    "
                                                                                    >Impress
                                                                                    yourself
                                                                                    (and
                                                                                    your
                                                                                    boss)
                                                                                    and
                                                                                    become
                                                                                    a
                                                                                    professional
                                                                                    designer
                                                                                    today!</span
                                                                                >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="button_block block-3"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        padding-bottom: 50px;
                                                                        padding-left: 10px;
                                                                        padding-right: 10px;
                                                                        padding-top: 30px;
                                                                        text-align: center;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                    >
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.enginemailer.com/create-html-email " style="height:48px;width:233px;v-text-anchor:middle;" arcsize="63%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                                                        <a
                                                                            href="https://www.enginemailer.com/create-html-email "
                                                                            target="_blank"
                                                                            style="
                                                                                text-decoration: none;
                                                                                display: inline-block;
                                                                                color: #ffffff;
                                                                                background-color: #3aaee0;
                                                                                border-radius: 30px;
                                                                                width: auto;
                                                                                border-top: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                font-weight: undefined;
                                                                                border-right: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                border-bottom: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                border-left: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                padding-top: 8px;
                                                                                padding-bottom: 8px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                font-size: 16px;
                                                                                text-align: center;
                                                                                mso-border-alt: none;
                                                                                word-break: keep-all;
                                                                            "
                                                                            ><span
                                                                                style="
                                                                                    padding-left: 40px;
                                                                                    padding-right: 40px;
                                                                                    font-size: 16px;
                                                                                    display: inline-block;
                                                                                    letter-spacing: normal;
                                                                                "
                                                                                ><span
                                                                                    style="
                                                                                        word-break: break-word;
                                                                                        line-height: 32px;
                                                                                    "
                                                                                    ><strong
                                                                                        >Explore
                                                                                        the
                                                                                        features</strong
                                                                                    ></span
                                                                                ></span
                                                                            ></a
                                                                        >
                                                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="image_block block-4"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                        style="
                                                                            line-height: 10px;
                                                                        "
                                                                    >
                                                                        <img
                                                                            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/a31367d3-56d9-4984-bf48-79331695a0bc/blue-bg.jpg"
                                                                            style="
                                                                                display: block;
                                                                                height: auto;
                                                                                border: 0;
                                                                                max-width: 700px;
                                                                                width: 100%;
                                                                            "
                                                                            width="700"
                                                                            alt="Alternate text"
                                                                            title="Alternate text"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            class="row row-3"
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="row-content stack"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                                mso-table-lspace: 0;
                                                mso-table-rspace: 0;
                                                color: #000;
                                                width: 700px;
                                                margin: 0 auto;
                                            "
                                            width="700"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        width="100%"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            border-top: 0;
                                                            border-right: 0;
                                                            border-bottom: 0;
                                                            border-left: 0;
                                                        "
                                                    >
                                                        <table
                                                            class="image_block block-1"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                        style="
                                                                            line-height: 10px;
                                                                        "
                                                                    >
                                                                        <img
                                                                            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/Day3_Hero3_compressed.gif"
                                                                            style="
                                                                                display: block;
                                                                                height: auto;
                                                                                border: 0;
                                                                                max-width: 700px;
                                                                                width: 100%;
                                                                            "
                                                                            width="700"
                                                                            alt="Enginemailer's editor"
                                                                            title="Enginemailer's editor"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            class="row row-4"
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="row-content stack"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                                mso-table-lspace: 0;
                                                mso-table-rspace: 0;
                                                background-color: #f6f6f6;
                                                color: #000;
                                                width: 700px;
                                                margin: 0 auto;
                                            "
                                            width="700"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        width="100%"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            padding-top: 40px;
                                                            vertical-align: top;
                                                            border-top: 0;
                                                            border-right: 0;
                                                            border-bottom: 0;
                                                            border-left: 0;
                                                        "
                                                    >
                                                        <table
                                                            class="text_block block-1"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        padding-bottom: 10px;
                                                                        padding-left: 20px;
                                                                        padding-right: 20px;
                                                                        padding-top: 10px;
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                color: #555;
                                                                                line-height: 1.2;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <strong
                                                                                    ><span
                                                                                        style="
                                                                                            font-size: 24px;
                                                                                        "
                                                                                        >Start
                                                                                        with
                                                                                        a
                                                                                        beautiful,
                                                                                        mobile-responsive
                                                                                        template</span
                                                                                    ></strong
                                                                                >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="text_block block-2"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        padding-bottom: 10px;
                                                                        padding-left: 30px;
                                                                        padding-right: 30px;
                                                                        padding-top: 10px;
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 18px;
                                                                                color: #555;
                                                                                line-height: 1.5;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 21px;
                                                                                "
                                                                            >
                                                                                Start
                                                                                with
                                                                                a
                                                                                blank
                                                                                canvas
                                                                                to
                                                                                build
                                                                                your
                                                                                email
                                                                                from
                                                                                scratch
                                                                                or
                                                                                kickstart
                                                                                your
                                                                                design
                                                                                process
                                                                                with
                                                                                one
                                                                                of
                                                                                our
                                                                                ready-to-go
                                                                                email
                                                                                templates.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="image_block block-3"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                        style="
                                                                            line-height: 10px;
                                                                        "
                                                                    >
                                                                        <img
                                                                            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/a31367d3-56d9-4984-bf48-79331695a0bc/editor_images/templates-all.jpg"
                                                                            style="
                                                                                display: block;
                                                                                height: auto;
                                                                                border: 0;
                                                                                max-width: 700px;
                                                                                width: 100%;
                                                                            "
                                                                            width="700"
                                                                            alt="Responsive templates"
                                                                            title="Responsive templates"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            class="row row-5"
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="row-content stack"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                                mso-table-lspace: 0;
                                                mso-table-rspace: 0;
                                                color: #000;
                                                width: 700px;
                                                margin: 0 auto;
                                            "
                                            width="700"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        width="100%"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            padding-bottom: 40px;
                                                            padding-top: 5px;
                                                            vertical-align: top;
                                                            border-top: 0;
                                                            border-right: 0;
                                                            border-bottom: 0;
                                                            border-left: 0;
                                                        "
                                                    >
                                                        <table
                                                            class="button_block block-1"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="10"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                    >
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://portal.enginemailer.com/Account/Register" style="height:48px;width:178px;v-text-anchor:middle;" arcsize="105%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                                                        <a
                                                                            href="https://portal.enginemailer.com/Account/Register"
                                                                            target="_blank"
                                                                            style="
                                                                                text-decoration: none;
                                                                                display: inline-block;
                                                                                color: #ffffff;
                                                                                background-color: #3aaee0;
                                                                                border-radius: 50px;
                                                                                width: auto;
                                                                                border-top: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                font-weight: undefined;
                                                                                border-right: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                border-bottom: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                border-left: 0px
                                                                                    solid
                                                                                    transparent;
                                                                                padding-top: 8px;
                                                                                padding-bottom: 8px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                font-size: 16px;
                                                                                text-align: center;
                                                                                mso-border-alt: none;
                                                                                word-break: keep-all;
                                                                            "
                                                                            ><span
                                                                                style="
                                                                                    padding-left: 40px;
                                                                                    padding-right: 40px;
                                                                                    font-size: 16px;
                                                                                    display: inline-block;
                                                                                    letter-spacing: normal;
                                                                                "
                                                                                ><span
                                                                                    style="
                                                                                        word-break: break-word;
                                                                                        line-height: 32px;
                                                                                    "
                                                                                    ><strong
                                                                                        >Sign
                                                                                        Up
                                                                                        Now</strong
                                                                                    ></span
                                                                                ></span
                                                                            ></a
                                                                        >
                                                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            class="row row-6"
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="row-content stack"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                                mso-table-lspace: 0;
                                                mso-table-rspace: 0;
                                                color: #000;
                                                width: 700px;
                                                margin: 0 auto;
                                            "
                                            width="700"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        width="100%"
                                                        style="
                                                            mso-table-lspace: 0;
                                                            mso-table-rspace: 0;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            padding-bottom: 25px;
                                                            padding-top: 25px;
                                                            vertical-align: top;
                                                            border-top: 0;
                                                            border-right: 0;
                                                            border-bottom: 0;
                                                            border-left: 0;
                                                        "
                                                    >
                                                        <table
                                                            class="text_block block-1"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="10"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                color: #555;
                                                                                line-height: 1.2;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 12px;
                                                                                    "
                                                                                    ><a
                                                                                        href="http://[previewinbrowser]/"
                                                                                        target="_blank"
                                                                                        rel="noopener"
                                                                                        style="
                                                                                            color: #555555;
                                                                                        "
                                                                                        >view
                                                                                        this
                                                                                        email
                                                                                        in
                                                                                        your
                                                                                        browser</a
                                                                                    ></span
                                                                                >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="social_block block-2"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="10"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                            "
                                                        >
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        class="alignment"
                                                                        align="center"
                                                                    >
                                                                        <table
                                                                            class="social-table"
                                                                            width="104px"
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0;
                                                                                mso-table-rspace: 0;
                                                                                display: inline-block;
                                                                            "
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding: 0
                                                                                            10px
                                                                                            0
                                                                                            10px;
                                                                                    "
                                                                                >
                                                                                    <a
                                                                                        href="https://www.facebook.com/enginemailer/"
                                                                                        target="_blank"
                                                                                        ><img
                                                                                            src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/facebook@2x.png"
                                                                                            width="32"
                                                                                            height="32"
                                                                                            alt="Facebook"
                                                                                            title="Facebook"
                                                                                            style="
                                                                                                display: block;
                                                                                                height: auto;
                                                                                                border: 0;
                                                                                            "
                                                                                    /></a>
                                                                                </td>
                                                                                <td
                                                                                    style="
                                                                                        padding: 0
                                                                                            10px
                                                                                            0
                                                                                            10px;
                                                                                    "
                                                                                >
                                                                                    <a
                                                                                        href="https://www.linkedin.com/company/enginemailer"
                                                                                        target="_blank"
                                                                                        ><img
                                                                                            src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/linkedin@2x.png"
                                                                                            width="32"
                                                                                            height="32"
                                                                                            alt="LinkedIn"
                                                                                            title="LinkedIn"
                                                                                            style="
                                                                                                display: block;
                                                                                                height: auto;
                                                                                                border: 0;
                                                                                            "
                                                                                    /></a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="text_block block-3"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="10"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                color: #555;
                                                                                line-height: 1.2;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 12px;
                                                                                    "
                                                                                    ><strong
                                                                                        >Our
                                                                                        mailing
                                                                                        address:</strong
                                                                                    ></span
                                                                                >
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 12px;
                                                                                    "
                                                                                    >{company_address}</span
                                                                                >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table
                                                            class="text_block block-4"
                                                            width="100%"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0;
                                                                mso-table-rspace: 0;
                                                                word-break: break-word;
                                                            "
                                                        >
                                                            <tr>
                                                                <td
                                                                    class="pad"
                                                                    style="
                                                                        padding-bottom: 20px;
                                                                        padding-left: 10px;
                                                                        padding-right: 10px;
                                                                        padding-top: 20px;
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            font-family: sans-serif;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: Arial,
                                                                                    Helvetica
                                                                                        Neue,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                color: #555;
                                                                                line-height: 1.2;
                                                                            "
                                                                        >
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 12px;
                                                                                    "
                                                                                    ><strong
                                                                                        >Want
                                                                                        to
                                                                                        change
                                                                                        how
                                                                                        you
                                                                                        receive
                                                                                        this
                                                                                        email?</strong
                                                                                    ></span
                                                                                >
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    font-size: 14px;
                                                                                    text-align: center;
                                                                                    mso-line-height-alt: 16.8px;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    style="
                                                                                        font-size: 12px;
                                                                                    "
                                                                                    ><a
                                                                                        href="http://[updateprofile]/"
                                                                                        target="_blank"
                                                                                        rel="noopener"
                                                                                        style="
                                                                                            color: #555555;
                                                                                        "
                                                                                        >manage
                                                                                        preference</a
                                                                                    >
                                                                                    &nbsp;
                                                                                    &nbsp;·&nbsp;
                                                                                    &nbsp;
                                                                                    <a
                                                                                        href="http://[globalunsubscribe]/"
                                                                                        target="_blank"
                                                                                        rel="noopener"
                                                                                        style="
                                                                                            color: #555555;
                                                                                        "
                                                                                        >unsubscribe</a
                                                                                    ></span
                                                                                >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- End -->
        <div style="background-color: transparent">
            <div
                style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 500px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                "
                class="block-grid"
            >
                <div
                    style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        background-color: transparent;
                    "
                >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div
                        class="col num12"
                        style="
                            min-width: 320px;
                            max-width: 500px;
                            display: table-cell;
                            vertical-align: top;
                        "
                    >
                        <div
                            style="
                                background-color: transparent;
                                width: 100% !important;
                            "
                        >
                            <!--[if (!mso)&(!IE)]><!-->
                            <div
                                style="
                                    border-top: 0px solid transparent;
                                    border-left: 0px solid transparent;
                                    border-bottom: 0px solid transparent;
                                    border-right: 0px solid transparent;
                                    padding-top: 15px;
                                    padding-bottom: 15px;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                "
                            >
                                <!--<![endif]-->

                                <div
                                    align="center"
                                    class="img-container center autowidth"
                                    style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                    "
                                >
                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->

                                    <a
                                        href="https://goo.gl/sDhD5J"
                                        target="_blank"
                                        title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer"
                                    >
                                        <img
                                            class="center autowidth"
                                            align="center"
                                            border="0"
                                            src="https://enginemailerblobv1.blob.core.windows.net/images/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/enginemailer-forever-free.png"
                                            alt="Image"
                                            title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer"
                                            style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: block !important;
                                                border: 0;
                                                height: auto;
                                                float: none;
                                                width: 100%;
                                                max-width: 168px;
                                            "
                                            width="168"
                                        />
                                    </a>
                                    <!--[if mso]></td></tr></table><![endif]-->
                                </div>

                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
            </div>
        </div>
    </body>
</html>
`;

generatePdf(htmlContent)
    .then((pdfBuffer) => sendEmail(pdfBuffer))
    .catch((error) => console.error("Error:", error));

module.exports = generatePdf;
