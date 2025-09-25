"use client";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import ProblemTimeline from "@/components/home/ProblemTimeline";
import SolutionSection from "@/components/home/SolutionSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />

      {/* Vision Mission Section */}
      <VisionMissionSection />

      {/* Problem Section */}
      <ProblemTimeline />
      {/* <LearningSection /> */}

      {/* Solution Section */}
      <SolutionSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
