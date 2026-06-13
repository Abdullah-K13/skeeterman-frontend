const ImageShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal-left">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://skeetermanandturfninja.com/wp-content/uploads/2025/06/standing-man.webp"
                alt="Lawn insect control"
                className="relative rounded-2xl w-full card-3d"
              />
            </div>
          </div>
          <div className="reveal-right">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://skeetermanandturfninja.com/wp-content/uploads/2025/06/weed-control.webp"
                alt="Landscaping Wilmington NC"
                className="relative rounded-2xl w-full card-3d"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
