import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

interface FinalCTAProps {
  onOpenSignup: () => void;
}

export function FinalCTA({ onOpenSignup }: FinalCTAProps) {
  return (
    <section className="py-8 lg:py-10 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-dark-foreground mb-6 leading-[1.1]">
            Stop Managing Chaos.{" "}
            <span className="text-gradient-gold">Start Leading at the Apex.</span>
          </h2>
          <p className="mb-10 text-sm font-bold" style={{ color: '#f97415' }}>
            Private beta closing soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://apps.apple.com/app/apexis-record-report-release/id6760482687" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-[50px]" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.apexis.app&hl=en_IN" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[50px]" />
            </a>
            <Button variant="hero-outline" size="lg" className="border-surface-dark-foreground/20 text-surface-dark-foreground hover:border-surface-dark-foreground/40">
              Schedule Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
