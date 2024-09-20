import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-responsive-modal";

import Header from "../../components/header";
import Product from "../../components/products";

import "react-responsive-modal/styles.css";
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
  const [modalVisibility, setModalVisibility] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    vendor: "",
    url: "",
    description: "",
  });

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

  async function createProduct() {
    try {
      await axios.post("https://api-produtos-unyleya.vercel.app/produtos", {
        nome: formData.name,
        preco: formData.price,
        fornecedor: formData.vendor,
        url_imagem: formData.url,
        descricao: formData.description,
      });

      getProducts();
      setModalVisibility(false);
      setFormData({
        name: "",
        price: "",
        vendor: "",
        url: "",
        description: "",
      });
      alert("Produto criado co sucesso!");
    } catch (error) {
      alert("Erro ao criar produto");
    }
  }

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
      <button
        className={styles.float_button}
        onClick={() => setModalVisibility(true)}
      >
        +
      </button>

      <Modal
        styles={{ borderRadius: "12px" }}
        center
        open={modalVisibility}
        onClose={() => setModalVisibility(false)}
      >
        <div className={styles.container_modal}>
          <h3>Cadastrar produto</h3>

          <input
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            placeholder="Nome do produto"
          ></input>
          <div className={styles.row}>
            <input
              value={formData.price}
              onChange={(event) =>
                setFormData({ ...formData, price: event.target.value })
              }
              placeholder="Preço"
            ></input>
            <input
              value={formData.vendor}
              onChange={(event) =>
                setFormData({ ...formData, vendor: event.target.value })
              }
              placeholder="Fornecedor"
            ></input>
          </div>
          <input
            value={formData.url}
            onChange={(event) =>
              setFormData({ ...formData, url: event.target.value })
            }
            placeholder="URL da imagem"
          ></input>
          <textarea
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
            placeholder="Descrição"
          ></textarea>
          <div className={styles.row}>
            <button onClick={() => createProduct()}>Salvar</button>
            <button onClick={() => setModalVisibility(false)}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
