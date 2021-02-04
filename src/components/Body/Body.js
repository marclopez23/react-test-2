import Section from "../Section/Section";

const Body = ({ utilsSection, developersSection }) => {
  return (
    <main id="body">
      <article>
        <Section data={utilsSection} />
        <Section data={developersSection} />
      </article>
    </main>
  );
};
