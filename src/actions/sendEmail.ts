"use server";

import sendgrid from "@sendgrid/mail";
import { validateString, getErrorMessage } from "@/lib/utils";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendEmail = async (formData: FormData) => {
	const message = formData.get("message") || "invalid message";
	const senderEmail = formData.get("senderEmail");

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid senderEmail",
		};
	}
	let data;
	try {
		data = await sendgrid.send({
			from: `erickjwatanabe@gmail.com`,
			to: "erickjwatanabe@gmail.com",
			subject: "Message from portfolio page",
			text: message as string,
			replyTo: senderEmail as string,
			html: `
				<h3>New message from your portfolio site</h3>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
				<p><strong>From:</strong> ${senderEmail}</p>
			`,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		success: true,
		message: "Email sent successfully!",
	};
};
