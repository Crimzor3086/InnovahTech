import Navbar from "@/components/Navbar";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const InsightsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default InsightsPage;
