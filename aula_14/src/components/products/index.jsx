import React from "react";

import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Product(props) {
  console.log(props);
  return (
    <Link to={`/details/${props.product._id}`}>
      <div key={props.key} className={styles.card}>
        <p>{props.product.nome}</p>
        <img src={props.product.url_imagem} />
        <p>{props.product.fornecedor}</p>
        <p>R$ {props.product.preco}</p>
      </div>
    </Link>
  );
}

export default Product;
