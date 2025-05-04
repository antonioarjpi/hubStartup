import ChallengesSection from "../../components/sections/challengesSection/challengesSection";
import HeroSection from "../../components/sections/HeroSection/heroSection";
import FeaturesSection from "../../components/sections/FeaturesSection/featuresSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection/howItWorksSection";
import BenefitsSection from "../../components/sections/BenefitsSection/benefitsSection";
import PricingSection from "../../components/sections/PricingSection/pricingSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection/testimonialsSection";
import CtaSection from "../../components/sections/CtaSection/ctaSection";
import ContactSection from "../../components/sections/ContactSection/contactSection";

function Home() {
    return (
        <>
            <HeroSection />
            <ChallengesSection />
            <FeaturesSection />
            <HowItWorksSection />
            <BenefitsSection />
            <PricingSection />
            <TestimonialsSection />
            <CtaSection />
            <ContactSection />
        </>
    )
}

export default Home;