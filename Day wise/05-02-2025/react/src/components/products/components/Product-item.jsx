import React from "react";
import styles from "./product.module.css";

const ButtonComponent = () => {
  return <button className={styles.buttonStyle}>Submit</button>;
};

const ProductItem = ({ singleProduct, key }) => {
  return (
    <div key={key} className={styles.border}>
      <h3>Child component 2</h3>
      <p>Product-item it is a child component of Product</p>

      <li>{singleProduct}</li>
      <ButtonComponent />
    </div>
  );
};

export default ProductItem;
