import { AlertTriangle, Heart, Biohazard } from "lucide-react";

const facts = [
  { icon: AlertTriangle, text: "Mosquitoes kill 1 million people a year.", color: "text-primary" },
  { icon: Heart, text: "Mosquitoes give your pets heartworms.", color: "text-red-glow" },
  { icon: Biohazard, text: "Insects spread diseases & bacteria such as malaria, West Nile, Zika, salmonella, polio & more.", color: "text-gold" },
];

const InsectFacts = () => {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-10 md:mb-16">
          {facts.map((f, i) => (
            <div key={i} className="reveal card-3d glass rounded-2xl p-5 sm:p-8 text-center border-gradient" style={{ transitionDelay: `${i * 0.15}s` }}>
              <f.icon className={`w-12 h-12 mx-auto mb-4 ${f.color}`} />
              <p className="text-foreground text-lg font-medium">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal flex justify-center">
          <div className="relative group max-w-xl">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
            <img
              src="/images/insect.webp"
              alt="Best mosquito control for yard"
              className="relative rounded-2xl w-full img-3d"
            />
          </div>
        </div>

        <div className="reveal text-center mt-12">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            We Offer <span className="text-gradient-red">Family-Friendly</span> Chemicals & All-Natural Options
          </h2>
        </div>
      </div>
    </section>
  );
};

export default InsectFacts;
