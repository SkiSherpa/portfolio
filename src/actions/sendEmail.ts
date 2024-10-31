"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}
	return true;
};

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

	resend.emails.send({
		from: `onboarding@resend.dev`,
		to: ["erickjwatanabe@gmail.com"],
		subject: "MessAGE from portfolio page",
		text: message as string,
		replyTo: senderEmail as string,
	});
};
