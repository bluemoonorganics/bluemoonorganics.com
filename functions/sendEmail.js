const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

exports.handler = async request => {
	sgMail.setApiKey(SENDGRID_API_KEY);
	let data = JSON.parse(request.body);
	if (data.captcha.length > 0) {
		return {
			statusCode: 400,
			body: "Spam"
		};
	}
	let messageText;

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
		to: ["info@bluemoonorganics.com", data.email],
		from: "info@bluemoonorganics.com",
		subject: `[FORM] ${data.type}: ${data.fullName}`,
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
};
