import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const links = [
		{ to: "/", label: "Home" },
		{ to: "/find-coaching", label: "Find Coaching" },
		{ to: "/faq", label: "FAQ" },
		{ to: "/about", label: "About Us" },
	];
	useEffect(() => {
		window.lucide?.createIcons();
	}, [open]);
	return (
		<nav className="navbar-blur fixed w-full z-50 border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<Link to="/">
							<h1 className="text-2xl font-bold text-indigo-600">
								YourCoachMap
							</h1>
						</Link>
					</div>
					<div className="md:hidden">
						<button
							aria-label="Toggle menu"
							onClick={() => setOpen((o) => !o)}
							className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						>
							<i data-lucide={open ? "x" : "menu"} className="h-6 w-6"></i>
						</button>
					</div>
					<div className="hidden md:flex space-x-4">
						{links.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className="relative px-3 py-2 text-sm font-medium"
							>
								{({ isActive }) => (
									<motion.span
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className={
											isActive
												? "text-indigo-600"
												: "text-gray-700 hover:text-indigo-600"
										}
									>
										{item.label}
										{isActive && (
											<motion.span
												layoutId="nav-underline"
												className="absolute left-0 right-0 -bottom-1 h-0.5 bg-indigo-600"
											/>
										)}
									</motion.span>
								)}
							</NavLink>
						))}
					</div>
				</div>
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							className="md:hidden flex flex-col space-y-1 pb-4"
						>
							{links.map((item) => (
								<NavLink
									key={item.to}
									to={item.to}
									onClick={() => setOpen(false)}
									className="px-3 py-2 text-sm font-medium"
								>
									{({ isActive }) => (
										<span
											className={
												isActive
													? "text-indigo-600"
													: "text-gray-700 hover:text-indigo-600"
											}
										>
											{item.label}
										</span>
									)}
								</NavLink>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
