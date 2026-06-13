const AdvancedPlanningSection = () => {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="reveal-left space-y-5 sm:space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
              Advanced Planning and <span className="text-gradient-red">Direct Pest Control</span> in Leland, NC
            </h2>
            <h3 className="text-base sm:text-xl text-primary font-semibold uppercase tracking-wider">
              Experience Solving Pesticides in Leland, NC
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              In Leland, NC, pest control goes hand in hand with understanding the local environment. With years of experience solving pesticide challenges in Leland, our experts know how regional factors like climate, soil conditions, and landscaping in Leland influence pest behavior. Whether you're dealing with persistent ants or seasonal mosquito outbreaks, we apply precision planning to deliver fast and long-lasting results.
            </p>
          </div>

          <div className="reveal-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl group-hover:bg-accent/20 transition-all duration-500" />
              <img
                src="/images/lawn-treatment.jpg"
                alt="Lawn Treatment and Pest Control"
                className="relative rounded-2xl w-full img-3d shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlanningSection;
