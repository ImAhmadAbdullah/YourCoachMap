import { motion } from "framer-motion";

export default function Loader() {
	return (
		<div className="flex justify-center py-16">
			<motion.div
				className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full"
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
			/>
		</div>
	);
}
