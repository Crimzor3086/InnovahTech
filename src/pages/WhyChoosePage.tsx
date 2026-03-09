import Navbar from "@/components/Navbar";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const WhyChoosePage = () => {
  return (
    <div className="min-h-screen bg-background page-bg-why flex flex-col">
      <Navbar />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default WhyChoosePage;
