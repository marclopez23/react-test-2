import Section from "../Section/Section";

const Body = ({ data }) => {
  const { utilsSection, developersSection } = data;
  return (
    <main id="body">
      <article>
        <Section data={utilsSection} />
        <Section data={developersSection} />
      </article>
    </main>
  );
};

export default Body;
