import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginModal from '../components/LoginModal';

describe('LoginModal', () => {
  it('muestra el formulario de login por defecto, permite alternar y cerrar', async () => {
    const handleClose = vi.fn();
    const onLogin = vi.fn();

    render(<LoginModal show={true} handleClose={handleClose} onLogin={onLogin} />);

    // Por defecto: Login
    expect(screen.getByRole('heading', { name: 'Iniciar Sesión' })).toBeInTheDocument();
    expect(screen.getByText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByText('Contraseña')).toBeInTheDocument();

    // Alternar a registro
    await userEvent.click(screen.getByText('¿No tienes cuenta? Regístrate'));
    expect(screen.getByRole('heading', { name: 'Registrarse' })).toBeInTheDocument();
    expect(screen.getByText('Nombre completo')).toBeInTheDocument();
    expect(screen.getByText('Confirmar contraseña')).toBeInTheDocument();

    // Cerrar
    await userEvent.click(screen.getByLabelText('Cerrar'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('muestra mensaje de error cuando faltan campos en login y registro', async () => {
    render(<LoginModal show={true} handleClose={vi.fn()} onLogin={vi.fn()} />);

    // En login, enviar vacío
    await userEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));
    expect(screen.getByText('Por favor complete todos los campos')).toBeInTheDocument();

    // Cambiar a registro y enviar vacío
    await userEvent.click(screen.getByText('¿No tienes cuenta? Regístrate'));
    await userEvent.click(screen.getByRole('button', { name: 'Registrarse' }));
    expect(screen.getByText('Por favor complete todos los campos')).toBeInTheDocument();
  });
});