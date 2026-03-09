import Navbar from "@/components/Navbar";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const WhyChoosePage = () => {
  return (
    <div className="min-h-screen bg-background ai-neural-bg flex flex-col">
      <Navbar />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default WhyChoosePage;
