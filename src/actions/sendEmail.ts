"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Something went wrong";
	}
	return message;
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

	try {
		resend.emails.send({
			from: `onboarding@resend.dev`,
			to: ["erickjwatanabe@gmail.com"],
			subject: "MessAGE from portfolio page",
			text: message as string,
			replyTo: senderEmail as string,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
};
