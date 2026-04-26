import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroMockup1 from "@/assets/hero-mockup-1.jpg";
import heroMockup2 from "@/assets/hero-mockup-2.png";

interface HeroProps {
  onOpenSignup: () => void;
}

export function HeroSection({ onOpenSignup }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
          
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight mb-6 shadow-none lg:text-3xl">
            Your Projects Deserve <span style={{ color: '#f97415' }}>Better</span> Than{" "}
            <span style={{ color: '#f97415' }}>WhatsApp Updates.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed font-extrabold shadow-none whitespace-pre-line">
            {"Protecting Design Vision, \nFrom Concept to Completion."}
          </p>
          <p className="text-base font-display mb-10 text-primary font-thin">
            To get started, Click on the link below!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="https://apps.apple.com/app/apexis-record-report-release/id6760482687" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-[50px]" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.apexis.app&hl=en_IN" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[50px]" />
            </a>
          </div>
        </motion.div>

        {/* Right - App screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="hidden lg:flex items-center justify-center gap-6 relative">

          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 rounded-[3rem] blur-3xl -z-10" />
            <motion.img
              src={heroMockup1}
              alt="APEXISpro mobile app dashboard"
              className="w-[260px] xl:w-[300px] rounded-[2rem] shadow-2xl border border-foreground/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="relative">
            <motion.img
              src={heroMockup2}
              alt="APEXISpro project overview screen"
              className="w-[260px] xl:w-[300px] rounded-[2rem] shadow-2xl border border-foreground/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>);

}