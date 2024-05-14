const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

// Set your SendGrid API key here
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

exports.sendOtpEmail = functions.https.onCall((data, context) => {
  const { email, otp } = data;

  const msg = {
    to: email,
    from: 'your-email@example.com', // This must be a verified sender email in SendGrid
    subject: 'Your OTP',
    text: `Your OTP is: ${otp}`,
    html: `<strong>Your OTP is: ${otp}</strong>`,
  };

  return sgMail.send(msg)
    .then(() => ({ success: true }))
    .catch(error => {
      console.error('Error sending email:', error);
      return { success: false };
    });
});
