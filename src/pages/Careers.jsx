import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Loader from "@/components/Loader";

export default function Careers() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("/api/careers")
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
			<main className="max-w-4xl mx-auto py-16 px-4">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h1>
				<p className="text-gray-600 mb-4">{data.content}</p>
			</main>
		</PageTransition>
	);
}
