import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background page-bg-contact flex flex-col">
      <Navbar />
      <main className="container mx-auto w-full px-4 pb-12 pt-20 sm:px-6 md:pt-24">
        <section className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/85">Get in Touch</p>
            <h1 className="mb-3 font-heading text-3xl font-bold text-white md:text-5xl">Let&apos;s Build Together</h1>
            <p className="mx-auto max-w-3xl text-sm text-white/90 md:text-base">
              Ready to transform your business with intelligent technology? Reach out via WhatsApp for the fastest response, or use the form below.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-white/20 bg-black/35 p-5 backdrop-blur-sm md:p-6">
                <h2 className="text-xl font-semibold text-white">Prefer WhatsApp?</h2>
                <p className="mt-1 text-sm text-white/85">Get instant responses and faster support</p>
                <a
                  href="https://wa.me/254702970187"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

                <p className="mt-5 text-sm font-medium text-white/90">Or fill out the form below</p>

                <form className="mt-4 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white">Full Name</label>
                    <Input placeholder="John Doe" className="border-white/25 bg-black/30 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-white/25 bg-black/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white">Service Interested In</label>
                    <Select>
                      <SelectTrigger className="border-white/25 bg-black/30 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter-website">Starter Website</SelectItem>
                        <SelectItem value="business-website">Business Website</SelectItem>
                        <SelectItem value="custom-web">Custom Web Systems</SelectItem>
                        <SelectItem value="basic-mobile">Basic Mobile App</SelectItem>
                        <SelectItem value="advanced-mobile">Advanced Mobile App</SelectItem>
                        <SelectItem value="basic-security">Basic Security Check</SelectItem>
                        <SelectItem value="hardening-pentest">Security Hardening & Pentest</SelectItem>
                        <SelectItem value="data-dashboard">Data Dashboard Setup</SelectItem>
                        <SelectItem value="ai-automation">AI Automation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] border-white/25 bg-black/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-white/20 bg-black/35 p-5 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">Contact Information</h3>
                <div className="space-y-4 text-sm text-white/90">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 text-accent" size={18} />
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-accent">Recommended</p>
                      <p>+254 702 970 187</p>
                      <p className="text-white/75">Fastest response time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 text-accent" size={18} />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p>+254 702 970 187</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 text-accent" size={18} />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p>innovahtech2@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 text-accent" size={18} />
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p>Nairobi, Kenya</p>
                      <p className="text-white/75">Serving clients globally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/20 bg-black/35 p-5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">Quick Response Guaranteed</h3>
                <p className="mt-2 text-sm text-white/90">
                  For the fastest support, reach us on WhatsApp. We typically respond within minutes.
                </p>
                <a
                  href="https://wa.me/254702970187"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle size={16} />
                  Start WhatsApp Chat
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
