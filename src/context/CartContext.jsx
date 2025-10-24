import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar obra al carrito
  const addToCart = (obra) => {
    setCartItems(prevItems => {
      // Verificar si la obra ya está en el carrito
      const existingItem = prevItems.find(item => item.id === obra.id);
      
      if (existingItem) {
        // Si ya existe, incrementar la cantidad
        return prevItems.map(item => 
          item.id === obra.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Si no existe, agregar con cantidad 1
        return [...prevItems, { ...obra, quantity: 1 }];
      }
    });
  };

  // Eliminar obra del carrito
  const removeFromCart = (obraId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== obraId));
  };

  // Actualizar cantidad de una obra
  const updateQuantity = (obraId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(obraId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === obraId ? { ...item, quantity } : item
      )
    );
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    clearCart,
    itemCount: cartItems.reduce((count, item) => count + item.quantity, 0)
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;