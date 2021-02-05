import List from "../List/List";

const Navbar = ({ data: { logo, title, links } }) => {
  return (
    <nav id="nav">
      <img src={logo.src} alt={logo.alt} />
      <h3>{title}</h3>
      <List data={links} clase="menu" />
    </nav>
  );
};

export default Navbar;
