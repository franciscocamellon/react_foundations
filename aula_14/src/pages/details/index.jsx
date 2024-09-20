import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/header";
import styles from "./index.module.css";

const mock = {
  id: 1,
  nome: "Teste",
  fabricante: "fabricante",
  preco: 899,
  img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
  descricao:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem accusantium officia reiciendis deleniti ea nam aut eveniet quod ipsa? Sunt cupiditate, dicta nobis animi distinctio illo porro reprehenderit vero a.",
};

function Details() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState({});

  async function getProductDetail() {
    try {
      const response = await axios.get(
        `https://api-produtos-unyleya.vercel.app/produtos/${params.id}`
      );

      setProductDetails(response.data);
    } catch (error) {
      alert("Erro ao buscar detalhes do produto");
    }
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div>
          <img src={productDetails.url_imagem} />
        </div>

        <div className={styles.details}>
          <p>{productDetails.nome}</p>
          <p>{productDetails._id}</p>
          <p>R$ {productDetails.preco}</p>
          <p>{productDetails.fornecedor}</p>
          <p>{productDetails.descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
