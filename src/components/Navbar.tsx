import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-primary-foreground">
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:910-998-2281" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              910-998-2281
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Mt. Misery Rd
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Google">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`fixed top-[40px] left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero-section" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Skeeterman & Turf Ninja"
              className="h-10 sm:h-14 object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about-us" className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm tracking-wide uppercase">About Us</a>
            <a href="#services" className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm tracking-wide uppercase">Our Services</a>
            <a href="#faq" className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm tracking-wide uppercase">FAQ</a>
            <a href="tel:9109982281" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-red-glow transition-colors animate-pulse-glow">
              Get A Quote
            </a>
            <a href="https://skeetermanandturfninja.net/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-foreground/20 text-foreground rounded-lg font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
              Payment Portal
            </a>
          </div>

          {/* Mobile: Payment Portal + toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a href="https://skeetermanandturfninja.net/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-foreground/20 text-foreground rounded-lg font-semibold text-xs hover:border-primary hover:text-primary transition-colors">
              Payment Portal
            </a>
            <button className="text-foreground p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass-strong border-t border-border/30 px-4 py-5 space-y-1">
            <a href="#about-us" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground/80 hover:text-primary font-medium">About Us</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground/80 hover:text-primary font-medium">Our Services</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground/80 hover:text-primary font-medium">FAQ</a>
            <div className="pt-2">
              <a href="tel:9109982281" onClick={() => setMobileOpen(false)} className="block px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm text-center">Get A Quote</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
