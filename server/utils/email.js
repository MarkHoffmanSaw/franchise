const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.from = `Franchise's Team <${process.env.EMAIL_FROM}>`;
  }

  // Сreate a transport
  newTransport() {
    // Sendinblue:
    if (process.env.NODE_ENV === "production")
      return nodemailer.createTransport({
        service: "SendinBlue",
        auth: {
          user: process.env.SENDINBLUE_USERNAME,
          pass: process.env.SENDINBLUE_USERNAME,
        },
      });

    // Mailtrap:
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send an email
  async send(subject, text) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    const subject = "Greetings letter";
    const text = `Hello, dear ${this.firstName}. We are glad to see you in the our project!`;
    await this.send(subject, text);
  }

  // sendPassReset(){}
};
