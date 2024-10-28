import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Notas from './pages/notas';
import EscribirNota from './pages/escribirnota'; // Importa la nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/escribirnota" element={<EscribirNota />} /> {/* Ruta para escribir nota */}
      </Routes>
    </Router>
  );
}

export default App;
