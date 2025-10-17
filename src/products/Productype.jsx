import productyp from "../content/productype";
import styles from "../style/Productype.module.css";

const Productype = ({ selectedType, onTypeSelect }) => {
  return (
    <div className={styles.product}>
      <h1>OUR PRODUCTS</h1>
      <div className={styles.productype}>
        {productyp.map(product => (
          <div
            key={product.id}
            className={selectedType === product.name ? styles.active : ""}
            onClick={() => onTypeSelect(product.name)}
            style={{ cursor: "pointer" }}
          >
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productype;