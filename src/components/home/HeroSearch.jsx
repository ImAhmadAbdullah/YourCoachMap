import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSearch() {
	const [subject, setSubject] = useState("");
	const [grade, setGrade] = useState("");
	const [location, setLocation] = useState("");
	const navigate = useNavigate();

	function handleSearch() {
		const params = new URLSearchParams();
		if (subject) params.set("subject", subject);
		if (grade) params.set("grade", grade);
		if (location) params.set("location", location);
		navigate(`/find-coaching?${params.toString()}`);
	}

	return (
		<section className="gradient-bg mt-16 pt-24 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Find Your Perfect
						<br />
						<span className="text-yellow-300">Coaching Center</span>
					</h1>
					<p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
						Connect with the best coaching centers in Dhaka for your exam
						preparation!
					</p>
					<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<div className="md:col-span-1">
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Subject
								</label>
								<select
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								>
									<option value="">Select Subject</option>
									<option>English</option>
									<option>Bangla</option>
									<option>Mathematics</option>
									<option>Physics</option>
									<option>Chemistry</option>
									<option>Biology</option>
									<option>Computer Science</option>
								</select>
							</div>
							<div className="md:col-span-1">
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Grade
								</label>
								<select
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									value={grade}
									onChange={(e) => setGrade(e.target.value)}
								>
									<option value="">Select Grade</option>
									<option>O Levels</option>
									<option>IGCSE</option>
									<option>AS Level</option>
									<option>A2 Level</option>
									<option>Grades 7 & 8</option>
								</select>
							</div>
							<div className="md:col-span-1">
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Location
								</label>
								<select
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								>
									<option value="">Select Area</option>
									<option>Uttara</option>
									<option>Gulshan</option>
									<option>Banani</option>
									<option>Mirpur</option>
									<option>Dhanmondi</option>
									<option>Mohammadpur</option>
								</select>
							</div>
							<div className="md:col-span-1">
								<label className="block text-sm font-medium text-gray-700 mb-1">
									&nbsp;
								</label>
								<button
									className="btn-primary w-full px-6 py-2"
									onClick={handleSearch}
								>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
