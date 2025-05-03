// import React from "react";
import "./style.css";

import ProductItem from "./components/Product-item";
// import { useState } from "react";

const Products = ({ name, city, productList }) => {
  // const [flag, setFlag] = useState(true);
  const flag = true;
  const renderNameCity = (getFlag) => {
    return getFlag == false ? (
      <p>
        My name is: {name} and im from: {city}
      </p>
    ) : (
      <p>No name and city</p>
    );
  };

  return (
    <>
      <h2>Child Component</h2>
      <h3>Ecommerce Project</h3>
      <p className="para">Product is a child component of App</p>

      <ul>
        {/* whenever we map the data we need to givee KEY prop */}
        {productList.map((item, index) => (
          <ProductItem singleProduct={item} key={index} />
        ))}
      </ul>

      {renderNameCity(flag)}

      <button>Change</button>
    </>
  );
};

export default Products;
