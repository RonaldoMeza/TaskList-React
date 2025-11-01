import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-0">
        {tareas.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-secondary mb-0">No hay tareas para mostrar</p>
            <small className="text-muted">Agrega una nueva tarea para comenzar</small>
          </div>
        ) : (
          <ul className="list-group list-group-flush">
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea.texto}
                completada={tarea.completada}
                onDelete={() => eliminarTarea(tarea.id)}
                onEdit={(nuevoTexto) => editarTarea(tarea.id, nuevoTexto)}
                onToggleCompletada={() => toggleCompletada(tarea.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListaTareas;