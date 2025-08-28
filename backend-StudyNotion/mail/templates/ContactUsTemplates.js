// Contact Us - Email Templates

const contactCustomerTemplate = (
  firstName,
  lastName,
  contactNumber,
  message
) => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>We Received Your Message</title>
    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #333333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }
      .logo {
        max-width: 200px;
        margin-bottom: 20px;
        border-radius: 10px;
      }
      .message {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #28a745;
      }
      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .highlight {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 4px solid #28a745;
      }
      .support {
        font-size: 14px;
        color: #999999;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <a href="https://studynotion-edtech-project.vercel.app">
        <img class="logo" src="https://res.cloudinary.com/dbyweciny/image/upload/v1754397221/studynotion_logo_dwsdk7.png" alt="StudyNotion Logo">
      </a>
      <div class="message">Thank You for Contacting Us!</div>
      <div class="body">
        <div class="highlight">
          <p>Hey <strong>${firstName} ${lastName}</strong>,</p>
          <p>Thank you for showing interest in us! We will contact you shortly on your <strong>${contactNumber}</strong> regarding your inquiry about:</p>
          <p><em>"${message}"</em></p>
        </div>
        <p>Meanwhile, feel free to continue exploring our platform and discover all the amazing courses we have to offer.</p>
        <p>We appreciate your interest in StudyNotion!</p>
      </div>
      <div class="support">
        If you have further questions, write to us at 
        <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
      </div>
    </div>
  </body>
  </html>`;
};

// Internal notification to company
const contactCompanyTemplate = (
  firstName,
  lastName,
  email,
  contactNumber,
  message
) => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>New Contact Form Submission</title>
    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #333333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .logo {
        max-width: 200px;
        margin-bottom: 20px;
        border-radius: 10px;
      }
      .message {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #007bff;
      }
      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .user-info {
        font-size: 16px;
        margin-top: 10px;
        padding: 10px;
        background: #f7f7f7;
        border-radius: 8px;
      }
      .support {
        font-size: 14px;
        color: #999999;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <a href="https://studynotion-edtech-project.vercel.app">
        <img class="logo" src="https://res.cloudinary.com/dbyweciny/image/upload/v1754397221/studynotion_logo_dwsdk7.png" alt="StudyNotion Logo">
      </a>
      <div class="message">📩 New Contact Form Submission</div>
      <div class="body">
        <p>You have received a new contact request from:</p>
        <div class="user-info">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${contactNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      </div>
      <div class="support">
        This message was automatically generated from StudyNotion's Contact Form.
      </div>
    </div>
  </body>
  </html>`;
};

module.exports = { contactCustomerTemplate, contactCompanyTemplate };
