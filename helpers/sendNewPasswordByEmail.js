const nodemailer = require('nodemailer');
const { META_PASSWORD, META_USER, META_HOST } = process.env;

const nodeMailerConfig = {
  host: META_HOST,
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodeMailerConfig);

const sendNewPasswordByEmail = async (email, newPassword) => {
  try {
    const mailOptions = {
      from: META_USER,
      to: email,
      subject: 'Password Reset',
      text: `Your new password is: ${newPassword}`,
      html: `<p>Your new password is:\n ${newPassword}</p>`,
    };

    await transport.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

module.exports = sendNewPasswordByEmail;
