import { AnimatedSection } from "./AnimatedSection";
import { Shield, Lock } from "lucide-react";

export function DataPrivacySection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <AnimatedSection>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Your Data Belongs <span className="text-gradient-gold">To You</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>Your project data is entirely yours.</p>
            <p>Even the Apexis platform administrators cannot access it.</p>
            <p>
              Your documentation, project history, and records remain fully private and under your control.
            </p>
          </div>
          <p className="mt-8 text-lg font-display font-bold">
            Your data privacy matters to us.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Shield className="w-5 h-5 text-primary/60" />
            <span className="text-sm text-muted-foreground">End-to-end encrypted · Role-based access · SOC 2 compliant</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
