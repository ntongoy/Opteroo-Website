import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = ({ onGetEarlyAccess, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 group"
            data-testid="logo-link"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/8fdb1yyv_F17B62C3-34D3-48E7-8018-A2BF35830A05%202.PNG" 
                alt="Opteroo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight font-['Manrope']">
              Opteroo
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            <button
              onClick={() => onScrollToSection("how-it-works")}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              data-testid="nav-how-it-works"
            >
              How it works
            </button>
            <button
              onClick={() => onScrollToSection("charter-access")}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              data-testid="nav-charter-access"
            >
              Charter Access
            </button>
            <Button
              onClick={onGetEarlyAccess}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
              data-testid="header-get-early-access-btn"
            >
              Get Early Access
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-4 border-t border-slate-100 animate-fade-in"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onScrollToSection("how-it-works");
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 text-left py-2"
              >
                How it works
              </button>
              <button
                onClick={() => {
                  onScrollToSection("charter-access");
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 text-left py-2"
              >
                Charter Access
              </button>
              <Button
                onClick={() => {
                  onGetEarlyAccess();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full mt-2"
                data-testid="mobile-get-early-access-btn"
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
