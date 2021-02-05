import Card from "../Card/Card";

const Section = ({ data: { sectionTitle, sectionDescription, cards } }) => {
  return (
    <section>
      <h2>{sectionTitle}</h2>
      {sectionDescription && <p> {sectionDescription}</p>}
      {cards.map((card, id) => (
        <Card data={card} key={id} />
      ))}
    </section>
  );
};

export default Section;
