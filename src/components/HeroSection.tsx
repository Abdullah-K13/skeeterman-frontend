import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/landscape.jpg"
          alt="Beautiful landscaped lawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative container mx-auto px-4 pt-28 pb-12 sm:pt-32 sm:pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm text-muted-foreground">
            <span className="w-6 sm:w-8 h-[1px] bg-primary" />
            WELCOME TO OUR COMPANY
            <span className="w-6 sm:w-8 h-[1px] bg-primary" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 text-foreground">
            Skeeterman & Turf Ninja{" "}
            <span className="text-gradient-red">Take Care</span> Of Your Mosquito And Lawn Treatments
          </h1>

          <a
            href="tel:910-998-2281"
            className="inline-flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-5xl font-bold text-gradient-red mb-4 hover:scale-105 transition-transform"
          >
            <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse-glow rounded-full p-2 bg-primary/20" />
            910-998-2281
          </a>

          <p className="text-base sm:text-xl text-muted-foreground font-medium mb-7 sm:mb-10 uppercase tracking-wider">
            Call Or Text Now For A Free Estimate
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#services"
              className="px-5 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base sm:text-lg hover:bg-red-glow transition-all glow-red hover:glow-red-intense"
            >
              Explore Services
            </a>
            <a
              href="tel:9109982281"
              className="px-5 py-3 sm:px-8 sm:py-4 glass border-gradient rounded-xl font-bold text-base sm:text-lg text-foreground hover:bg-muted/50 transition-all"
            >
              Get A Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
