import { Shield } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="about-us" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mission <span className="text-gradient-red">Statement</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Protecting your Family, Pets and Property, from Pest, Disease & Weeds. Giving you more time for the Finer things in life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
