import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center">
			<Header />
			<Intro />
			<SectionDivider />
			<AboutMe />
			<Projects />
			<Skills />
			<Experience />
			<ContactMe />
			<Footer />
		</main>
	);
}
