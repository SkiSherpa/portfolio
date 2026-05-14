import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center">
			<Intro />
			<SectionDivider />
			<AboutMe />
			<Projects />
			<Skills />
			<Experience />
			<ContactMe />
		</main>
	);
}
