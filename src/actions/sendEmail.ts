"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
	if (typeof value === "string") {
		console.log(
			"value.length",
			value.length,
			value,
			"-=-",
			value.length < maxLength
		);
	}
	// This is my issue.
	if (!value || typeof value !== "string" || value.length > maxLength) {
		// console.log("VALUES is BAD");
		return false;
	}
	let val = "";
	if (typeof value === "string") {
		val = value.toString();
	}
	console.log(`validate went through will return true for ${val}`);
	return true;
};

export const sendEmail = async (formData: FormData) => {
	console.log("on server");
	const message = formData.get("message") || "invalid message";
	const senderEmail = formData.get("senderEmail");
	// console.log(message, senderEmail);

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
