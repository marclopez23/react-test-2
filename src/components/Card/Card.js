const Card = ({ data, key }) => {
  return (
    <div id={key}>
      <img src={data.img.src} alt={data.img.alt} />
      <h4>{data.name}</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;
