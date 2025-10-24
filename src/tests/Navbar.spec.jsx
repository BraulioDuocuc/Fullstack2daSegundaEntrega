import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext';

function renderNavbar(props) {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <CartProvider>
        <Navbar {...props} />
      </CartProvider>
    </MemoryRouter>
  );
}

describe('Navbar', () => {
  it('muestra enlaces básicos y el botón Iniciar Sesión cuando no está logueado', async () => {
    const onLogin = vi.fn();
    renderNavbar({ isLoggedIn: false, user: null, onLogout: vi.fn(), onLogin });

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByText('Categorías')).toBeInTheDocument();
    expect(screen.getByText('Carrito')).toBeInTheDocument();
    expect(screen.getByText('Quienes somos')).toBeInTheDocument();

    expect(screen.queryByText('Mantenedor')).toBeNull();

    const btnLogin = screen.getByText('Iniciar Sesión');
    expect(btnLogin).toBeInTheDocument();

    await userEvent.click(btnLogin);

    // Al hacer click debe aparecer el modal con "Iniciar Sesión"
    expect(screen.getByRole('heading', { name: 'Iniciar Sesión' })).toBeInTheDocument();
  });

  it('muestra enlace Mantenedor y Cerrar Sesión cuando está logueado', () => {
    const user = { email: 'test@site.com' };
    renderNavbar({ isLoggedIn: true, user, onLogout: vi.fn(), onLogin: vi.fn() });

    expect(screen.getByText('Mantenedor')).toBeInTheDocument();
    expect(screen.getByText(`Cerrar Sesión (${user.email})`)).toBeInTheDocument();
  });
});