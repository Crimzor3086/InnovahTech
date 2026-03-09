import { motion } from "framer-motion";
import { Globe, Smartphone, Shield, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    category: "Web Development",
    title: "Starter Website (Personal / Small Business)",
    items: ["1-3 pages", "Mobile responsive", "Contact form"],
    usd: "$80 - $120",
    kes: "KES 12,000 - 18,000",
  },
  {
    icon: Globe,
    category: "Web Development",
    title: "Business Website",
    items: ["5-7 pages", "Admin panel", "SEO basics"],
    usd: "$180 - $300",
    kes: "KES 27,000 - 45,000",
  },
  {
    icon: Globe,
    category: "Web Development",
    title: "Custom Web Systems",
    items: ["Custom portals", "Dashboards", "SaaS"],
    usd: "$500 - $1,200",
    kes: "KES 75,000 - 180,000",
  },
  {
    icon: Smartphone,
    category: "Mobile Apps",
    title: "Basic Mobile App",
    items: ["Android or iOS", "Core features"],
    usd: "$600 - $1,000",
    kes: "KES 90,000 - 150,000",
  },
  {
    icon: Smartphone,
    category: "Mobile Apps",
    title: "Advanced Mobile App",
    items: ["Payments", "Authentication", "Admin dashboard"],
    usd: "$1,500 - $3,000",
    kes: "KES 225,000 - 450,000",
  },
  {
    icon: Shield,
    category: "Cybersecurity",
    title: "Basic Security Check",
    items: ["Malware scan", "Configuration review"],
    usd: "$80 - $150",
    kes: "KES 12,000 - 22,500",
  },
  {
    icon: Shield,
    category: "Cybersecurity",
    title: "Security Hardening & Pentest",
    items: ["Vulnerability testing"],
    usd: "$300 - $800",
    kes: "KES 45,000 - 120,000",
  },
  {
    icon: BarChart3,
    category: "Data & AI",
    title: "Data Dashboard Setup",
    items: ["Reports", "Analytics"],
    usd: "$200 - $400",
    kes: "KES 30,000 - 60,000",
  },
  {
    icon: BarChart3,
    category: "Data & AI",
    title: "AI Automation (Chatbots, Tools)",
    items: ["Chatbots", "Automation tools"],
    usd: "$400 - $1,000",
    kes: "KES 60,000 - 150,000",
  },
];

const groupedServices = services.reduce<Record<string, typeof services>>((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {});

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Service Packages
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Categorized offerings with transparent pricing in USD and KES.
          </p>
        </motion.div>

        {Object.entries(groupedServices).map(([category, categoryServices], groupIndex) => (
          <div key={category} className={groupIndex > 0 ? "mt-14" : ""}>
            <h3 className="mb-6 font-heading text-2xl font-bold text-foreground">{category}</h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categoryServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/5 p-3">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-4 font-heading text-lg font-bold text-foreground">
                    {service.title}
                  </h4>
                  <ul className="mb-5 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-1.5 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">USD: {service.usd}</p>
                    <p className="text-sm text-muted-foreground">{service.kes}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
