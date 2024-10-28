import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Inicio de sesión');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;
