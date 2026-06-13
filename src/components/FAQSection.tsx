import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does Skeeterman and Turf Ninja Environmental provide?", a: "Skeeterman and Turf Ninja Environmental offers tailored pest control services for both residential and commercial properties. Their treatments address over 47 common household pests, including ants, cockroaches, spiders, wasps, scorpions, fleas, ticks, rodents, and more. Utilizing environmentally responsible methods, Skeeterman and Turf Ninja ensures the safety of your family and pets while effectively eliminating pests." },
  { q: "Is pest control from Skeeterman and Turf Ninja safe for my family and pets?", a: "Skeeterman and Turf Ninja uses pest control treatments designed to minimize risk to people and pets when applied as directed by trained professionals." },
  { q: "Is it safe for my pets to be outside during a pest treatment?", a: "Skeeterman and Turf Ninja uses pet-conscious treatments, but limiting direct contact with freshly treated surfaces ensures added protection." },
  { q: "Why should I choose recurring treatments over a one-time service?", a: "Recurring treatments ensure continuous defense against pests by addressing seasonal activity and preventing infestations before they start." },
  { q: "Which types of pests does your company handle?", a: "Skeeterman and Turf Ninja treats for ants, spiders, cockroaches, and other everyday pests that invade homes and living spaces." },
  { q: "How much time should I expect a typical treatment to take?", a: "Most standard treatments take about 30 to 60 minutes, depending on the size of your property and pest concerns." },
  { q: "What's included in a regular pest control service?", a: "Technicians apply eco-conscious products around the home's perimeter, entryways, and other high-risk areas to eliminate and deter pests." },
  { q: "Why is a second treatment scheduled shortly after the initial one?", a: "A follow-up visit targets any remaining pests and reinforces the initial treatment barrier for maximum effectiveness." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        <div className="reveal text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl border-gradient px-6 border-none"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
