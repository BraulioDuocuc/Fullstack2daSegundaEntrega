import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext.jsx';
import Categorias from '../pages/Categorias.jsx';
import userEvent from '@testing-library/user-event';

describe('Categorias', () => {
  it('muestra título, botón Todos y filtra por estilo vía URL', async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/categorias?estilo=Impresionismo"]}>
          <Routes>
            <Route path="/categorias" element={<Categorias />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    // Título principal
    expect(screen.getByRole('heading', { name: /Categorías por estilo/i })).toBeInTheDocument();

    // Indicador de filtro activo
    expect(screen.getByText(/Filtrando por: Impresionismo/i)).toBeInTheDocument();

    // Conteo de cards bajo filtro
    const countFiltered = screen.getAllByRole('button', { name: /Agregar al carrito/i }).length;
    expect(countFiltered).toBeGreaterThan(0);

    // Botón "Todos" limpia el filtro y aumenta el conteo
    const btnTodos = screen.getByRole('button', { name: /Todos/i });
    await user.click(btnTodos);

    const countAll = screen.getAllByRole('button', { name: /Agregar al carrito/i }).length;
    expect(countAll).toBeGreaterThan(countFiltered);

    // Asegurar que aparece el estilo "Impresionismo" en el árbol
    expect(screen.getAllByText(/Impresionismo/i).length).toBeGreaterThan(0);
  });
});