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
		<Html>
			<Head />
			<Preview>New message from your portfolio site</Preview>
			<Tailwind>
				<Body className="bg-gray-200">
					<Container>
						<Section className="bg-white borderBlack my-10 px-10 rounded-md">
							<Heading className="leading-tight">
								You recieved the following message from your contact formd
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>Email sent from: {senderEmail} </Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
