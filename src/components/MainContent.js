import Item from "./Item";
import plage from "../img/plage.jpeg";
import plageCoco from "../img/plageCoco.jpeg";

const MainContent = () => {
  return (
    <section className="main-content">
      <Item
        className="item1"
        ItemTitle="TITLE HEADING"
        ItemSubtitle="Title description"
        ItemPicture={plage}
        alt="plage"
        ItemDescription="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque.

        "
      ></Item>
      <Item
        className="item2"
        ItemTitle="TITLE HEADING"
        ItemSubtitle="Title description"
        ItemPicture={plageCoco}
        alt=""
        ItemDescription="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula.

        "
      ></Item>
    </section>
  );
};

export default MainContent;
