import FadeInWhenVisible from "@/animations/FadeInWhenVisible";

export default function Stats() {
	return (
		<section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
					<FadeInWhenVisible className="text-white">
						<div className="text-4xl font-bold mb-2">500+</div>
						<div className="text-indigo-200">Coaching Centers</div>
					</FadeInWhenVisible>
					<FadeInWhenVisible className="text-white">
						<div className="text-4xl font-bold mb-2">50,000+</div>
						<div className="text-indigo-200">Students</div>
					</FadeInWhenVisible>
					<FadeInWhenVisible className="text-white">
						<div className="text-4xl font-bold mb-2">15,000+</div>
						<div className="text-indigo-200">Reviews</div>
					</FadeInWhenVisible>
					<FadeInWhenVisible className="text-white">
						<div className="text-4xl font-bold mb-2">98%</div>
						<div className="text-indigo-200">Success Rate</div>
					</FadeInWhenVisible>
				</div>
			</div>
		</section>
	);
}
