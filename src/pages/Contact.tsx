import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div>
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 opacity-0 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto opacity-0 animate-fade-up-delay-1">
            We'd love to hear about your project. Let's build something great together.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  info@vahnova.com
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  +254 700 000 000
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  Nairobi, Kenya
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium mb-1 block">Name</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="cta" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
