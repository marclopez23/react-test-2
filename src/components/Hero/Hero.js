const Hero = ({ data: { title, subtitle, img } }) => {
  return (
    <div id="hero" style={{ backgroundImage: `url(${img.src})` }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default Hero;
