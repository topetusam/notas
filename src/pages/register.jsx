import '../styles/register.css';
import { Link } from 'react-router-dom';

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log('Registro exitoso');
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link></p>
    </div>
  );
}

export default Register;
