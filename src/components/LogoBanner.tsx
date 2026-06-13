const LogoBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/30 to-background" />
      <div className="container mx-auto px-4 relative">
        <div className="reveal flex justify-center">
          <img
            src="/images/logo.png"
            alt="Skeeterman & Turf Ninja"
            className="max-w-xs sm:max-w-xl md:max-w-3xl w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
