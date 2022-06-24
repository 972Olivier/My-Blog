import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="My Blog" baseline="An awesome baseline"></Header>
      <Nav
        link1="link"
        link2="link"
        link3="link"
        link4="link"
        href="https://www.figma.com/file/wC5eD4kXJNw0McXtPAwTnT/My-Blog?node-id=1%3A2"
      ></Nav>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
