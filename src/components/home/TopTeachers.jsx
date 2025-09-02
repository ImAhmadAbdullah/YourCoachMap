import { useState } from "react";
import TeachersCarousel from "@/components/TeachersCarousel";
import { useTeachers } from "@/hooks/useTeachers";

export default function TopTeachers() {
	const { teachers, loading } = useTeachers({ topTeacher: true, limit: 12 });
	const [selected, setSelected] = useState(null);

	return (
		<section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Top Teachers
					</h2>
					<p className="text-lg text-gray-600">
						Connect with experienced and verified teachers
					</p>
				</div>
				<TeachersCarousel
					teachers={teachers}
					loading={loading}
					onSelect={setSelected}
				/>
			</div>
			{selected && (
				<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
					<div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative overflow-hidden">
						<button
							aria-label="Close details"
							onClick={() => setSelected(null)}
							className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
						>
							&times;
						</button>
						<div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 flex flex-col items-center rounded-t-lg">
							<img
								src={selected.photoUrl}
								alt={selected.alt}
								className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4"
							/>
							<h2 className="text-white text-2xl font-bold">{selected.name}</h2>
						</div>
						<div className="p-6 space-y-4 text-gray-800">
							<p>
								<strong>Coaching Centre:</strong> {selected.coachingName}
							</p>
							<p>
								<strong>Subject taught:</strong> {selected.subjects.join(", ")}
							</p>
							{selected.fees && (
								<p>
									<strong>Fees:</strong> {selected.fees}
								</p>
							)}
							{selected.grades && (
								<p>
									<strong>Grade taught:</strong> {selected.grades.join(", ")}
								</p>
							)}
							{selected.timing && (
								<p>
									<strong>Class Timing:</strong> {selected.timing}
								</p>
							)}
							{selected.contact && (
								<p>
									<strong>Contact Details:</strong> {selected.contact}
								</p>
							)}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
