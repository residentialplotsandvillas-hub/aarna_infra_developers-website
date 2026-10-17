
import HeroSection from "./components/Home/HeroSection";
import FeaturedProperties from "./components/Home/FeaturedProperties";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import RealEstateServices from "./components/Home/RealEstateServices";
import LatestProjects from "./components/Home/LatestProjects";
import PropertyLocations from "./components/Home/PropertyLocations";
import InvestmentBenefits from "./components/Home/InvestmentBenefits";
import PropertyBuyingGuide from "./components/Home/PropertyBuyingGuide";
import Testimonials from "./components/Home/Testimonials";
import PropertyFAQ from "./components/Home/PropertyFAQ";
import ContactCTA from "./components/Home/ContactCTA";
import HowItWorks from "./components/Home/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#D9FBE0]">
      {/* Main banner */}
      <HeroSection />

      {/* Property discovery */}
      <FeaturedProperties />
      <LatestProjects />
      <PropertyLocations />

      {/* Company information */}
      <WhyChooseUs />
      <RealEstateServices />
<HowItWorks />
      {/* SEO and helpful content */}
      <InvestmentBenefits />
      <PropertyBuyingGuide />
      <PropertyFAQ />

      {/* Trust and conversion */}
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
