import React from "react";
import Css from "./search.css";

const Search = ({ query, setQuery, productData, setProductFilteredData }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);

    let filteredData = productData.filter((product) => {
      return product.product_name.toLowerCase().includes(query.toLowerCase());
    });

    setProductFilteredData(filteredData);
  };

  return (
    <section className="search">
      <input
        type="text"
        className="form-control"
        placeholder="Search  Products"
        value={query}
        onChange={handleChange}
        autoFocus
      />
    </section>
  );
};

export default Search;
