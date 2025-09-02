import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const sectionProps = {
	variants: {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	},
	initial: "hidden",
	whileInView: "visible",
	viewport: { once: true },
	transition: { duration: 0.5 },
};

export default function PrivacyPolicy() {
	return (
		<PageTransition>
			<main className="legal-page">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Privacy Policy – YourCoachMap
				</motion.h1>

				<motion.section {...sectionProps}>
					<h2>1. Overview</h2>
					<p>
						This Privacy Policy explains how YourCoachMap collects, uses, and
						safeguards personal information when you use our platform.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>2. Information We Collect</h2>
					<p>
						Information you provide: name, email, profile details, coaching
						preferences, payment information.
					</p>
					<p>
						Automatically collected data: IP address, browser/device info, usage
						analytics, cookies.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>3. How We Use Information</h2>
					<p>We use your data to:</p>
					<ul>
						<li>Provide and improve our services.</li>
						<li>Facilitate communication between Clients and Coaches.</li>
						<li>Process transactions securely.</li>
						<li>Send service updates, promotions, or policy changes.</li>
						<li>Protect platform security and prevent fraud.</li>
					</ul>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>4. Sharing of Information</h2>
					<p>We do not sell personal data. We may share information with:</p>
					<ul>
						<li>Service providers (payment processors, analytics tools).</li>
						<li>Legal authorities if required by law.</li>
						<li>
							Business successors in case of a merger, acquisition, or
							restructuring.
						</li>
					</ul>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>5. Cookies &amp; Tracking</h2>
					<p>
						We use cookies and similar technologies to personalize your
						experience and analyze site usage. You may adjust browser settings
						to limit cookies, but some features may not function.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>6. Data Retention</h2>
					<p>
						We retain data as long as needed to provide services, comply with
						legal obligations, and resolve disputes.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>7. Your Rights</h2>
					<p>Depending on your location, you may have the right to:</p>
					<ul>
						<li>Access, correct, or delete your personal data.</li>
						<li>Restrict or object to certain processing.</li>
						<li>Withdraw consent where processing is based on consent.</li>
					</ul>
					<p>
						To exercise these rights, email&nbsp;
						<a href="mailto:privacy@yourcoachmap.com">
							privacy@yourcoachmap.com
						</a>
						.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>8. Security</h2>
					<p>
						We implement reasonable security safeguards to protect personal
						data. However, no system is completely secure, and we cannot
						guarantee absolute protection.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>9. Children’s Privacy</h2>
					<p>
						Our Service is not directed at children under 13 (or the minimum
						legal age in your jurisdiction). We do not knowingly collect
						personal data from children.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>10. International Users</h2>
					<p>
						If you access the Service from outside [Your Jurisdiction], you
						agree that your data may be processed and stored in our servers
						located in [Your Jurisdiction] and other countries where our
						providers operate.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>11. Changes to This Policy</h2>
					<p>
						We may update this Privacy Policy. Updates will be posted here, and
						continued use of the Service indicates acceptance of changes.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>12. Contact</h2>
					<p>
						For privacy-related inquiries, contact us at&nbsp;
						<a href="mailto:privacy@yourcoachmap.com">
							privacy@yourcoachmap.com
						</a>
						.
					</p>
				</motion.section>
			</main>
		</PageTransition>
	);
}
