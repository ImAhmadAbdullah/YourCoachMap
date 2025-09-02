import { motion } from "framer-motion";
import { pageVariants } from "@/animations/variants";

export default function PageTransition({ children }) {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
			className="min-h-full"
		>
			{children}
		</motion.div>
	);
}
