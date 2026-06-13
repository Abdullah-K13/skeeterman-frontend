import { Phone } from "lucide-react";

const LandscapingCTA = () => {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="container mx-auto px-4 relative">
        <div className="reveal text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">
            We Offer <span className="text-gradient-red">Full Service</span> Landscaping Services
          </h2>
          <a
            href="tel:910-998-2281"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-primary text-primary-foreground rounded-xl font-bold text-base sm:text-xl hover:bg-red-glow transition-all glow-red hover:glow-red-intense"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span>Call Skeeterman & Turf Ninja: 910-998-2281</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandscapingCTA;
