import React from "react";
import Botones from "./botones";

const Barra = ({ onPageChange }) => {
  return (
    <div className="flex justify-around w-full">
      <Botones text="Telefonos" onClick={() => onPageChange("Telefonos")} />
      <Botones text="Ordenadores" onClick={() => onPageChange("Ordenadores")} />
      <Botones text="Tablets" onClick={() => onPageChange("Tablets")} />
      <Botones text="Cascos" onClick={() => onPageChange("Cascos")} />
    </div>
  );
};

export default Barra;
