exports.handler = async (event) => {
	const nodemailer = require("nodemailer");
	let transporter;
	try {	
		transporter = nodemailer.createTransport({
			service: "GoDaddy",
			auth: {
				user: process.env.FROM_EMAIL,
				pass: process.env.FROM_PASS
			}
		});
	} catch(error) {
		console.log(error)
	}

	let data = JSON.parse(event.body).payload ? JSON.parse(event.body).payload : JSON.parse(event.body);
	console.log( JSON.parse(event.body).payload)
	console.log( JSON.parse(event.body))
	if (data.captcha.length > 0) {
		return {
			statusCode: 400,
			body: "Spam"
		};
	}
	let messageText;
	let toEmail;
	if (data.type === "Sign up") {
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
		to: [toEmail, process.env.TEST_EMAIL],
		from: process.env.FROM_EMAIL,
		subject: `[FORM] ${data.type}: ${data.fullName}`,
		text: messageText
	};

	try {
		await transporter.sendMail(msg)
		return {
			statusCode: 200,
			body: "OK"
		}
	} catch (error) {
		return {
			statusCode: error.code,
			body: error.message
		}
	}
};
