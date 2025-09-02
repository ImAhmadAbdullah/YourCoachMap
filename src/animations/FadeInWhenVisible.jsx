import { motion } from "framer-motion";
import { fadeInUp } from "./variants";

export default function FadeInWhenVisible({ children, ...props }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			variants={fadeInUp}
			{...props}
		>
			{children}
		</motion.div>
	);
}
