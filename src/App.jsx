import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import FindCoaching from "@/pages/FindCoaching";
import FAQ from "@/pages/FAQ";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";

export default function App() {
	const location = useLocation();
	useEffect(() => {
		window.lucide?.createIcons();
	}, [location]);
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col">
			<Navbar />
			<div className="flex-1">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/find-coaching" element={<FindCoaching />} />
						<Route path="/faq" element={<FAQ />} />
						<Route path="/about" element={<About />} />
						<Route path="/careers" element={<Careers />} />
						<Route path="/privacy-policy" element={<PrivacyPolicy />} />
						<Route path="/terms" element={<Terms />} />
					</Routes>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	);
}
