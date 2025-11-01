// src/TareaForm.js
import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (texto.trim() === "") {
      setError("⚠️ La tarea no puede estar vacía.");
      return;
    }
    if (texto.length > 50) {
      setError("⚠️ La tarea no puede tener más de 50 caracteres.");
      return;
    }

    // Si pasa las validaciones
    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          placeholder="Escribe una nueva tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ 
            borderColor: error ? '#dc3545' : '#dee2e6',
            fontSize: '1rem'
          }}
        />
        <button 
          type="submit" 
          className="btn btn-primary px-4"
          style={{ minWidth: '120px' }}
        >
          + Agregar
        </button>
      </div>
      {error && (
        <div className="text-danger mt-2" style={{ fontSize: '0.875rem' }}>
          {error}
        </div>
      )}
    </form>
  );
}

export default TareaForm;