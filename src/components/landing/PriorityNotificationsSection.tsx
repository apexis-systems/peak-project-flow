import { AnimatedSection } from "./AnimatedSection";
import { Bell, ArrowRight, ClipboardCheck, ShieldCheck } from "lucide-react";

const flow = [
  { icon: Bell, label: "Phone Notification" },
  { icon: ClipboardCheck, label: "Project Update" },
  { icon: ArrowRight, label: "Action Taken" },
  { icon: ShieldCheck, label: "Timeline Protected" },
];

const benefits = [
  "Never miss a project update",
  "No confusion with chat notifications",
  "Clear priority communication",
  "Faster response cycles",
  "Fewer delays and costly mistakes",
];

export function PriorityNotificationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Priority Notifications That{" "}
              <span className="text-gradient-gold">Mean Business</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>Construction projects lose time and money when critical communication is missed.</p>
              <p>Apexis notifications are structured, priority alerts — not casual chat messages.</p>
              <p>Every notification signals an actionable update that requires attention.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-display font-semibold text-sm text-primary">
              Structured notifications protect your timeline and your budget.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              {flow.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4 w-full max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-sm">{step.label}</p>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="absolute left-6 top-12 w-px h-4 bg-border" />
                  )}
                </div>
              ))}
              {/* Connecting lines */}
              <div className="flex flex-col items-center gap-0 -mt-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-px h-0 bg-border" />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
