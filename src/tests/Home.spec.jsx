import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext.jsx';
import Home from '../pages/Home.jsx';

describe('Home', () => {
  it('muestra título, botón de agregar y una card', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </CartProvider>
    );

    // Título principal
    expect(
      screen.getByRole('heading', { name: /Bienvenido a nuestra Tienda de Arte/i })
    ).toBeInTheDocument();

    // Botón "Agregar al carrito" en alguna card
    const addButtons = screen.getAllByRole('button', { name: /Agregar al carrito/i });
    expect(addButtons.length).toBeGreaterThan(0);

    // Un texto de una card
    expect(screen.getByText(/Impresión, sol naciente/i)).toBeInTheDocument();
  });
});