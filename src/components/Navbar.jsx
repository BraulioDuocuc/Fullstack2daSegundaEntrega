import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import CartBadge from './CartBadge';

function Navbar({ isLoggedIn, user, onLogout, onLogin }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="gif-header" to="/">
            <img src="/assets/img/logo.png" alt="Logo Galería" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-100" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-around">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/carrito">
                  <i className="bi bi-cart3 me-1"></i>
                  Carrito
                  <CartBadge />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos">
                  Quienes somos
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/mantenedor">
                    Mantenedor
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {isLoggedIn ? (
                  <button className="nav-link btn btn-link" onClick={onLogout}>
                    Cerrar Sesión ({user?.email})
                  </button>
                ) : (
                  <button className="nav-link btn btn-link" onClick={handleShowModal}>
                    Iniciar Sesión
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <LoginModal show={showModal} handleClose={handleCloseModal} onLogin={onLogin} />
    </>
  );
}

export default Navbar;