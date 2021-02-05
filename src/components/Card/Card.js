const Card = ({ data, id }) => {
  return (
    <div id={id}>
      <img src={data.img.src} alt={data.img.alt} />
      <h4>{data.name}</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;
