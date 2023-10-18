const nodemailer = require('nodemailer');
const { META_PASSWORD } = process.env;

const nodeMailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'nadiiatsytsylina@meta.ua',
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodeMailerConfig);

const sendNewPasswordByEmail = async (email, newPassword) => {
  try {
    const mailOptions = {
      from: 'nadiiatsytsylina@meta.ua',
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
