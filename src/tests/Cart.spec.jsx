import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext.jsx';
import Cart from '../pages/Cart.jsx';

describe('Cart', () => {
  it('muestra título, estado vacío y botón de volver', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </CartProvider>
    );

    // Título
    expect(
      screen.getByRole('heading', { name: /Mi Carrito/i })
    ).toBeInTheDocument();

    // Mensaje de carrito vacío y enlace para volver
    expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volver a la Galería/i })).toBeInTheDocument();
  });
});