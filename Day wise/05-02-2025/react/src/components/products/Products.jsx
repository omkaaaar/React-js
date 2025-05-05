// import React from "react";
// import "app.css";
import "./style.css";

import ProductItem from "./components/Product-item";
import { useEffect, useState } from "react";

const Products = ({ name, city, productList }) => {
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    setFlag(!flag);
  }, []);

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);
  console.log(changeStyle);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // const flag = true;
  // const renderNameCity = (getFlag) => {
  //   return getFlag == false ? (
  //     <p>
  //       My name is: {name} and im from: {city}
  //     </p>
  //   ) : (
  //     <p>No name and city</p>
  //   );
  // };

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

      {/* {renderNameCity(flag)} */}

      {flag ? (
        <h2>
          The name is: {name} and city is: {city}
        </h2>
      ) : (
        <p>Ye yedyaaaa</p>
      )}

      <button onClick={handleClick}>Change Text</button>
      <div>
        <h1>UseEffect hook example</h1>
        <p>Count is {count}</p>
        <button
          style={{
            backgroundColor: changeStyle ? "#abdaf7" : "#041c2b",
            color: changeStyle ? "#041c2b" : "#abdaf7",
          }}
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Products;
