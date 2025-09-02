import { motion } from "framer-motion";

export default function CTA() {
	return (
		<section className="py-16 bg-indigo-600 border-t border-indigo-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl font-bold text-white mb-4">
					Ready to Get Started?
				</h2>
				<p className="text-xl text-indigo-200 mb-8">
					Join thousands of students and coaching centers on YourCoachMap
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/find-coaching">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold"
						>
							Find Coaching Centers
						</motion.button>
					</a>
				</div>
			</div>
		</section>
	);
}
