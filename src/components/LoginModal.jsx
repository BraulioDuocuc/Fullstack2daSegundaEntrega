import { useState } from 'react';

function LoginModal({ show, handleClose, onLogin }) {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Por favor complete todos los campos');
      return;
    }
    
    // Simulación de login exitoso
    setSuccessMessage('Inicio de sesión exitoso');
    setTimeout(() => {
      handleClose();
      onLogin({ email });
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Por favor complete todos los campos');
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }
    
    // Simulación de registro exitoso
    setSuccessMessage('Registro exitoso. Ya puede iniciar sesión');
    setTimeout(() => {
      setIsLoginForm(true);
      setName('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    }, 1500);
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title">
              {isLoginForm ? 'Iniciar Sesión' : 'Registrarse'}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleClose}
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            {isLoginForm ? (
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <div className="text-danger mb-3">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="text-success mb-3">{successMessage}</div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                  Iniciar Sesión
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Confirmar contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <div className="text-danger mb-3">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="text-success mb-3">{successMessage}</div>
                )}

                <button type="submit" className="btn btn-success w-100">
                  Registrarse
                </button>
              </form>
            )}
          </div>
          <div className="modal-footer">
            <span
              onClick={toggleForm}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              {isLoginForm
                ? '¿No tienes cuenta? Regístrate'
                : '¿Ya tienes cuenta? Inicia sesión'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;