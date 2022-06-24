import AboutMe from "./AboutMe";
import ananas from "../img/ananas.jpeg";

const SideContent = () => {
  return (
    <section className="SideContent">
      <AboutMe
        sideTitle="ABOUT ME"
        sidePicture={ananas}
        alt="ananas"
        sideDescription="Cras interdum pharetra felis eu faucibus."
      ></AboutMe>
    </section>
  );
};

export default SideContent;
