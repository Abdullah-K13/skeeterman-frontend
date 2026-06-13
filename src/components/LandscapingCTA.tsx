import { Phone } from "lucide-react";

const LandscapingCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="container mx-auto px-4 relative">
        <div className="reveal text-center mb-8">
          <div className="relative group inline-block mb-12 max-w-md">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
            <img
              src="https://skeetermanandturfninja.com/wp-content/uploads/2025/06/man.webp"
              alt="Pest control services"
              className="relative rounded-2xl img-3d"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            We Offer <span className="text-gradient-red">Full Service</span> Landscaping Services
          </h2>
          <a
            href="tel:910-998-2281"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-xl hover:bg-red-glow transition-all glow-red hover:glow-red-intense"
          >
            <Phone className="w-6 h-6" />
            Call Skeeterman & Turf Ninja: 910-998-2281
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandscapingCTA;
