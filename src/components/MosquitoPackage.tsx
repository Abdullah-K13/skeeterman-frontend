import { Bug, Check } from "lucide-react";

const addOnServices = [
  "Mosquito Control", "Roaches Control", "Fly Control", "Spider Control",
  "Bees, Wasp, Yellow Jackets", "Flea & Tick Control", "Repellant Rats",
  "Deer Repellent", "Snake Repellent", "Rabbit Repellent", "Deer Deterrent with a box",
];

const ipmServices = [
  "Full-service Landscaping", "Gutter Cleaning / 1 story", "Barrier Treatments",
  "Mole Treatments", "Ant Treatments", "Gutter Drains",
];

const MosquitoPackage = () => {
  return (
    <section id="services" className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="reveal text-center mb-10 md:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 mb-5 sm:mb-6">
            <Bug className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Monthly <span className="text-gradient-red">Mosquito</span> Package
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Add-on services */}
          <div className="reveal-left card-3d glass rounded-2xl p-5 md:p-8 border-gradient">
            <h4 className="font-display text-2xl font-bold text-foreground mb-6">
              Add On Services or One Time Services
            </h4>
            <ul className="stagger-children space-y-3">
              {addOnServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* IPM */}
          <div className="reveal-right card-3d glass rounded-2xl p-5 md:p-8 border-gradient">
            <h4 className="font-display text-2xl font-bold text-foreground mb-6">
              Integrated Pest Management
            </h4>
            <ul className="stagger-children space-y-3">
              {ipmServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosquitoPackage;
