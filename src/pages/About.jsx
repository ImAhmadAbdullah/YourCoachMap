import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Loader from "@/components/Loader";
import Stats from "@/components/home/Stats";

export default function About() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("/api/about")
			.then((res) => res.json())
			.then(setData)
			.catch(console.error);
	}, []);

	if (!data)
		return (
			<PageTransition>
				<Loader />
			</PageTransition>
		);

	return (
		<PageTransition>
			<section className="pt-24 pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold mb-4 text-gray-800">
							{data.title}
						</h2>
						<p className="text-gray-600 leading-relaxed">{data.content}</p>
					</div>
					<img
						src="/about-us.png"
						alt="Students at YourCoachMap"
						className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
						loading="lazy"
					/>
				</div>
			</section>
			<Stats />
			<section className="bg-gray-50 py-8">
				<div className="max-w-7xl mx-auto px-6 text-center text-gray-800">
					<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
					<p className="mb-2 text-gray-600">📞 Phone: {data.contact.phone}</p>
					<p className="mb-2 text-gray-600">✉️ Email: {data.contact.email}</p>
					<div className="flex justify-center space-x-6 mt-4">
						<a
							href={data.contact.social.instagram}
							className="transition transform hover:text-pink-300"
						>
							<i data-lucide="instagram" className="w-6 h-6"></i>
						</a>
						<a
							href={data.contact.social.facebook}
							className="transition transform hover:text-blue-500"
						>
							<i data-lucide="facebook" className="w-6 h-6"></i>
						</a>
						<a
							href={data.contact.social.twitter}
							className="transition transform hover:text-sky-300"
						>
							<i data-lucide="twitter" className="w-6 h-6"></i>
						</a>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
