const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

exports.handler = async () => {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: "macguire.rintoul@gmail.com",
    from: "mrintoul@sfu.ca",
    subject: "Contact Form Submission",
    text: "It works"
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: "Message sent"
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message
    };
  }
};
