import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

const Main = ({ data }) => {
  return (
    <>
      <Navbar data={data.navbar} />
      <Hero data={data.hero} />
      <Body data={data.body} />
      <Footer data={data.footer} />
    </>
  );
};

export default Main;
