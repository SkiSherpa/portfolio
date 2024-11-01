"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import React from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

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
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
};
