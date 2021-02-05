import List from "../List/List";

const Footer = ({
  data: {
    contact: {
      email,
      phone,
      address: { country, street, state },
    },
    links,
  },
}) => {
  console.log("enlaces", country);
  return (
    <footer>
      <article className="contact">
        <a href={`"mailto:${email}"`}>
          <span>Email:</span> {email}
        </a>
        <a href={`"tel:+ ${phone}"`}>
          <span>Phone:</span> {phone}
        </a>
        <h5>Address</h5>
        <ul>
          <li>{country}</li>
          <li>{street}</li>
          <li>{state}</li>
        </ul>
      </article>
      <article>
        <List data={links} clase="footer-links" />
      </article>
    </footer>
  );
};

export default Footer;
