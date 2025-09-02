export const pageVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeInOut" },
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: { duration: 0.2, ease: "easeInOut" },
	},
};

export const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};
