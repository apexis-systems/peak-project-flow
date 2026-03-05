import { AnimatedSection } from "./AnimatedSection";
import { MessageCircle, Image, FileText, LayoutDashboard, ArrowRight } from "lucide-react";

export function DifferentiationSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for the Field.{" "}
            <span className="text-gradient-gold">Not Just the Office.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Old way - visual */}
          <AnimatedSection>
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8">
              <h3 className="font-display text-lg font-semibold mb-8 text-destructive/80">Instead of…</h3>
              <div className="space-y-6">
                {/* Chat messages visual */}
                <div className="bg-background/60 rounded-lg p-4 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-muted-foreground/50" />
                    <span className="text-sm font-medium text-muted-foreground/60">Chat Messages</span>
                  </div>
                  <div className="space-y-2">
                    {["Site photo sent ✓✓", "any update on 3rd floor?", "will send report tmrw"].map((msg) => (
                      <div key={msg} className="bg-muted/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground/60 w-fit max-w-[70%]">
                        {msg}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Scattered images */}
                <div className="bg-background/60 rounded-lg p-4 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Image className="w-5 h-5 text-muted-foreground/50" />
                    <span className="text-sm font-medium text-muted-foreground/60">Scattered Images</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="aspect-square rounded bg-muted/40 flex items-center justify-center">
                        <Image className="w-4 h-4 text-muted-foreground/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* New way - visual */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="font-display text-lg font-semibold mb-8 text-primary">You get…</h3>
              <div className="space-y-6">
                {/* Structured report */}
                <div className="bg-background/60 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-5 h-5 text-primary/60" />
                    <span className="text-sm font-medium text-primary/80">Structured Reports</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Weekly Progress Report</span>
                      <span className="text-primary font-medium">Generated</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                      <span>12 updates documented</span>
                      <span>3 min ago</span>
                    </div>
                  </div>
                </div>
                {/* Dashboard preview */}
                <div className="bg-background/60 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <LayoutDashboard className="w-5 h-5 text-primary/60" />
                    <span className="text-sm font-medium text-primary/80">Organized Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Active", value: "5" },
                      { label: "Reports", value: "28" },
                      { label: "Media", value: "142" },
                      { label: "Updates", value: "67" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-primary/5 rounded-md p-2 text-center">
                        <div className="text-lg font-bold font-display text-primary">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
