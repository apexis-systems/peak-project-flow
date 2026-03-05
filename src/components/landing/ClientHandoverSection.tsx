import { AnimatedSection } from "./AnimatedSection";
import { FileOutput, FolderCheck, Award, Users } from "lucide-react";

const benefits = [
  { icon: FolderCheck, title: "Organized Documentation", desc: "Every project record structured and accessible." },
  { icon: FileOutput, title: "Complete Execution Record", desc: "Full timeline of progress, decisions, and updates." },
  { icon: Award, title: "Professional Client Delivery", desc: "Export-ready documentation that reflects quality." },
  { icon: Users, title: "Increased Trust & Credibility", desc: "Clients appreciate structured, transparent reporting." },
];

export function ClientHandoverSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Professional Project{" "}
            <span className="text-gradient-gold">Handover Documentation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Apexis allows contractors and consultants to export project records into structured handover documents that can be shared with clients as a professional archive of project execution.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-sm font-medium text-muted-foreground italic">
            Clients appreciate structured, professional project documentation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
