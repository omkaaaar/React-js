import "./App.css";
// import ClassBasedComponents from "./components/class-based-components";
// import Abcd from "./Components/functional-based-components";
import Products from "./Components/products";
const productList = ["product 1", "product 2", "Product 3"];

function App() {
  return (
    <div>
      <h1>hellooo wordl!</h1>
      <Products productList={productList} name="Omkar Kallekar" city="Goa" />
      {/* <ClassBasedComponents /> */}
      {/* <Abcd /> */}
    </div>
  );
}

export default App;
