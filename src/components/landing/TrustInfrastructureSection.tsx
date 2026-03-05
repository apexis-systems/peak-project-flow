import { AnimatedSection } from "./AnimatedSection";
import { ShieldCheck, Database, FileText } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Privacy by Design",
    lines: [
      "Your project documentation remains fully private.",
      "Even platform administrators cannot access your project records.",
    ],
  },
  {
    icon: Database,
    title: "Secure Data Architecture",
    lines: [
      "Your documentation is stored securely with strict access controls.",
      "Only authorized project participants can view data.",
    ],
  },
  {
    icon: FileText,
    title: "Professional Documentation",
    lines: [
      "Every project update can become structured documentation.",
      "Perfect for reporting, compliance, and client handovers.",
    ],
  },
];

export function TrustInfrastructureSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Built Like{" "}
            <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Serious construction projects require serious systems. Apexis is designed with the same reliability expectations as enterprise software platforms.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.12}>
              <div className="bg-card rounded-xl border border-border p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-4">{p.title}</h3>
                <div className="space-y-3">
                  {p.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16 max-w-2xl mx-auto">
          <p className="font-display font-semibold text-lg mb-2">Apexis is not another messaging tool.</p>
          <p className="text-muted-foreground">
            It is operational infrastructure for construction execution.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
