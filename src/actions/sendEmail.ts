"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	console.log("on server");
	const message = formData.get("message") || "invalid message";
	const senderEmail = formData.get("senderEmail");
	console.log(message, senderEmail);

	resend.emails.send({
		from: `onboarding@resend.dev`,
		to: ["erickjwatanabe@gmail.com"],
		subject: "MessAGE from portfolio page",
		text: `${message}`,
	});
};
