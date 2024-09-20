import React from "react";
import { useParams } from "react-router-dom";

function Prodcuts() {
  const params = useParams();

  return (
    <div>
      <h1>Hello Prodcuts</h1>
    </div>
  );
}

export default Prodcuts;
