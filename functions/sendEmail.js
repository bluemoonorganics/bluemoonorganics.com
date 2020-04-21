const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

exports.handler = async request => {
	sgMail.setApiKey(SENDGRID_API_KEY);
	let data = JSON.parse(request.body);
	let messageText;
	return {
		statusCode: 200,
		body: "Message sent"
	};
	/*
	if (data.type === "Sign up") {
		messageText = `
      Type: ${data.type}
      Name: ${data.fullName}
      Phone: ${data.phone}
      Email: ${data.email}
      Address 1: ${data.address1}
      Address 2: ${data.address2}
      City: ${data.city}
      Start date: ${data.startDate}
      Frequency: ${data.frequency}
      Promo code: ${data.promoCode}
    `;
	} else {
		messageText = `Hi`;
	}

	const msg = {
		to: "macguire.rintoul@gmail.com",
		from: "mrintoul@sfu.ca",
		subject: "Form Submission",
		text: messageText
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
