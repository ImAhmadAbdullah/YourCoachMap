import React from "react";

export default function FilterPanel({
	filters,
	setFilters,
	locations,
	grades,
	subjects,
}) {
	return (
		<div className="space-y-6">
			<div>
				<label
					htmlFor="location"
					className="block mb-1 text-gray-700 font-medium"
				>
					Location
				</label>
				<select
					id="location"
					value={filters.location}
					onChange={(e) =>
						setFilters({
							...filters,
							location: e.target.value,
						})
					}
					className="w-full border border-gray-300 rounded-md p-2"
				>
					<option value="">Select Location</option>
					{locations.map((l) => (
						<option key={l} value={l}>
							{l}
						</option>
					))}
				</select>
			</div>
			<div>
				<label
					htmlFor="subject"
					className="block mb-1 text-gray-700 font-medium"
				>
					Subject
				</label>
				<select
					id="subject"
					value={filters.subject}
					onChange={(e) =>
						setFilters({
							...filters,
							subject: e.target.value,
						})
					}
					className="w-full border border-gray-300 rounded-md p-2"
				>
					<option value="">Select Subject</option>
					{subjects.map((s) => (
						<option key={s} value={s}>
							{s}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor="grade" className="block mb-1 text-gray-700 font-medium">
					Grade
				</label>
				<select
					id="grade"
					value={filters.grade}
					onChange={(e) =>
						setFilters({
							...filters,
							grade: e.target.value,
						})
					}
					className="w-full border border-gray-300 rounded-md p-2"
				>
					<option value="">Select Grade</option>
					{grades.map((g) => (
						<option key={g.value} value={g.value}>
							{g.value}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
