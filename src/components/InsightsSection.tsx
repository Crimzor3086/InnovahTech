import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  { tag: "Engineering", title: "Building Resilient Microservice Architectures", excerpt: "How we design fault-tolerant distributed systems that maintain uptime at enterprise scale.", date: "Mar 5, 2026" },
  { tag: "Blockchain", title: "Zero-Knowledge Proofs in Identity Systems", excerpt: "Exploring the role of ZK-proofs in building privacy-preserving decentralized identity frameworks.", date: "Feb 20, 2026" },
  { tag: "AI & Data", title: "Predictive Analytics for Supply Chain Optimization", excerpt: "Leveraging machine learning models to forecast demand and reduce operational inefficiencies.", date: "Feb 8, 2026" },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Insights</p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">Latest from VAHNOVA</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary">{article.tag}</span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{article.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                Read More <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
