// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/products/products";
import ClassBasedComponent from "./components/Class-Based-component";
import Users from "./components/Users";
// import Products from "./components/products/products";

function App() {
  // const [count, setCount] = useState(0);

  const dummyProductData = ["product1", "product2", "product3"];

  return (
    <>
      <h1>Im a Parent component</h1>

      <ClassBasedComponent />
      <Products
        name="Omkar Kallekar"
        city="Panjim"
        productList={dummyProductData}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <Users />
    </>
  );
}

export default App;
