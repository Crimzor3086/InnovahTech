import Navbar from "@/components/Navbar";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-background ai-neural-bg flex flex-col">
      <Navbar />
      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default IndustriesPage;
