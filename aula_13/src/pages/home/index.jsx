import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigateToProducts() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Hello Home</h1>
      <Link to={"/products"}>Ir para a tela de produtos</Link>
      <br></br>
      <button onClick={navigateToProducts}>Ir para produtos</button>
    </div>
  );
}

export default Home;
