import styles from "./productList-style.module.css";

function Product1({ singleProductItem, itemKey }) {
  return (
    <div key={itemKey}>
      <p>{singleProductItem}</p>
      <button className={styles.buttonStyle}>Click Me!</button>
    </div>
  );
}

export default Product1;
