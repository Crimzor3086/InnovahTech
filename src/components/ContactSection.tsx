import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    try {
      // Try to use EmailJS if configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name,
            from_email: email,
            service: service,
            message: message,
            to_email: "innovahtech2@gmail.com",
          },
          publicKey
        );
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        // Suggest WhatsApp as preferred method - automatically open with pre-filled message
        const whatsappMessage = `Hello! I'm interested in your ${service} services.

Name: ${name}
Email: ${email}

Message: ${message}`;
        
        const whatsappUrl = `https://wa.me/254702970187?text=${encodeURIComponent(whatsappMessage)}`;
        
        toast.success("Opening WhatsApp for faster response...", { duration: 3000 });
        
        // Open WhatsApp automatically with pre-filled message
        window.open(whatsappUrl, '_blank');
        form.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // If EmailJS fails, suggest WhatsApp
      const whatsappMessage = `Hello! I'm interested in your ${service} services.

Name: ${name}
Email: ${email}

Message: ${message}`;
      
      const whatsappUrl = `https://wa.me/254702970187?text=${encodeURIComponent(whatsappMessage)}`;
      
      toast.info("Opening WhatsApp for faster response...", { duration: 3000 });
      
      // Open WhatsApp automatically
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        form.reset();
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your business with intelligent technology? 
            Reach out via WhatsApp for the fastest response, or use the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* WhatsApp CTA Banner */}
            <div className="glass-card p-6 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg mb-1">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant responses and faster support
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/254702970187?text=Hello! I'm interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary bg-[#25D366] hover:bg-[#20BA5A] border-[#25D366] inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground">
                  Or fill out the form below
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select 
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="networking">Internet & Networking</option>
                  <option value="software">Software Development</option>
                  <option value="blockchain">Blockchain & Web3</option>
                  <option value="consulting">Consulting & IT Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* WhatsApp - Featured First */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">WhatsApp</h4>
                      <span className="text-xs bg-[#25D366] text-white px-2 py-0.5 rounded-full font-medium">
                        Recommended
                      </span>
                    </div>
                    <a
                      href="https://wa.me/254702970187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#25D366] transition-colors font-medium"
                    >
                      +254 702 970 187
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fastest response time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+254702970187"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +254 702 970 187
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:innovahtech2@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      innovahtech2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Nairobi, Kenya
                      <br />
                      <span className="text-sm">Serving clients globally</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-8 border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-transparent">
              <h3 className="font-heading text-xl font-bold mb-3">
                Quick Response Guaranteed
              </h3>
              <p className="text-muted-foreground mb-4">
                For the fastest support, reach us on WhatsApp. We typically respond within minutes.
              </p>
              <a
                href="https://wa.me/254702970187?text=Hello! I need assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary bg-[#25D366] hover:bg-[#20BA5A] border-[#25D366] inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
