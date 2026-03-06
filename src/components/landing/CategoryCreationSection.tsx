import { AnimatedSection } from "./AnimatedSection";
import { MessageCircle, ListChecks, ClipboardList } from "lucide-react";

const columns = [
  {
    icon: MessageCircle,
    title: "Messaging Tools",
    purpose: "Communication",
    examples: ["Chat updates", "Images in threads", "Informal messages"],
    outcome: "Information gets buried.",
  },
  {
    icon: ListChecks,
    title: "Project Management Tools",
    purpose: "Task coordination",
    examples: ["Task lists", "Deadlines", "Team assignments"],
    outcome: "Execution tracking remains incomplete.",
  },
  {
    icon: ClipboardList,
    title: "Apexis",
    purpose: "Execution Documentation",
    examples: ["Structured site logs", "Time-stamped progress", "Professional reports"],
    outcome: "Projects gain operational clarity.",
    highlighted: true,
  },
];

export function CategoryCreationSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            A New Category for Construction Teams
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Construction Needs a{" "}
            <span className="text-gradient-gold">Reporting Layer.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto mb-16">
          <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
            <p>Project management tools organize tasks. Messaging tools enable communication.</p>
            <p>But construction projects require something different.</p>
            <p className="font-display font-semibold text-foreground">
              They require structured documentation of execution.
            </p>
            <p>
              Construction projects involve multiple stakeholders, large financial commitments, and continuous site activity. Yet critical project progress is often communicated through scattered chat messages, informal updates, and fragmented documentation.
            </p>
            <p className="font-display font-semibold text-primary">
              Apexis introduces: Construction Reporting Infrastructure.
            </p>
          </div>
        </AnimatedSection>

        {/* 3-column comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {columns.map((col, i) => (
            <AnimatedSection key={col.title} delay={i * 0.12}>
              <div
                className={`rounded-xl border p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  col.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${col.highlighted ? "bg-primary/20" : "bg-muted"}`}>
                  <col.icon className={`w-6 h-6 ${col.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{col.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">Purpose: {col.purpose}</p>
                <ul className="space-y-2 mb-6">
                  {col.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
                <p className={`text-sm font-medium ${col.highlighted ? "text-primary" : "text-muted-foreground"}`}>
                  {col.outcome}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Flow diagram */}
        <AnimatedSection className="flex items-center justify-center gap-2 mb-12 text-xs text-muted-foreground font-mono">
          {["Site Activity", "Structured Log", "Professional Report", "Stakeholder Visibility"].map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-md bg-card border border-border text-center">{step}</span>
              {i < 3 && <span className="text-primary">↓</span>}
            </span>
          ))}
        </AnimatedSection>

        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="font-display font-bold text-lg mb-2">
            Apexis is not another project management tool.
          </p>
          <p className="text-muted-foreground mb-6">
            It is the reporting infrastructure construction projects have been missing.
          </p>
          <p className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">
            Record. Report. Release.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
