"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY as string);

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

	try {
		await resend.emails.send({
			from: "onboarding@resend.dev", // Resend's test email for development
			to: "erickjwatanabe@gmail.com",
			subject: "Message from portfolio page",
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
