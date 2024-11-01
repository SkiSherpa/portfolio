import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] p-2 border-2 rounded-full outline-none bg-gray-900 transition-all text-white focus:scale-110 hover:scale-110 active:scale-105 hover:text-sky-600 disabled:scale-100 disabled:bg-opacity-65"
			disabled={pending}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-sky-600"></div>
			) : (
				<>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
				</>
			)}
		</button>
	);
}
