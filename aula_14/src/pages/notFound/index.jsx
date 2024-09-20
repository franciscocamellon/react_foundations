import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     redirect("/");
  //   }, []);

  function navigateBack() {
    navigate("/");
  }

  return (
    <div>
      <h1>Ooopps!Página não encontrada</h1>
      <button onClick={navigateBack}>Voltar para a tela inicial</button>
    </div>
  );
}

export default NotFound;
