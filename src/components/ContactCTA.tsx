import { Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />

      <div className="container mx-auto px-4 relative">
        <div className="reveal glass-strong rounded-3xl p-12 md:p-16 text-center border-gradient max-w-4xl mx-auto glow-red">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-gradient-red">Protect</span> Your Home?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Get a free estimate today. Our team is ready to provide premium pest control and lawn care services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="tel:910-998-2281"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-xl hover:bg-red-glow transition-all hover:glow-red-intense"
            >
              <Phone className="w-6 h-6" />
              910-998-2281
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Mt. Misery Rd, Leland, NC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
