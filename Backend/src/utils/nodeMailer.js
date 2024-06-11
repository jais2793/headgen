import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PWD,
  },
});

// solo customer mail

export const sendMailToCustomer = async (userData, images) => {
  const body = JSON.parse(userData.body);
  const selectedPlan = JSON.parse(body.selectedPlan);

  let imgTableRows = "";
  images?.forEach((item, idx) => {
    imgTableRows += `<tr>
                  <td class="sm-inline-block" style="font-weight: 600" width="100%"><a href='${
                    item.url
                  }'>Image ${idx + 1}</a></td>
                </tr>`;
  });

  let typeInfo = "";
  let customizeData;
  switch (body.generationType) {
    case "individual":
      typeInfo = `<tr>
                    <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Headshot Type</td>
                    <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.headshotType}</td>
                  </tr>
                  `;
      break;
    case "customize":
      customizeData = JSON.parse(body.customizeData);
      typeInfo = `<tr>
                      <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Custom Section</td>
                      <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${customizeData.section}</td>
                    </tr>
                    <tr>
                      <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Custom Sub-Section</td>
                      <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${customizeData.subSection}</td>
                    </tr>
                    `;
      break;
    case "prompt":
      typeInfo = `<tr>
                    <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Prompt</td>
                    <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.promptData}</td>
                  </tr>
                  `;
      break;
    case "individualDating":
      typeInfo = `<tr>
                      <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Headshot Type</td>
                      <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.headshotType}</td>
                    </tr>
                    `;
      break;
    case "datingCustomize":
      customizeData = JSON.parse(body.customizeData);
      typeInfo = `<tr>
                        <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Custom Section</td>
                        <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${customizeData.section}</td>
                      </tr>
                      <tr>
                        <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Custom Sub-Section</td>
                        <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${customizeData.subSection}</td>
                      </tr>
                      `;
      break;
    case "datingPrompt":
      typeInfo = `<tr>
                      <td class="sm-w-1-4 sm-inline-block" style="color: #718096;" width="50%">Prompt</td>
                      <td class="sm-w-3-4 sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.promptData}</td>
                    </tr>
                    `;
      break;
  }

  const htmlContent = `    
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta charset="utf8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <meta name="x-apple-disable-message-reformatting">
          <title>Your reservation is now confirmed</title>
  
          <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"><!--<![endif]-->
  
          <!--[if mso]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <style>
            table {border-collapse: collapse;}
            td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
          </style>
          <![endif]-->
          <style>
            @media screen {
              img {
                max-width: 100%;
              }
              td,
              th {
                box-sizing: border-box;
              }
              u~div .wrapper {
                min-width: 100vw;
              }
              a[x-apple-data-detectors] {
                color: inherit;
                text-decoration: none;
              }
              .all-font-roboto {
                font-family: Roboto, -apple-system, "Segoe UI", sans-serif !important;
              }
              .all-font-sans {
                font-family: -apple-system, "Segoe UI", sans-serif !important;
              }
            }
            @media (max-width: 600px) {
              .sm-inline-block {
                display: inline-block !important;
              }
              .sm-hidden {
                display: none !important;
              }
              .sm-leading-32 {
                line-height: 32px !important;
              }
              .sm-p-20 {
                padding: 20px !important;
              }
              .sm-py-12 {
                padding-top: 12px !important;
                padding-bottom: 12px !important;
              }
              .sm-text-center {
                text-align: center !important;
              }
              .sm-text-xs {
                font-size: 12px !important;
              }
              .sm-text-lg {
                font-size: 18px !important;
              }
              .sm-w-1-4 {
                width: 25% !important;
              }
              .sm-w-3-4 {
                width: 75% !important;
              }
              .sm-w-full {
                width: 100% !important;
              }
            }
          </style>
          <style>
            @media (max-width: 600px) {
              .sm-dui17-b-t {
                border: solid #4299e1;
                border-width: 4px 0 0;
              }
            }
            
          </style>
        </head>
        <body style="box-sizing: border-box; margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #131a29;">
          <div style="display: none; line-height: 0; font-size: 0;">Thanks for placing your Image generation request with HeadGen AI</div>
          <table class="wrapper all-font-sans" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center" style="padding: 24px;" width="100%">
                <table class="sm-w-full" width="600" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="left" class="sm-p-20 sm-dui17-b-t" style="border-radius: 2px; padding: 40px; position: relative; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05); vertical-align: top; z-index: 50;" bgcolor="#ffffff" valign="top">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="80%">
                            <h1 class="sm-text-lg all-font-roboto" style="font-weight: 700; line-height: 100%; margin: 0; margin-bottom: 4px; font-size: 24px;">Customer Receipt</h1>
                            <p class="sm-text-xs" style="margin: 0; color: #a0aec0; font-size: 14px;">Your Headshot generation has been confirmed</p>
                          </td>
                          
                        </tr>
                      </table>
                      <div style="line-height: 32px;">&zwnj;</div>
                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">E-Mail</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right"> ${body.email} </td>
                        </tr>
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">Gender</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.gender}</td>
                        </tr>
                        ${typeInfo}
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>
                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      ${imgTableRows}
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>
                      <table style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="color: #718096;" width="50%">Original Price</td>
                          <td style="font-weight: 600; text-align: right;text-decoration: line-through;" width="50%" align="right">${selectedPlan.originalPrice}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600; padding-top: 32px; color: #000000; font-size: 20px;" width="50%">Total</td>
                          <td style="font-weight: 600; padding-top: 32px; text-align: right; color: #1d02b2; font-size: 20px;" width="50%" align="right">${selectedPlan.price}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.MAIL_ID, // sender address
    to: body.email, // list of receivers
    subject: "Order confirmed", // Subject line
    // text: "Hello jai this is the receipt for your order", // plain text body
    html: htmlContent, // html body
  });
  // console.log(info)

  // send mail to seller

  const htmlContentSeller = `    
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta charset="utf8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <meta name="x-apple-disable-message-reformatting">
          <title>Your reservation is now confirmed</title>
  
          <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"><!--<![endif]-->
  
          <!--[if mso]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <style>
            table {border-collapse: collapse;}
            td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
          </style>
          <![endif]-->
          <style>
            @media screen {
              img {
                max-width: 100%;
              }
              td,
              th {
                box-sizing: border-box;
              }
              u~div .wrapper {
                min-width: 100vw;
              }
              a[x-apple-data-detectors] {
                color: inherit;
                text-decoration: none;
              }
              .all-font-roboto {
                font-family: Roboto, -apple-system, "Segoe UI", sans-serif !important;
              }
              .all-font-sans {
                font-family: -apple-system, "Segoe UI", sans-serif !important;
              }
            }
            @media (max-width: 600px) {
              .sm-inline-block {
                display: inline-block !important;
              }
              .sm-hidden {
                display: none !important;
              }
              .sm-leading-32 {
                line-height: 32px !important;
              }
              .sm-p-20 {
                padding: 20px !important;
              }
              .sm-py-12 {
                padding-top: 12px !important;
                padding-bottom: 12px !important;
              }
              .sm-text-center {
                text-align: center !important;
              }
              .sm-text-xs {
                font-size: 12px !important;
              }
              .sm-text-lg {
                font-size: 18px !important;
              }
              .sm-w-1-4 {
                width: 25% !important;
              }
              .sm-w-3-4 {
                width: 75% !important;
              }
              .sm-w-full {
                width: 100% !important;
              }
            }
          </style>
          <style>
            @media (max-width: 600px) {
              .sm-dui17-b-t {
                border: solid #4299e1;
                border-width: 4px 0 0;
              }
            }

            
          </style>
        </head>
        <body style="box-sizing: border-box; margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #131a29;">
          <div style="display: none; line-height: 0; font-size: 0;">Thanks for placing your Image generation request with HeadGen AI</div>
          <table class="wrapper all-font-sans" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center" style="padding: 24px;" width="100%">
                <table class="sm-w-full" width="600" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="left" class="sm-p-20 sm-dui17-b-t" style="border-radius: 2px; padding: 40px; position: relative; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05); vertical-align: top; z-index: 50;" bgcolor="#ffffff" valign="top">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="80%">
                          <div> 
                            HeadGen AI
                          <div>
                            <h1 class="sm-text-lg all-font-roboto " style="font-weight: 700; line-height: 100%; margin: 0; margin-bottom: 4px; font-size: 24px;">Customer Receipt</h1>
                            <p class="sm-text-xs" style="margin: 0; color: #a0aec0; font-size: 14px;">Your Headshot generation has been confirmed</p>
                          </td>
                          
                        </tr>
                      </table>
                      <div style="line-height: 32px;">&zwnj;</div>
                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">E-Mail</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right"> ${body.email} </td>
                        </tr>
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">Gender</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.gender}</td>
                        </tr>
                        ${typeInfo}
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>

                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="sm-inline-block" style="color: #718096;" width="50%">Pack Name</td>
                        <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right"> ${selectedPlan.packName} </td>
                      </tr>
                      <tr>
                        <td class="sm-inline-block" style="color: #718096;" width="50%">Original Price</td>
                        <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${selectedPlan.originalPrice}</td>
                      </tr>
                      <tr>
                        <td class="sm-inline-block" style="color: #718096;" width="50%">Price</td>
                        <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${selectedPlan.price}</td>
                      </tr>
                    </table>


                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      ${imgTableRows}
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>
                      <table style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="color: #718096;" width="50%">Original Price</td>
                          <td style="font-weight: 600; text-align: right;text-decoration: line-through;" width="50%" align="right">${selectedPlan.originalPrice}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600; padding-top: 32px; color: #000000; font-size: 20px;" width="50%">Total</td>
                          <td style="font-weight: 600; padding-top: 32px; text-align: right; color: #1d02b2; font-size: 20px;" width="50%" align="right">${selectedPlan.price}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

  await transporter.sendMail({
    from: process.env.MAIL_ID, // sender address
    to: process.env.SELLER_MAIL, // list of receivers
    subject: `Order by ${body.email}`, // Subject line
    // text: "Hello jai this is the receipt for your order", // plain text body
    html: htmlContentSeller, // html body
  });
};

// teams customer mail
export const sendMailToTeamsCustomer = async (userData) => {
  const body = JSON.parse(userData.body);
  const selectedPlan = JSON.parse(body.selectedPlan);

  const htmlContent = `    
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta charset="utf8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <meta name="x-apple-disable-message-reformatting">
          <title>Your reservation is now confirmed</title>
  
          <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"><!--<![endif]-->
  
          <!--[if mso]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <style>
            table {border-collapse: collapse;}
            td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
          </style>
          <![endif]-->
          <style>
            @media screen {
              img {
                max-width: 100%;
              }
              td,
              th {
                box-sizing: border-box;
              }
              u~div .wrapper {
                min-width: 100vw;
              }
              a[x-apple-data-detectors] {
                color: inherit;
                text-decoration: none;
              }
              .all-font-roboto {
                font-family: Roboto, -apple-system, "Segoe UI", sans-serif !important;
              }
              .all-font-sans {
                font-family: -apple-system, "Segoe UI", sans-serif !important;
              }
            }
            @media (max-width: 600px) {
              .sm-inline-block {
                display: inline-block !important;
              }
              .sm-hidden {
                display: none !important;
              }
              .sm-leading-32 {
                line-height: 32px !important;
              }
              .sm-p-20 {
                padding: 20px !important;
              }
              .sm-py-12 {
                padding-top: 12px !important;
                padding-bottom: 12px !important;
              }
              .sm-text-center {
                text-align: center !important;
              }
              .sm-text-xs {
                font-size: 12px !important;
              }
              .sm-text-lg {
                font-size: 18px !important;
              }
              .sm-w-1-4 {
                width: 25% !important;
              }
              .sm-w-3-4 {
                width: 75% !important;
              }
              .sm-w-full {
                width: 100% !important;
              }
            }
          </style>
          <style>
            @media (max-width: 600px) {
              .sm-dui17-b-t {
                border: solid #4299e1;
                border-width: 4px 0 0;
              }
            }
            
          </style>
        </head>
        <body style="box-sizing: border-box; margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #131a29;">
          <div style="display: none; line-height: 0; font-size: 0;">Thanks for placing your Image generation request with HeadGen AI</div>
          <table class="wrapper all-font-sans" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center" style="padding: 24px;" width="100%">
                <table class="sm-w-full" width="600" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="left" class="sm-p-20 sm-dui17-b-t" style="border-radius: 2px; padding: 40px; position: relative; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05); vertical-align: top; z-index: 50;" bgcolor="#ffffff" valign="top">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="80%">
                            <h1 class="sm-text-lg all-font-roboto" style="font-weight: 700; line-height: 100%; margin: 0; margin-bottom: 4px; font-size: 24px;">Customer Receipt</h1>
                            <p class="sm-text-xs" style="margin: 0; color: #a0aec0; font-size: 14px;">Your Headshot generation has been confirmed</p>
                          </td>
                          
                        </tr>
                      </table>
                      <div style="line-height: 32px;">&zwnj;</div>
                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">E-Mail</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right"> ${body.email} </td>
                        </tr>
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">Gender</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.gender}</td>
                        </tr>
                        
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>
                     
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>
                      <table style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="color: #718096;" width="50%">Original Price</td>
                          <td style="font-weight: 600; text-align: right;text-decoration: line-through;" width="50%" align="right">${selectedPlan.originalPrice}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600; padding-top: 32px; color: #000000; font-size: 20px;" width="50%">Total</td>
                          <td style="font-weight: 600; padding-top: 32px; text-align: right; color: #1d02b2; font-size: 20px;" width="50%" align="right">${selectedPlan.price}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.MAIL_ID, // sender address
    to: body.email, // list of receivers
    subject: "Order confirmed", // Subject line
    // text: "Hello jai this is the receipt for your order", // plain text body
    html: htmlContent, // html body
  });
  // console.log(info)

  // send mail to seller

  const htmlContentSeller = `    
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta charset="utf8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <meta name="x-apple-disable-message-reformatting">
          <title>Your reservation is now confirmed</title>
  
          <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"><!--<![endif]-->
  
          <!--[if mso]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <style>
            table {border-collapse: collapse;}
            td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
          </style>
          <![endif]-->
          <style>
            @media screen {
              img {
                max-width: 100%;
              }
              td,
              th {
                box-sizing: border-box;
              }
              u~div .wrapper {
                min-width: 100vw;
              }
              a[x-apple-data-detectors] {
                color: inherit;
                text-decoration: none;
              }
              .all-font-roboto {
                font-family: Roboto, -apple-system, "Segoe UI", sans-serif !important;
              }
              .all-font-sans {
                font-family: -apple-system, "Segoe UI", sans-serif !important;
              }
            }
            @media (max-width: 600px) {
              .sm-inline-block {
                display: inline-block !important;
              }
              .sm-hidden {
                display: none !important;
              }
              .sm-leading-32 {
                line-height: 32px !important;
              }
              .sm-p-20 {
                padding: 20px !important;
              }
              .sm-py-12 {
                padding-top: 12px !important;
                padding-bottom: 12px !important;
              }
              .sm-text-center {
                text-align: center !important;
              }
              .sm-text-xs {
                font-size: 12px !important;
              }
              .sm-text-lg {
                font-size: 18px !important;
              }
              .sm-w-1-4 {
                width: 25% !important;
              }
              .sm-w-3-4 {
                width: 75% !important;
              }
              .sm-w-full {
                width: 100% !important;
              }
            }
          </style>
          <style>
            @media (max-width: 600px) {
              .sm-dui17-b-t {
                border: solid #4299e1;
                border-width: 4px 0 0;
              }
            }

            
          </style>
        </head>
        <body style="box-sizing: border-box; margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #131a29;">
          <div style="display: none; line-height: 0; font-size: 0;">Thanks for placing your Image generation request with HeadGen AI</div>
          <table class="wrapper all-font-sans" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center" style="padding: 24px;" width="100%">
                <table class="sm-w-full" width="600" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="left" class="sm-p-20 sm-dui17-b-t" style="border-radius: 2px; padding: 40px; position: relative; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05); vertical-align: top; z-index: 50;" bgcolor="#ffffff" valign="top">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td width="80%">
                          <div> 
                            HeadGen AI
                          <div>
                            <h1 class="sm-text-lg all-font-roboto " style="font-weight: 700; line-height: 100%; margin: 0; margin-bottom: 4px; font-size: 24px;">Customer Receipt</h1>
                            <p class="sm-text-xs" style="margin: 0; color: #a0aec0; font-size: 14px;">Your Headshot generation has been confirmed</p>
                          </td>
                          
                        </tr>
                      </table>
                      <div style="line-height: 32px;">&zwnj;</div>
                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">E-Mail</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right"> ${body.email} </td>
                        </tr>
                        <tr>
                          <td class="sm-inline-block" style="color: #718096;" width="50%">Gender</td>
                          <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${body.gender}</td>
                        </tr>
                        ${typeInfo}
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>

                      <table class="sm-leading-32" style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="sm-inline-block" style="color: #718096;" width="50%">Pack Name</td>
                        <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right"> ${selectedPlan.packName} </td>
                      </tr>
                      <tr>
                        <td class="sm-inline-block" style="color: #718096;" width="50%">Original Price</td>
                        <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${selectedPlan.originalPrice}</td>
                      </tr>
                      <tr>
                        <td class="sm-inline-block" style="color: #718096;" width="50%">Price</td>
                        <td class="sm-inline-block" style="font-weight: 600; text-align: right;" width="50%" align="right">${selectedPlan.price}</td>
                      </tr>
                    </table>


                  

                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 24px; padding-bottom: 24px;">
                            <div style="background-color: #edf2f7; height: 2px; line-height: 2px;">&zwnj;</div>
                          </td>
                        </tr>
                      </table>
                      <table style="line-height: 28px; font-size: 14px;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="color: #718096;" width="50%">Original Price</td>
                          <td style="font-weight: 600; text-align: right;text-decoration: line-through;" width="50%" align="right">${selectedPlan.originalPrice}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600; padding-top: 32px; color: #000000; font-size: 20px;" width="50%">Total</td>
                          <td style="font-weight: 600; padding-top: 32px; text-align: right; color: #1d02b2; font-size: 20px;" width="50%" align="right">${selectedPlan.price}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

  await transporter.sendMail({
    from: process.env.MAIL_ID, // sender address
    to: process.env.SELLER_MAIL, // list of receivers
    subject: `Order by ${body.email}`, // Subject line
    // text: "Hello jai this is the receipt for your order", // plain text body
    html: htmlContentSeller, // html body
  });
};
