import Navbar from "@/components/Navbar";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <CapabilitiesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
