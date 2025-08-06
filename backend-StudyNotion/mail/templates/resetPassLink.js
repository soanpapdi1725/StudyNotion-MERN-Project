const resetPasswordTemplate = (resetLink) => {
  return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Reset Password</title>
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
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
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
			<a href="https://studynotion-edtech-project.vercel.app"><img class="logo"
					src="https://res.cloudinary.com/dbyweciny/image/upload/v1754397221/studynotion_logo_dwsdk7.png" alt="StudyNotion Logo"></a>
			<div class="message">Password Reset Request</div>
			<div class="body">
				<p>Dear User,</p>
				<p>We received a request to reset your password for your StudyNotion account.</p>
				<p>Please click the button below to reset your password:</p>
				<a class="cta" href="${resetLink}" target="_blank">Reset Password</a>
				<p>If you didn’t request a password reset, you can safely ignore this email. This link will expire in 15 minutes for security reasons.</p>
			</div>
			<div class="support">
				If you have any questions or need help, contact us at 
				<a href="mailto:info@studynotion.com">info@studynotion.com</a>.
			</div>
		</div>
	</body>
	
	</html>`;
};

module.exports = resetPasswordTemplate;
