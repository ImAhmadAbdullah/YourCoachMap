import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
	{
		name: "Rafiq Ahmed",
		role: "AS-Level Student",
		text: "YourCoachMap made it easy to find the right coaching for my AS-Level prep.",
		gender: "male",
	},
	{
		name: "Saima Khan",
		role: "A-Level Student",
		text: "I compared different centers and found one that fit my budget and schedule perfectly.",
		gender: "female",
	},
	{
		name: "Tanvir Islam",
		role: "IGCSE Student",
		text: "The detailed profiles and authentic reviews gave me confidence in my choice.",
		gender: "male",
	},
	{
		name: "Lamia Rahman",
		role: "O-Level Student",
		text: "A smooth experience with plenty of options to choose from.",
		gender: "female",
	},
	{
		name: "Farhan Ali",
		role: "A2 Student",
		text: "Great platform with helpful information about each coaching center.",
		gender: "male",
	},
];

const photoCache = new Map();
async function getPhoto(name, gender) {
	if (photoCache.has(name)) return photoCache.get(name);
	let url;
	try {
		const res = await fetch(
			`https://randomuser.me/api/?gender=${gender}&seed=${encodeURIComponent(name)}&inc=picture`,
		);
		const data = await res.json();
		url = data.results?.[0]?.picture?.large;
	} catch {
		url = undefined;
	}
	if (!url) {
		url = `https://i.pravatar.cc/150?u=${encodeURIComponent(name)}`;
	}
	photoCache.set(name, url);
	return url;
}

export default function Testimonials() {
	const [photos, setPhotos] = useState({});

	useEffect(() => {
		testimonials.forEach(async (t) => {
			const url = await getPhoto(t.name, t.gender);
			setPhotos((p) => ({ ...p, [t.name]: url }));
		});
	}, []);

	return (
		<section className="py-16 bg-white border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						What Students Say
					</h2>
					<p className="text-lg text-gray-600">
						Real stories from real students
					</p>
				</div>
				<Swiper
					modules={[Autoplay, Pagination]}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					loop
					pagination={{ clickable: true }}
					slidesPerView={1}
				>
					{testimonials.map((t) => (
						<SwiperSlide key={t.name} className="h-auto">
							<motion.div
								className="bg-gray-50 rounded-lg p-6 max-w-xl mx-auto"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
							>
								<p className="text-gray-700 mb-4">"{t.text}"</p>
								<div className="flex items-center">
									<img
										src={photos[t.name]}
										alt={t.name}
										className="w-10 h-10 rounded-full object-cover mr-3"
									/>
									<div>
										<div className="font-semibold text-gray-900">{t.name}</div>
										<div className="text-sm text-gray-600">{t.role}</div>
									</div>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
