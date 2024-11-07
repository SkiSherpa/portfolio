import React from "react";

import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export default function ContactFormEmail({
	message,
	senderEmail,
}: ContactFormEmailProps) {
	return (
		<div>
			<h3>New message from portfolio</h3>
			<p>
				<strong>Message:</strong> {message}
			</p>
			<p>
				<strong>From:</strong> {senderEmail}
			</p>
		</div>
	);
}
