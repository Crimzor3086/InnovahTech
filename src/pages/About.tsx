import Navbar from "@/components/Navbar";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <WhyChooseSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
