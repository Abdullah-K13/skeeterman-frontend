import { Leaf, Check } from "lucide-react";

const monthlyItems = [
  "Pre Emergent ×4", "Post Emergent ×4", "Root Stimulator", "Bug Control ×2",
  "Fertilizer ×3", "Dethatch", "Aerate", "Soil Conditioner",
];

const additionalItems = [
  "Post-Emergent", "Plant & Grass Fertilizer", "Fungus & Mold Eradicator",
  "Dethatching", "Aeration", "Grass Growth Regulator", "Soil Test",
  "PH up / PH down", "Weed Control",
];

const addOnItems = [
  "Lawn Insect Control", "Armyworms", "Deer Repellent", "Root Stabilizer",
  "Disease Prevention", "Nitrogen Boost", "Landscaping Services",
  "Leaf Removal", "Sod & Seed", "Crab Grass Control",
];

const TurfPackage = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
            <Leaf className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Monthly <span className="text-gradient-red">Turf</span> Package
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="reveal card-3d glass rounded-2xl p-8 border-gradient" style={{ transitionDelay: "0s" }}>
            <h4 className="font-display text-xl font-bold text-foreground mb-6">Monthly Package</h4>
            <ul className="space-y-3">
              {monthlyItems.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card-3d glass rounded-2xl p-8 border-gradient" style={{ transitionDelay: "0.15s" }}>
            <h4 className="font-display text-xl font-bold text-foreground mb-6">Additional Services</h4>
            <ul className="space-y-3">
              {additionalItems.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card-3d glass rounded-2xl p-8 border-gradient" style={{ transitionDelay: "0.3s" }}>
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
