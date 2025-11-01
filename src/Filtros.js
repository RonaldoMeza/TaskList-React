import React, { useState } from 'react';

function Filtros({ filtrarTareas }) {
  const [filtroActivo, setFiltroActivo] = useState("Todas");

  const handleFiltroClick = (filtro) => {
    setFiltroActivo(filtro);
    filtrarTareas(filtro);
  };

  return (
    <div className="btn-group" role="group" aria-label="Filtros de tareas">
      <button
        className={`btn btn-sm ${filtroActivo === "Todas" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => handleFiltroClick("Todas")}
      >
        Todas
      </button>
      <button
        className={`btn btn-sm ${filtroActivo === "Pendientes" ? "btn-secondary" : "btn-outline-secondary"}`}
        onClick={() => handleFiltroClick("Pendientes")}
      >
        Pendientes
      </button>
      <button
        className={`btn btn-sm ${filtroActivo === "Completadas" ? "btn-dark" : "btn-outline-dark"}`}
        onClick={() => handleFiltroClick("Completadas")}
      >
        Completadas
      </button>
    </div>
  );
}

export default Filtros;