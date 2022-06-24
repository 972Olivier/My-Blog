const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span>{props.baseline}</span>
    </header>
  );
};

export default Header;
