import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Camera, FileText, Share2, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Camera,
    num: "01",
    title: "Record",
    desc: "Site teams capture progress, photos, and notes in real time — creating a clear chronological record.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Report",
    desc: "Updates are auto-structured into organized reports. Teams clarify through chat and keep clean documentation.",
  },
  {
    icon: Share2,
    num: "03",
    title: "Release",
    desc: "Drawings, revisions, models and progress reports are released to the right stakeholders — traceable and professional.",
  },
];

const flow = [
  { label: "Record", icon: Camera },
  { label: "Report", icon: FileText },
  { label: "Release", icon: Share2 },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-4">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: "#f97415" }}
          >
            How APEXISpro Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            <span style={{ color: "#f97415" }}>Record.</span>{" "}
            <span style={{ color: "#f97415" }}>Report.</span>{" "}
            <span style={{ color: "#f97415" }}>Release.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed font-light max-w-xl mx-auto">
            A simple workflow that turns scattered site updates into structured
            project documentation and professional client reporting.
          </p>
        </AnimatedSection>

        {/* Compact 3-card grid */}
        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 mt-10 mb-10">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border/60 bg-card p-5 lg:p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-border/60 bg-background/50 flex items-center justify-center">
                  <stage.icon
                    className="w-4 h-4"
                    style={{ color: "#f97415" }}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-mono text-[0.65rem] text-muted-foreground tracking-widest">
                  {stage.num}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Inline flow */}
        <AnimatedSection className="mt-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {flow.map((step, i) => (
              <span key={step.label} className="flex items-center gap-2 sm:gap-3">
                <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/60">
                  <step.icon
                    className="w-3.5 h-3.5"
                    style={{ color: "#f97415" }}
                    strokeWidth={1.5}
                  />
                  <span className="font-display font-semibold text-xs">
                    {step.label}
                  </span>
                </span>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-foreground/20" />
                )}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Closing */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mt-8">
          <p className="text-base font-bold" style={{ color: "#f97415" }}>
            From site activity to client reporting — everything flows through APEXISpro.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
