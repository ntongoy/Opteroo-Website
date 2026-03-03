import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDAR_URL = "https://calendar.app.google/o6GAK7fuKVvLW7PU9";

export const FinalCTASection = ({ onGetEarlyAccess, onBookWalkthrough, onJoinWaitlist }) => {
  return (
    <section className="section-spacing bg-gradient-to-b from-slate-50 to-white" data-testid="final-cta-section">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-6">
            Ready to transform your retail media workflow?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Join agencies and performance teams who are moving from chaos to clarity. 
            Start with Early Access or book a walkthrough to see Opteroo in action.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              onClick={onGetEarlyAccess}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all group w-full sm:w-auto"
              data-testid="final-get-early-access-btn"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-6 text-base border border-slate-200 hover:bg-slate-50 group w-full sm:w-auto font-medium"
              data-testid="book-walkthrough-btn"
            >
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              Book a Walkthrough
            </a>
          </div>

          {/* Waitlist fallback */}
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-3">
              Not ready yet? No problem.
            </p>
            <button
              onClick={onJoinWaitlist}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              data-testid="join-waitlist-btn"
            >
              <Mail className="w-4 h-4" />
              Join the waitlist for updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
