import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background page-bg-services flex flex-col">
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
