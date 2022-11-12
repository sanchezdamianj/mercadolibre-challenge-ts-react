import React from "react";
import { Link } from "react-router-dom";


const NonValuesFound:React.FC = () => {
  return (
    <>
      {" "}
      <div id="messageNotFound">
        <h2>No se han encontrado resultados para esta busqueda</h2>
      </div>
      <Link to="/" className="nonValuesFound">
        Ir a la pagina principal
      </Link>
    </>
  );
};

export default NonValuesFound;
