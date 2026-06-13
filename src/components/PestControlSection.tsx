const PestControlSection = () => {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="reveal-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
              <img
                src="/images/pest-control.jpg"
                alt="Pest Control"
                className="relative rounded-2xl w-full img-3d shadow-2xl"
              />
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
              Pest Control in <span className="text-gradient-red">Wilmington</span>
            </h2>
            <h3 className="text-base sm:text-xl text-primary font-semibold uppercase tracking-wider">
              Leland and Surrounding Areas
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Skeeterman & Turf Ninja, everyone deserves a clean, safe, and comfortable home. Throughout coastal North and South Carolina—and in nearby communities and beyond—you can count on our team to get the job done right every time and deliver the results you deserve. Take back control of your home from pests with help from the professionals!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PestControlSection;
