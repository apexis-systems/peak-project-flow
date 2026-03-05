import { AnimatedSection } from "./AnimatedSection";
import { DashboardMockup } from "./DashboardMockup";

export function ProjectClaritySection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Clarity Across{" "}
              <span className="text-gradient-gold">Every Project</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              A single view of everything happening across your construction projects.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>Apexis transforms scattered site activity into a structured command center.</p>
              <p>Every update becomes visible, organized, and decision-ready.</p>
            </div>
            <p className="font-display font-semibold text-sm mb-4">Project leaders can instantly understand:</p>
            <ul className="space-y-3 mb-8">
              {[
                "What progress was made",
                "What decisions were recorded",
                "What issues require attention",
                "What documentation is available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-display font-bold text-gradient-gold">
              No searching. No confusion. Just clarity.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="hidden lg:block">
            <DashboardMockup />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
