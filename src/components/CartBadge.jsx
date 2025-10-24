import { useCart } from '../context/CartContext';

function CartBadge() {
  const { itemCount } = useCart();
  
  if (itemCount === 0) return null;
  
  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {itemCount}
      <span className="visually-hidden">items en el carrito</span>
    </span>
  );
}

export default CartBadge;