import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">YourCoachMap</h3>
						<p className="text-gray-400 mb-4">
							Connecting students with the best coaching centers in Dhaka since
							2025.
						</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">For Students</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link
									to="/find-coaching"
									className="hover:text-white transition-colors"
								>
									Find Coaching
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Company</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link
									to="/about"
									className="hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/careers"
									className="hover:text-white transition-colors"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400">
							&copy; 2025 YourCoachMap. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								to="/privacy-policy"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
