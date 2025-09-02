import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Loader from "@/components/Loader";
import TeachersGrid from "@/components/TeachersGrid";
import { useTeachers } from "@/hooks/useTeachers";
import FilterPanel from "@/components/FilterPanel";

export default function FindCoaching() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState(null);
	const [filters, setFilters] = useState({
		location: "",
		subject: "",
		grade: "",
	});
	const { teachers, loading } = useTeachers(filters);
	const [selected, setSelected] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		fetch("/api/find-coaching")
			.then((res) => res.json())
			.then(setData)
			.catch(console.error);
	}, []);

	useEffect(() => {
		const subject = searchParams.get("subject") || "";
		const grade = searchParams.get("grade") || "";
		const location = searchParams.get("location") || "";
		setFilters((f) => ({ ...f, subject, grade, location }));
	}, [searchParams]);

	useEffect(() => {
		const params = {};
		if (filters.subject) params.subject = filters.subject;
		if (filters.grade) params.grade = filters.grade;
		if (filters.location) params.location = filters.location;
		setSearchParams(params, { replace: true });
	}, [filters, setSearchParams]);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	if (!data)
		return (
			<PageTransition>
				<Loader />
			</PageTransition>
		);

	const { locations, subjects, grades } = data.filters;

	return (
		<PageTransition>
			<div className="lg:flex lg:items-start">
				<button
					className="lg:hidden fixed bottom-4 right-4 z-30 btn-primary"
					onClick={() => setMobileOpen(true)}
				>
					Filters
				</button>
				{mobileOpen && (
					<div className="fixed inset-0 z-40 flex">
						<div
							className="flex-1 bg-black/50"
							onClick={() => setMobileOpen(false)}
						></div>
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							className="w-3/4 max-w-sm bg-white p-4 overflow-y-auto"
						>
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-lg font-semibold">Filters</h2>
								<button
									aria-label="Close filters"
									onClick={() => setMobileOpen(false)}
									className="text-gray-700"
								>
									&times;
								</button>
							</div>
							<FilterPanel
								filters={filters}
								setFilters={setFilters}
								locations={locations}
								grades={grades}
								subjects={subjects}
							/>
						</motion.div>
					</div>
				)}

				{/* Desktop sidebar */}
				<aside className="hidden lg:block lg:w-60 bg-white border-r border-gray-200 p-4 pt-20 lg:sticky lg:top-20 lg:self-start lg:pb-8">
					<h2 className="text-xl font-semibold mb-4">Filter Options</h2>
					<FilterPanel
						filters={filters}
						setFilters={setFilters}
						locations={locations}
						grades={grades}
						subjects={subjects}
					/>
				</aside>

				<main className="flex-1 p-2 pt-4 lg:pt-20 lg:pl-8 pb-8">
					<section className="py-12 bg-white">
						<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									Teachers
								</h2>
							</div>
							<TeachersGrid
								teachers={teachers}
								loading={loading}
								onSelect={setSelected}
							/>
						</div>
					</section>
				</main>
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
									<strong>Grade taught:</strong> {selected.grades.join(",")}
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
		</PageTransition>
	);
}
