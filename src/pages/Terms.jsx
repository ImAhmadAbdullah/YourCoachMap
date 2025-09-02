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

export default function Terms() {
	return (
		<PageTransition>
			<main className="legal-page">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Terms of Service – YourCoachMap
				</motion.h1>

				<motion.section {...sectionProps}>
					<h2>1. Acceptance of Terms</h2>
					<p>
						By accessing or using YourCoachMap (“the Service”), you agree to be
						bound by these Terms of Service and our Privacy Policy. If you do
						not agree, you may not use the Service.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>2. Eligibility</h2>
					<p>
						You must be at least 18 years old (or the age of majority in your
						jurisdiction) to create an account or use the Service. By using the
						platform, you confirm that you meet this requirement.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>3. Changes to Terms</h2>
					<p>
						We may update these Terms at any time. Updated versions will be
						posted on this page with a revised “Last Updated” date. Continued
						use of the Service after changes means you accept them.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>4. User Accounts</h2>
					<p>
						You are responsible for maintaining the confidentiality of your
						login credentials. You must notify us immediately of unauthorized
						access or suspicious activity. You are responsible for all
						activities under your account.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>5. Service Description</h2>
					<p>
						YourCoachMap connects individuals seeking coaching services
						(“Clients”) with professional coaches (“Coaches”). We do not endorse
						or guarantee any particular coach, service, or outcome.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>6. Acceptable Use</h2>
					<p>You agree not to:</p>
					<ul>
						<li>Misuse or disrupt the Service.</li>
						<li>Post false, misleading, or fraudulent information.</li>
						<li>Harass, abuse, or harm other users.</li>
						<li>Infringe on intellectual property rights.</li>
					</ul>
					<p>We may suspend or terminate accounts that violate these rules.</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>7. Payments and Fees</h2>
					<p>
						If you book or provide coaching services through YourCoachMap,
						payment terms and processing details will be governed by our payment
						provider. YourCoachMap does not process payments directly and is not
						responsible for disputes between Clients and Coaches.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>8. Intellectual Property</h2>
					<p>
						All platform content, branding, and features belong to YourCoachMap
						or our licensors. Users retain rights to their posted content but
						grant us a limited license to display it within the Service.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>9. Third-Party Content</h2>
					<p>
						Links to third-party websites or services are provided for
						convenience. We are not responsible for their content, policies, or
						practices.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>10. Disclaimer of Warranties</h2>
					<p>
						The Service is provided “as is” without warranties, express or
						implied. We do not guarantee that use of the Service will meet your
						expectations or produce specific outcomes.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>11. Limitation of Liability</h2>
					<p>
						To the fullest extent permitted by law, YourCoachMap shall not be
						liable for indirect, incidental, or consequential damages, including
						but not limited to loss of data, income, or opportunities.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>12. Indemnification</h2>
					<p>
						You agree to indemnify and hold harmless YourCoachMap, its
						affiliates, and staff from claims, damages, or expenses arising from
						your use of the Service, your content, or your violation of these
						Terms.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>13. Governing Law &amp; Dispute Resolution</h2>
					<p>
						These Terms are governed by the laws of Bangladesh. Any disputes
						shall be resolved exclusively in the courts located in Bangladesh.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>14. Termination</h2>
					<p>
						We reserve the right to suspend or terminate your account at our
						discretion, including but not limited to violations of these Terms.
					</p>
				</motion.section>

				<motion.section {...sectionProps}>
					<h2>15. Contact</h2>
					<p>
						For questions about these Terms, contact us at&nbsp;
						<a href="mailto:support@yourcoachmap.com">
							support@yourcoachmap.com
						</a>
						.
					</p>
				</motion.section>
			</main>
		</PageTransition>
	);
}
