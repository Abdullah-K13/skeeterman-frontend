const ImageShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="reveal-left">
            <div className="relative group overflow-hidden rounded-2xl h-64 sm:h-80 md:h-96">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/lawn 2.webp"
                alt="Lawn insect control"
                className="relative rounded-2xl w-full h-full object-cover card-3d"
              />
            </div>
          </div>
          <div className="reveal-right">
            <div className="relative group overflow-hidden rounded-2xl h-64 sm:h-80 md:h-96 bg-white">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/deer.jpeg"
                alt="Landscaping Wilmington NC"
                className="relative rounded-2xl w-full h-full object-contain card-3d"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
