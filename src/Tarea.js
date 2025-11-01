import React, { useState } from 'react';

function Tarea({ id, tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedText(tarea);
  };

  const handleSaveClick = () => {
    if (editedText.trim()) {
      onEdit(editedText.trim());
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setEditedText(tarea);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item border-0 border-bottom py-3" style={{ transition: 'background-color 0.2s' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center flex-grow-1">
          <div className="form-check">
            <input 
              type="checkbox" 
              id={`checkbox-${id}`}
              checked={completada} 
              onChange={onToggleCompletada} 
              className="form-check-input"
              style={{ 
                cursor: 'pointer',
                width: '1.2rem',
                height: '1.2rem',
                borderColor: '#6c757d'
              }}
            />
          </div>
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="form-control form-control-sm ms-3 flex-grow-1"
              style={{ maxWidth: '400px', borderColor: '#d4af37' }}
              autoFocus
              onKeyPress={(e) => e.key === 'Enter' && handleSaveClick()}
            />
          ) : (
            <label 
              htmlFor={`checkbox-${id}`}
              className={`ms-3 mb-0 ${completada ? 'text-decoration-line-through text-muted' : 'text-dark'}`}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              {tarea}
            </label>
          )}
        </div>
        
        <div className="d-flex gap-2">
          {isEditing ? (
            <>
              <button 
                className="btn btn-sm btn-primary px-3" 
                onClick={handleSaveClick}
                style={{ minWidth: '80px' }}
              >
                Guardar
              </button>
              <button 
                className="btn btn-sm btn-outline-secondary px-3" 
                onClick={handleCancelClick}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn btn-sm btn-outline-dark" 
                onClick={handleEditClick}
                title="Editar tarea"
              >
                ✏️
              </button>
              <button 
                className="btn btn-sm btn-outline-danger" 
                onClick={onDelete}
                title="Eliminar tarea"
              >
                🗑️
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default Tarea;