"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	// try {
	console.log("on server");
	console.log(formData.get("message"));
	resend.emails.send({
		from: "onboarding@resend.dev",
		to: ["erickjwatanabe@gmail.com"],
		subject: "MessAGE from contact form",
		text: "Hellopw email! This is a test.",
	});
};
