const accountDeletionSuccessTemplate = (userName) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <title>Account Deleted Successfully</title>
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
        color: #dc3545;
      }

      .body {
        font-size: 16px;
        margin-bottom: 20px;
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
      <div class="message">Account Deleted Successfully</div>
      <div class="body">
        <p>Dear ${userName},</p>
        <p>We're writing to confirm that your StudyNotion account has been successfully deleted.</p>
        <p>All of your associated data has been permanently removed from our systems.</p>
        <p>If this action was not performed by you or was a mistake, please contact us immediately.</p>
      </div>
      <div class="support">
        Need help? Reach out to us at 
        <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
      </div>
    </div>
  </body>
  
  </html>`;
};

module.exports = accountDeletionSuccessTemplate;
