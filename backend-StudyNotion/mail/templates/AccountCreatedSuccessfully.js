const accountCreationSuccessTemplate = (userName, accountType) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <title>Account Created Successfully</title>
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

      .user-info {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
        color: #333;
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
      <div class="message">Welcome to StudyNotion!</div>
      <div class="body">
        <p>Dear ${userName},</p>
        <p>Your account has been successfully created on StudyNotion.</p>
        <div class="user-info">
          Role: [${accountType}]
        </div>
        <p>We're excited to have you onboard. You can now log in and start exploring all the features available to you.</p>
        <p>Thank you for joining our platform!</p>
      </div>
      <div class="support">
        If you have any questions or need help, contact us at 
        <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
      </div>
    </div>
  </body>
  
  </html>`;
};

module.exports = accountCreationSuccessTemplate;
