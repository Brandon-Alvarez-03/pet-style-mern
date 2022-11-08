// import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
// import Home from "./screens/Home.jsx";
// import Products from "./screens/Products.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
// import Products from "./screens/Products.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
