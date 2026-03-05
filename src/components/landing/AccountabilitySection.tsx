import { AnimatedSection } from "./AnimatedSection";
import { Clock, BookOpen, BarChart3, Eye } from "lucide-react";

const features = [
  { icon: Clock, title: "Time-Stamped Updates", desc: "Every site update is automatically time-stamped." },
  { icon: BookOpen, title: "Recorded Decisions", desc: "Important decisions are captured and documented." },
  { icon: BarChart3, title: "Documented Progress", desc: "Progress images, notes, and reports stay organized." },
  { icon: Eye, title: "Transparent Communication", desc: "Everyone sees the same structured information." },
];

export function AccountabilitySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Every Update Leaves{" "}
            <span className="text-gradient-gold">a Record</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Construction projects require accountability. Apexis creates a verifiable record of execution.
          </p>
        </AnimatedSection>

        {/* Timeline flow graphic */}
        <AnimatedSection className="flex items-center justify-center gap-2 mb-16 text-xs text-muted-foreground font-mono">
          {["Update", "Log", "Report", "Record"].map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-md bg-card border border-border">{step}</span>
              {i < 3 && <span className="text-primary">→</span>}
            </span>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-sm font-medium text-muted-foreground italic">
            When execution is documented clearly, decisions move faster.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
