const nodemailer = require("nodemailer");

exports.handler = async event => {
	const transporter = nodemailer.createTransport({
		host: "smtpout.secureserver.net",
		port: 465,
		secure: true,
		auth: {
			user: process.env.FROM_EMAIL,
			pass: process.env.FROM_PASS
		}
		// debug: true, // show debug output
		// logger: true // log information in console
	});

	// verify connection configuration
	transporter.verify(function(error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("Server is ready to take our messages");
		}
	});

	let data = JSON.parse(event.body).payload
		? JSON.parse(event.body).payload
		: JSON.parse(event.body);

	if (data.captcha.length > 0) {
		return {
			statusCode: 400,
			body: "Spam"
		};
	}
	let messageText;
	let toEmail;
	if (data.type === "Signup") {
		toEmail = process.env.EMAIL_SIGNUP;
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
		toEmail = process.env.EMAIL_SUBS;
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
		to: toEmail,
		from: process.env.FROM_EMAIL,
		subject: `[FORM] ${data.type}: ${data.fullName}`,
		text: messageText
	};

	try {
		console.log("sending message");
		await transporter.sendMail(msg);
		console.log("message sent");
		return {
			statusCode: 200,
			body: "OK"
		};
	} catch (error) {
		return {
			statusCode: error.code,
			body: error.message
		};
	}
};
