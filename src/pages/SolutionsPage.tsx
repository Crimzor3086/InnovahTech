import Navbar from "@/components/Navbar";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-background ai-neural-bg flex flex-col">
      <Navbar />
      <SolutionsSection />
      <Footer />
    </div>
  );
};

export default SolutionsPage;
