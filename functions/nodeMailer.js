const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: 'GoDaddy',
	auth: {
		user: process.env.FROM_EMAIL,
		pass: process.env.FROM_PASS
	}
});

exports.handler = async request => {
	let data = JSON.parse(request.body);
	if (data.captcha.length > 0) {
		return {
			statusCode: 400,
			body: "Spam"
		};
	}
	let messageText;
	let toEmail;
	if (data.type === "Sign up") {
		toEmail = process.env.EMAIL_SIGNUP
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
		// type is substitution
		toEmail = process.env.EMAIL_SUBS
		messageText = `
Type: ${data.type}
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Address 1: ${data.address1}
Address 2: ${data.address2}
City: ${data.city}
Delivery day: ${data.deliveryDay}
Box type: ${data.boxType}

Items to remove: 
${data.itemsToRemove}

Items to add: 
${data.itemsToAdd}

Comments: ${data.comments}
    `;
	}
	
	const msg = {
		to: [toEmail, process.env.TEST_EMAIL],
		from: process.env.FROM_EMAIL,
		subject: `[FORM] ${data.type}: ${data.fullName}`,
		text: messageText
	};

	try {
		await transporter.sendMail(msg);
		return {
			statusCode: 200,
			body: "Message sent"
		};
	} catch (e) {
		console.error(e)
		return {
			statusCode: e.code,
			body: e.message
		};
	}
};
