import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background page-bg-about flex flex-col">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
