import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ImprovementsSection } from "@/components/ImprovementsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { DayOneSection } from "@/components/DayOneSection";
import { DifferentiationSection } from "@/components/DifferentiationSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { CharterAccessSection } from "@/components/CharterAccessSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";
import { ContactDialog } from "@/components/ContactDialog";

export default function HomePage() {
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [leadType, setLeadType] = useState("early_access");

  const CALENDAR_BOOKING_URL = "https://calendar.app.google/o6GAK7fuKVvLW7PU9";

  const openLeadDialog = (type = "early_access") => {
    setLeadType(type);
    setIsLeadDialogOpen(true);
  };

  const openContactDialog = () => {
    setIsContactDialogOpen(true);
  };

  const openCalendarBooking = (e) => {
    if (e) e.preventDefault();
    // Use window.location for more reliable redirect
    const newWindow = window.open(CALENDAR_BOOKING_URL, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, try direct navigation
      window.location.href = CALENDAR_BOOKING_URL;
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white" data-testid="homepage">
      <Header 
        onGetEarlyAccess={() => openLeadDialog("early_access")}
        onScrollToSection={scrollToSection}
      />
      
      <main>
        <HeroSection 
          onGetEarlyAccess={() => openLeadDialog("early_access")}
          onHowItWorks={() => scrollToSection("how-it-works")}
        />
        
        <ProblemSection />
        
        <SolutionSection />
        
        <ImprovementsSection />
        
        <HowItWorksSection />
        
        <CalculatorSection 
          onGetEarlyAccess={() => openLeadDialog("early_access")}
          onBookWalkthrough={openCalendarBooking}
        />
        
        <DayOneSection />
        
        <DifferentiationSection />
        
        <SocialProofSection />
        
        <CharterAccessSection 
          onApplyCharter={() => openLeadDialog("charter_access")}
        />
        
        <FinalCTASection 
          onGetEarlyAccess={() => openLeadDialog("early_access")}
          onBookWalkthrough={openCalendarBooking}
          onJoinWaitlist={() => openLeadDialog("waitlist")}
        />
      </main>
      
      <Footer />
      
      <LeadCaptureDialog 
        open={isLeadDialogOpen}
        onOpenChange={setIsLeadDialogOpen}
        leadType={leadType}
      />
      
      <ContactDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </div>
  );
}
