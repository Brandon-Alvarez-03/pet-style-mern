
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import SignIn from "./screens/Sign-In/SignIn.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
