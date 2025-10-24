import { useCart } from '../context/CartContext';

function ObraCard({ obra }) {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some(item => item.id === obra.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(obra);
  };

  return (
    <div className="obra">
      <div>
        <img src={obra.imagen} alt={obra.titulo} />
        <div className="texto-obra">
          <h5 className="card-title">{obra.titulo}</h5>
          <p className="card-text">{obra.autor} — {obra.tecnica}, {obra.anio}</p>
          <p className="fw-bold">${obra.precio.toLocaleString()}</p>
          <button 
            className={`btn ${isInCart ? 'btn-success' : 'btn-primary'}`} 
            onClick={handleAddToCart}
          >
            {isInCart ? 'En el carrito' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ObraCard;