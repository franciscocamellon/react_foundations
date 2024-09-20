import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/header";
import Product from "../../components/products";

import styles from "./index.module.css";

// const mock = [
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
// ];

function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://api-produtos-unyleya.vercel.app/produtos"
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className={styles.container}>
        <h2>Produtos</h2>
        <div className={styles.container_list}>
          {products.map((product) => (
            <div>
              <Product key={product._id} product={product} />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.float_button}>+</button>
    </div>
  );
}

export default Home;
