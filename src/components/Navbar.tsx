import ContactLinks from "./ContactLinks";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Leandro Tomarchio</div>
        <ContactLinks />
      </div>
    </nav>
  );
};

export default Navbar;
