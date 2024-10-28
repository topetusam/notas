import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/escribirnota.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

function EscribirNota() {
  const location = useLocation();
  const existingNote = location.state?.existingNote; // Verificar si hay una nota existente
  const navigate = useNavigate();

  const [title, setTitle] = useState(existingNote ? existingNote.title : '');
  const [content, setContent] = useState(existingNote ? existingNote.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar la nota
    console.log('Nota guardada:', { title, content });
    navigate('/'); // Redirige a notas.jsx tras guardar la nota
  };

  return (
    <div className="escribir-nota-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/notas')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>{existingNote ? 'Editar Nota' : 'Nueva Nota'}</h2>
        <button type="submit" className="save-button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </form>
    </div>
  );
}

export default EscribirNota;
