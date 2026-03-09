import Navbar from "@/components/Navbar";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

const TechStackPage = () => {
  return (
    <div className="min-h-screen bg-background page-bg-tech flex flex-col">
      <Navbar />
      <TechStackSection />
      <Footer />
    </div>
  );
};

export default TechStackPage;
