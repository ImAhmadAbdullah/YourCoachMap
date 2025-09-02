import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import FadeInWhenVisible from "@/animations/FadeInWhenVisible";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
	const [items, setItems] = useState([]);
	const [openIndex, setOpenIndex] = useState(null);
	const [fallback, setFallback] = useState(null);

	useEffect(() => {
		fetch("/api/faq")
			.then((res) => res.json())
			.then(setItems)
			.catch(console.error);
	}, []);

	function toggle(i) {
		setOpenIndex(openIndex === i ? null : i);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		const name = data.get("name");
		const email = data.get("email");
		const topic = data.get("topic");
		const message = data.get("message");
		const bodyText = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
		const subject = encodeURIComponent("Feedback — YourCoachMap");
		const body = encodeURIComponent(bodyText);
		const mailto = `mailto:support@yourcoachmap.com?subject=${subject}&body=${body}`;
		if (mailto.length > 2000) {
			setFallback({
				bodyText,
				mailto: `mailto:support@yourcoachmap.com?subject=${subject}`,
			});
		} else {
			window.location.href = mailto;
		}
	}

	return (
		<PageTransition>
			<FadeInWhenVisible>
				<section className="pt-20 pb-16 bg-white rounded-lg shadow-md">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
							Frequently Asked Questions
						</h2>
						<div className="space-y-4">
							{items.map((qa, i) => (
								<div
									key={qa.question}
									className="bg-white rounded-xl shadow-md"
								>
									<button
										className="w-full flex justify-between items-center p-4 text-left"
										aria-expanded={openIndex === i}
										aria-controls={`faq-${i}`}
										onClick={() => toggle(i)}
									>
										<span className="text-lg font-medium text-gray-900">
											{qa.question}
										</span>
										<motion.span
											animate={{ rotate: openIndex === i ? 180 : 0 }}
										>
											<i data-lucide="chevron-down" className="w-5 h-5"></i>
										</motion.span>
									</button>
									<AnimatePresence initial={false}>
										{openIndex === i && (
											<motion.div
												id={`faq-${i}`}
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												className="px-4 pb-4 text-gray-700"
											>
												<p>{qa.answer}</p>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
						</div>
					</div>
				</section>
			</FadeInWhenVisible>

			<FadeInWhenVisible>
				<section className="py-16 mt-12 bg-white rounded-lg shadow-md">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
							Feedback Survey
						</h2>
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>
							<div>
								<label
									htmlFor="topic"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Topic
								</label>
								<input
									id="topic"
									name="topic"
									type="text"
									required
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									required
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								></textarea>
							</div>
							<div className="text-center">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									type="submit"
									className="btn-primary px-8 py-3 font-semibold"
								>
									Send Feedback
								</motion.button>
							</div>
						</form>
						{fallback && (
							<div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
								<p className="mb-2 text-sm text-gray-700">
									Your message is quite long. Copy it and click Open Email.
								</p>
								<textarea
									readOnly
									value={fallback.bodyText}
									className="w-full border border-gray-300 rounded-md p-2 mb-2 text-sm"
									rows="4"
								></textarea>
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() =>
											navigator.clipboard.writeText(fallback.bodyText)
										}
										className="btn-secondary px-4 py-2"
									>
										Copy
									</button>
									<a
										href={fallback.mailto}
										className="btn-primary px-4 py-2"
										target="_blank"
										rel="noopener noreferrer"
									>
										Open Email
									</a>
								</div>
							</div>
						)}
					</div>
				</section>
			</FadeInWhenVisible>
		</PageTransition>
	);
}
