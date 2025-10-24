import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext.jsx';
import Productos from '../pages/Productos.jsx';

describe('Productos', () => {
  it('muestra título de catálogo y botones de agregar', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Productos />
        </MemoryRouter>
      </CartProvider>
    );

    // Título
    expect(
      screen.getByRole('heading', { name: /Catálogo de Obras/i })
    ).toBeInTheDocument();

    // Al menos un botón "Agregar al carrito"
    const addButtons = screen.getAllByRole('button', { name: /Agregar al carrito/i });
    expect(addButtons.length).toBeGreaterThan(0);

    // Un texto de una card esperada
    expect(screen.getByText(/La Gioconda/i)).toBeInTheDocument();
  });
});