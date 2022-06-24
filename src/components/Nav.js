const Nav = (props) => {
  return (
    <nav>
      <div className="threeLink">
        <a href={props.href}>{props.link1}</a>
        <a href={props.href}>{props.link2}</a>
        <a href={props.href}>{props.link3}</a>
      </div>
      <div>
        <a href={props.href}>{props.link4}</a>
      </div>
    </nav>
  );
};

export default Nav;
