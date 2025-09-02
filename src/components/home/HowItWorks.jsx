import FadeInWhenVisible from "@/animations/FadeInWhenVisible";

export default function HowItWorks() {
	return (
		<section className="py-16 bg-white border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						How It Works
					</h2>
					<p className="text-lg text-gray-600">
						Simple steps to find your ideal coaching center
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FadeInWhenVisible className="text-center">
						<div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-search"
							>
								<path d="m21 21-4.34-4.34" />
								<circle cx="11" cy="11" r="8" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
						<p className="text-gray-600">
							Find teachers by subject, location, and preferences
						</p>
					</FadeInWhenVisible>
					<FadeInWhenVisible className="text-center">
						<div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-eye"
							>
								<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
								<circle cx="12" cy="12" r="3" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2">Compare & Review</h3>
						<p className="text-gray-600">
							Compare teachers and read authentic reviews
						</p>
					</FadeInWhenVisible>
					<FadeInWhenVisible className="text-center">
						<div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-phone"
							>
								<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2">Connect & Enroll</h3>
						<p className="text-gray-600">
							Contact directly and enroll in your chosen coaching
						</p>
					</FadeInWhenVisible>
				</div>
			</div>
		</section>
	);
}
