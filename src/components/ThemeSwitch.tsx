"use client";
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useThemeSwitchContext } from "@/context/ThemeSwitchContext";

export default function ThemeSwitch() {
	const { theme, setTheme } = useThemeSwitchContext();

	return (
		<button
			className="fixed bottom-5 right-5 bg-orange-50 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center border-sky-600 border-2 hover:scale-[1.15] active:scale-105 transition-all dark:border-sky-600 dark:bg-gray-900 dark:text-zinc-200 z-10"
			onClick={() => setTheme(theme)}
		>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</button>
	);
}
