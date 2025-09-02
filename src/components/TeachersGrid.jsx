import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";

const subjectStyles = {
	Biology: "bg-green-100 text-green-700",
	Physics: "bg-purple-200 text-purple-700",
	Math: "bg-yellow-100 text-yellow-700",
	English: "bg-pink-100 text-pink-700",
	Chemistry: "bg-blue-100 text-blue-700",
	"A-Levels": "bg-indigo-100 text-indigo-700",
	"O-Levels": "bg-red-100 text-red-700",
	"Computer Science": "bg-sky-100 text-sky-700",
};

export default function TeachersGrid({ teachers = [], loading, onSelect }) {
	if (loading) {
		return <Loader />;
	}
	if (!loading && teachers.length === 0) {
		return (
			<p className="text-center py-8 text-gray-500">
				No teachers match your filters.
			</p>
		);
	}

	return (
		<motion.div
			layout
			className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			<AnimatePresence>
				{teachers.map((t) => (
					<motion.div
						key={t.name}
						layout
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="teacher-card bg-white rounded-lg shadow-md flex flex-col"
					>
						<div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-t-lg flex justify-center">
							<img
								className="w-24 h-24 rounded-full object-cover border-4 border-white"
								src={t.photoUrl}
								alt={t.alt || t.name}
							/>
						</div>
						<div className="p-4 text-center flex flex-col items-center flex-grow">
							<h3 className="text-xl font-semibold text-gray-900 mb-1">
								{t.name}
							</h3>
							<div className="flex flex-wrap justify-center gap-2 mb-3">
								{t.subjects.map((subj) => (
									<span
										key={subj}
										className={`${subjectStyles[subj] || "bg-gray-100 text-gray-700"} text-xs font-medium px-2 py-1 rounded-full`}
									>
										{subj}
									</span>
								))}
							</div>
							<div className="mt-auto flex space-x-3">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="btn-primary px-4 py-2 text-sm"
									onClick={() => onSelect && onSelect(t)}
								>
									{t.coachingName}
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="btn-secondary px-4 py-2 text-sm"
									onClick={() => onSelect && onSelect(t)}
								>
									View Details
								</motion.button>
							</div>
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	);
}
