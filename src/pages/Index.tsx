import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { HeroSection } from "@/components/landing/HeroSection";
import { CategoryCreationSection } from "@/components/landing/CategoryCreationSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ProjectClaritySection } from "@/components/landing/ProjectClaritySection";
import { AboutSection } from "@/components/landing/AboutSection";
import { PriorityNotificationsSection } from "@/components/landing/PriorityNotificationsSection";
import { LearningCurveSection } from "@/components/landing/LearningCurveSection";
import { DifferentiationSection } from "@/components/landing/DifferentiationSection";
import { AccountabilitySection } from "@/components/landing/AccountabilitySection";
import { ClientHandoverSection } from "@/components/landing/ClientHandoverSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { MarqueeSection } from "@/components/landing/MarqueeSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { DataPrivacySection } from "@/components/landing/DataPrivacySection";
import { TrustInfrastructureSection } from "@/components/landing/TrustInfrastructureSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SignupModal } from "@/components/landing/SignupModal";
import { SectionDivider } from "@/components/landing/SectionDivider";

const Index = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />
      <HeroSection onOpenSignup={() => setSignupOpen(true)} />
      <SectionDivider />
      <CategoryCreationSection />
      <SectionDivider />
      <AboutSection />
      <PriorityNotificationsSection />
      <SectionDivider />
      <ProblemSection />
      <SolutionSection />
      <ProjectClaritySection />
      <SectionDivider />
      <LearningCurveSection />
      <DifferentiationSection />
      <AccountabilitySection />
      <SectionDivider />
      <ClientHandoverSection />
      <TestimonialsSection />
      <MarqueeSection />
      <SectionDivider />
      <PricingSection />
      <DataPrivacySection />
      <SectionDivider />
      <TrustInfrastructureSection />
      <FAQSection />
      <FinalCTA onOpenSignup={() => setSignupOpen(true)} />
      <Footer />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Index;
