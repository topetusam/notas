// Notas.jsx
import '../styles/notas.css';

const Notas = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Notes</h1>
        <div className="icons">
          <button className="icon search">&#128269;</button> {/* Ícono de búsqueda */}
          <button className="icon info">&#9432;</button> {/* Ícono de información */}
        </div>
      </div>
      <div className="notes">
        <div className="note red">
          <span className="trash-icon">&#128465;</span> {/* Ícono de papelera */}
        </div>
        <div className="note pink">
          Book Review: The Design of Everyday Things by Don Norman
        </div>
        <div className="note green">
          Animes produced by Ufotable
        </div>
        <div className="note yellow">
          Mangas planned to read
        </div>
        <div className="note blue">
          Awesome tweets collection
        </div>
        <div className="note purple">
          List of free & open source apps
        </div>
      </div>
      <button className="add-note">+</button> {/* Botón flotante */}
    </div>
  );
};

export default Notas;
