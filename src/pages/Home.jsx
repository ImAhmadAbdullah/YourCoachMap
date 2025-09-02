import HeroSearch from "@/components/home/HeroSearch";
import HowItWorks from "@/components/home/HowItWorks";
import TopTeachers from "@/components/home/TopTeachers";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import PageTransition from "@/components/PageTransition";
import FadeInWhenVisible from "@/animations/FadeInWhenVisible";

export default function Home() {
	return (
		<PageTransition>
			<HeroSearch />
			<FadeInWhenVisible>
				<HowItWorks />
			</FadeInWhenVisible>
			<FadeInWhenVisible>
				<TopTeachers />
			</FadeInWhenVisible>
			<FadeInWhenVisible>
				<Stats />
			</FadeInWhenVisible>
			<FadeInWhenVisible>
				<Testimonials />
			</FadeInWhenVisible>
			<FadeInWhenVisible>
				<CTA />
			</FadeInWhenVisible>
		</PageTransition>
	);
}
