import { AnimatedSection } from "./AnimatedSection";

export function LearningCurveSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            ZERO TO MINIMAL
            <br />
            <span className="text-gradient-gold">LEARNING CURVE</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            The platform is designed so anyone in the project ecosystem can use it immediately — architects, contractors, project directors, builders, and clients.
          </p>
          <p className="text-sm font-medium text-primary">
            Easier documentation and faster adoption across teams.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
