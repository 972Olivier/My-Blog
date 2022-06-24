const Item = (props) => {
  return (
    <div className="item">
      <h2>{props.ItemTitle}</h2>
      <h3>{props.ItemSubtitle}</h3>
      <div>
        <img src={props.ItemPicture} alt={props.alt} />
      </div>
      <p>{props.ItemDescription}</p>
    </div>
  );
};

export default Item;
