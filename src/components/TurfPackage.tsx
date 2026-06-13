import { Leaf, Check } from "lucide-react";

const monthlyItems = [
  "Pre Emergent ×2", "Post Emergent ×2", "Root Stimulator", "Bug Control ×2",
  "Fertilizer ×2", "Dethatch", "Aerate", "Soil Conditioner",
];

const additionalItems = [
  "Post-Emergent", "Plant & Grass Fertilizer", "Fungus & Mold Eradicator",
  "Dethatching", "Aeration", "Grass Growth Regulator", "Soil Test",
  "Weed Control",
];

const addOnItems = [
  "Lawn Insect Control", "Armyworms", "Deer Repellent", "Root Stabilizer",
  "Disease Prevention", "Nitrogen Boost", "Landscaping Services",
  "Leaf Removal", "Sod & Seed", "Crab Grass Control", "Deer Deterrent with a box",
];

const TurfPackage = () => {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="reveal text-center mb-10 md:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/20 mb-5 sm:mb-6">
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Monthly <span className="text-gradient-red">Turf</span> Package
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div className="reveal card-3d glass rounded-2xl p-5 md:p-8 border-gradient" style={{ transitionDelay: "0s" }}>
            <h4 className="font-display text-xl font-bold text-foreground mb-6">Monthly Package</h4>
            <ul className="space-y-3">
              {monthlyItems.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card-3d glass rounded-2xl p-5 md:p-8 border-gradient" style={{ transitionDelay: "0.15s" }}>
            <h4 className="font-display text-xl font-bold text-foreground mb-6">Additional Services</h4>
            <ul className="space-y-3">
              {additionalItems.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card-3d glass rounded-2xl p-5 md:p-8 border-gradient" style={{ transitionDelay: "0.3s" }}>
            <h4 className="font-display text-xl font-bold text-foreground mb-6">Add On / One Time</h4>
            <ul className="space-y-3">
              {addOnItems.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurfPackage;
