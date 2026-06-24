import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "G.S. Reddy",
    role: "Principal Architect",
    quote: "APEXISpro replaced our entire reporting workflow. What used to take my team 4 hours now takes 15 minutes.",
  },
  {
    name: "Ar. Arihant Acharya",
    role: "Principal Architect, Earth arbour design studio",
    quote: "An absolute game-changer app developed by an architect for the architecture fraternity. It does a fantastic job of protecting the integrity of designs and drawings while making coordination effortless.",
  },
  {
    name: "Tauqeer Ahmed",
    role: "Senior Designer",
    quote: "This is exactly what has been missing in the industry, whether it be an organisation or for a free lancer. APEXISpro fill a critical gap in communication between clients, consultants, and vendors, making collaboration much more efficient and transparent. The interface is intuitive, user friendly and easy to navigate. The best feature is the quick report generation which saves significant time. Loved the Idea and the software. A much needed tool.",
  },
  {
    name: "Ar. Bilal Osmani",
    role: "Lead Architect, Osmani Associates",
    quote: "This exceptional application addresses numerous daily challenges commonly faced by architectural firms such as ours. It is an indispensable tool for every architectural and interior design firm.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-8 lg:py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
            What Industry Leaders{" "}
            <span className="text-gradient-gold">Are Saying</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border/60 p-8 h-full hover:shadow-lg hover:shadow-foreground/[0.03] transition-all duration-500">
                <p className="text-foreground/70 leading-relaxed mb-8 font-light text-lg italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
