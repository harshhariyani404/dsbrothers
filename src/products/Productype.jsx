import productyp from "../content/productype";
import styles from "../style/Productype.module.css";

const Productype = () => {
  return <div className={styles.product}>                   
  <h1>OUR PRODUCTS</h1>
  <div className={styles.productype}>
    {productyp.map(product => (
      <div key={product.id}>
      <img src={product.img} alt=""></img>
      <p>{product.name}</p>
      </div>
    ))}
  </div>
  </div>;
}
export default Productype;