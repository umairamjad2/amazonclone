import NavbarBanner from "./Navbar-Banner/navbarBanner";
import NavbarBelt from "./Navbar-Belt/navbarBelt";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarBelt />
      <NavbarBanner />
    </div>
  );
};

export default Navbar;
