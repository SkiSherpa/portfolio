// simple server side validation
export const validateString = (value: unknown, maxLength: number) => {
	if (typeof value === "string") {
		console.log("utils, value.length", value.length, value);
	}
	if (!value || typeof value !== "string" || value.length < maxLength) {
		return false;
	}
	return true;
};
