import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuienesSomos from '../pages/QuienesSomos.jsx';

describe('QuienesSomos', () => {
  it('muestra título y contenido principal', () => {
    render(
      <MemoryRouter>
        <QuienesSomos />
      </MemoryRouter>
    );

    // Título principal
    expect(screen.getByRole('heading', { name: /Quiénes Somos/i })).toBeInTheDocument();

    // Subtítulo
    expect(screen.getByText(/La esencia detrás de Aisthētikê/i)).toBeInTheDocument();

    // Secciones clave
    expect(screen.getByRole('heading', { name: /Nuestra Misión/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Nuestros Valores/i })).toBeInTheDocument();

    // Texto final
    expect(
      screen.getByText(/Explora, descubre y deja que el arte hable por ti/i)
    ).toBeInTheDocument();
  });
});