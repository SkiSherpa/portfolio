import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import type { SectionName } from "@/lib/types";

export function useSectionInView(
	sectionName: SectionName,
	thresholdValue = 0.75
) {
	const { ref, inView } = useInView({
		threshold: thresholdValue,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return { ref }; // make sure to return ref cause you need it
}
