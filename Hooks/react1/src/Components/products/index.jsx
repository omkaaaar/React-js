import { useEffect, useState } from "react";
import Product1 from "./components/product-list";
import "./style.css";

const Products = ({ name, city, productList }) => {
  console.log({ name, city });

  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  const toggleText = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    setFlag(!flag);
    console.log("useEffect run only once");
  }, []);
  // function ternaryExample(getFlag) {
  //   return getFlag ? (
  //     <p>
  //       The name is: {name} and City is: {city} <br /> Flag is set to true and
  //       hence it is displayed there!!
  //     </p>
  //   ) : (
  //     <p>Flag is set to false</p>
  //   );
  // }

  return (
    <div>
      <h3 className="title">List of Ecom products</h3>
      <button onClick={toggleText}>toggle true or false</button>
      {flag ? (
        <p>
          The name is: {name} and City is: {city} <br /> Flag is set to true and
          hence it is displayed there!!
        </p>
      ) : (
        <p>Flag is set to false</p>
      )}
      <h1>count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={() => setCount((count) => 0)}>RESET</button>

      <ul>
        {productList.map((items, index) => (
          <Product1 singleProductItem={items} key={index} itemKey={index} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
