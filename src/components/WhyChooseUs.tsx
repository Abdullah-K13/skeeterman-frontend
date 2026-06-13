import { ShieldCheck, RefreshCw, Home, Zap, Sprout } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Cobweb Removal", desc: "We offer added services at no extra cost, such as removing exterior cobwebs to keep your home's perimeter clean." },
  { icon: RefreshCw, title: "30-Day Guarantee", desc: "Our pest control treatments come with a 30-day satisfaction guarantee—if pests return, we'll treat again at no charge." },
  { icon: Home, title: "Termite-Free Guarantee", desc: "Your home remains protected from termites as long as your annual renewal fee is paid." },
  { icon: Zap, title: "Active Treatment Coverage", desc: "While under an active plan, we'll address any pest-related structural issues that arise during that time." },
  { icon: Sprout, title: "Eco-Friendly Approach", desc: "Safe and effective fertilizer, eco-friendly pesticides and insecticides that support your lawn and the local environment." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Our <span className="text-gradient-red">Landscaping</span> Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Skeeterman & Ninja Turf, we're committed to going above and beyond to prevent pest issues and make a lasting difference for homes and businesses throughout the Leland, NC area.
            </p>

            <div className="stagger-children space-y-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 p-4 glass rounded-xl border-gradient hover:bg-muted/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <r.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{r.title}</h4>
                    <p className="text-muted-foreground text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
              <img
                src="https://skeetermanandturfninja.com/wp-content/uploads/2025/06/young-beautiful.webp"
                alt="Turf Ninja Services"
                className="relative rounded-2xl w-full img-3d shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
