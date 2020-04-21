const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

exports.handler = async request => {
	sgMail.setApiKey(SENDGRID_API_KEY);
  let data = JSON.parse(request.body);
  
	const msg = {
		to: "macguire.rintoul@gmail.com",
		from: "mrintoul@sfu.ca",
		subject: "Form Submission",
		text: `
    Name: ${data.fullName}
    `
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
  */
};
