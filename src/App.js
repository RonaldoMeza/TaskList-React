import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [orden, setOrden] = useState("desc");
  const [nextId, setNextId] = useState(1);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: nextId,
      texto,
      completada: false,
      fecha: new Date(),
    };
    setTareas([...tareas, nuevaTarea]);
    setNextId(nextId + 1);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
    ));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = (tipo) => {
    setOrden(tipo);
  };

  // 🔹 Filtrar
  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  // 🔹 Ordenar por fecha
  tareasFiltradas = [...tareasFiltradas].sort((a, b) => {
    if (orden === "asc") {
      return new Date(a.fecha) - new Date(b.fecha);
    } else {
      return new Date(b.fecha) - new Date(a.fecha);
    }
  });

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2" style={{ color: '#d4af37', fontSize: '2.5rem' }}>Lista de Tareas</h1>
          <p className="text-secondary">Organiza tus pendientes de forma elegante</p>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <TareaForm agregarTarea={agregarTarea} />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <Filtros filtrarTareas={filtrarTareas} />
          <div className="btn-group" role="group">
            <button
              className={`btn btn-sm ${orden === "asc" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => ordenarTareas("asc")}
            >
              ↑ Antiguos
            </button>
            <button
              className={`btn btn-sm ${orden === "desc" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => ordenarTareas("desc")}
            >
              ↓ Recientes
            </button>
          </div>
        </div>

        <ListaTareas
          tareas={tareasFiltradas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
          toggleCompletada={toggleCompletada}
        />
      </div>
    </div>
  );
}

export default App;