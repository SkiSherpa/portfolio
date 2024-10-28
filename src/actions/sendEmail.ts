"use server";

export const sendEmail = async (formData: FormData) => {
	console.log("on server");
	console.log(formData.get("message"));
};
