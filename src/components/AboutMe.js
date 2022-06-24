const AboutMe = (props) => {
  return (
    <section className="AboutMe">
      <h2>{props.sideTitle}</h2>

      <img src={props.sidePicture} alt={props.alt} />

      <p>{props.sideDescription}</p>
    </section>
  );
};

export default AboutMe;
