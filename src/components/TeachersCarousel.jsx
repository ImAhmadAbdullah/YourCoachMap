import { useRef } from "react";
import { motion } from "framer-motion";
import { useTeachers } from "@/hooks/useTeachers";
import Loader from "@/components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

export default function TeachersCarousel({
	teachers: teachersProp,
	loading: loadingProp,
	onSelect,
}) {
	const shouldFetch = teachersProp === undefined;
	const { teachers: internalTeachers, loading: internalLoading } =
		useTeachers();
	const teachers = shouldFetch ? internalTeachers : teachersProp;
	const loading = shouldFetch ? internalLoading : loadingProp;
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	if (loading) {
		return <Loader />;
	}
	if (!loading && teachers.length === 0) {
		return <p className="text-center py-8 text-gray-500">No teachers found.</p>;
	}

	return (
		<div className="relative px-8 z-0">
			<Swiper
				modules={[Autoplay, Navigation]}
				preventClicks={false}
				preventClicksPropagation={false}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
				}}
				navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
				loop
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				speed={600}
				spaceBetween={24}
				slidesPerView={1}
				breakpoints={{
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					1280: { slidesPerView: 4 },
				}}
			>
				{teachers.map((t) => (
					<SwiperSlide key={t.name} className="h-auto">
						<div className="teacher-card relative h-full bg-white rounded-lg shadow-md flex flex-col pointer-events-auto">
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
								<div className="mt-auto flex space-x-3 relative z-10">
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
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<button
				ref={prevRef}
				aria-label="Previous"
				className="prev-btn absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition-colors z-20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
			<button
				ref={nextRef}
				aria-label="Next"
				className="next-btn absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition-colors z-20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	);
}
