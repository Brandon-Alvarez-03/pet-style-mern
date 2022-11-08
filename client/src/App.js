
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";

import "./App.css";

function App() {
  const [productData, setProductData] = useState([]);
  const [productFilteredData, setProductFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Nav productData={productData} query={query} setQuery={setQuery} setProductFilteredData={setProductFilteredData}/>
      <Main productFilteredData={productFilteredData} setProductFilteredData={setProductFilteredData} setProductData={setProductData}/>
      <Footer />
    </div>
  );
}

export default App;
