"use client";
import React, { useState, createContext, useContext, useEffect } from "react";
import type { Theme } from "@/lib/types";

type ThemeSwitchContextProviderProps = {
	children: React.ReactNode;
};

type ThemeSwitchContextType = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeSwitchContext = createContext<ThemeSwitchContextType | null>(
	null
);

export default function ThemeSwitchContextProvider({
	children,
}: ThemeSwitchContextProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark"); // add dark class to the dom
		} else {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme") as Theme | null;
		if (localTheme) {
			setTheme(localTheme);
			if (localTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<ThemeSwitchContext.Provider
			value={{
				theme,
				setTheme: toggleTheme,
			}}
		>
			{children}
		</ThemeSwitchContext.Provider>
	);
}

export function useThemeSwitchContext() {
	const context = useContext(ThemeSwitchContext);

	if (context === null) {
		throw new Error(
			"useThemeSwitch must be used within an ThemeSwitchContextProvider"
		);
	}
	return context;
}
