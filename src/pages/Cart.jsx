import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();

  return (
    <div className="container my-5">
      <h2 className="mb-4">Mi Carrito</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h4>Tu carrito está vacío</h4>
          <p className="mb-4">Agrega algunas obras de arte para comenzar</p>
          <Link to="/" className="btn btn-primary">Volver a la Galería</Link>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img 
                        src={item.imagen} 
                        alt={item.titulo} 
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                      />
                    </td>
                    <td>{item.titulo}</td>
                    <td>{item.autor}</td>
                    <td>${item.precio.toLocaleString()}</td>
                    <td>
                      <div className="input-group" style={{ width: '120px' }}>
                        <button 
                          className="btn btn-outline-secondary btn-sm" 
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input 
                          type="text" 
                          className="form-control text-center" 
                          value={item.quantity}
                          readOnly
                        />
                        <button 
                          className="btn btn-outline-secondary btn-sm" 
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.precio * item.quantity).toLocaleString()}</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-end fw-bold">Total:</td>
                  <td colSpan="2" className="fw-bold">${getTotal().toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-secondary"
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
            <button className="btn btn-success">
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;