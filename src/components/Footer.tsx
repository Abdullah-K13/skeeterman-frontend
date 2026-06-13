const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Skeeterman & Turf Ninja. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="tel:910-998-2281" className="hover:text-primary transition-colors">910-998-2281</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
