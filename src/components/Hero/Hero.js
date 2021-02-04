const Hero = ({ title, subtitle, img }) => {
  const background = `background-image: url(${img.src})`;
  return (
    <div id="hero" style={background}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default Hero;
