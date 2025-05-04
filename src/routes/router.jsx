import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import FeaturesSection from "../components/sections/FeaturesSection/featuresSection";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import HowItWorksSection from "../components/sections/HowItWorksSection/howItWorksSection";
import TestimonialsSection from "../components/sections/TestimonialsSection/testimonialsSection";
import PricingSection from "../components/sections/PricingSection/pricingSection";
import ContactSection from "../components/sections/ContactSection/contactSection";
import NotFound from "../pages/not-found/not-found";

function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/recursos" element={<FeaturesSection />} />
                <Route path="/planos" element={<PricingSection />} />
                <Route path="/contato" element={<ContactSection />} />
                <Route path="/depoimentos" element={<TestimonialsSection />} />
                <Route path="/como-funciona" element={<HowItWorksSection />} />
                <Route path="/nao-encontrado" element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;