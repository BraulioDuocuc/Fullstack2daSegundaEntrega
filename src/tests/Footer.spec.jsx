import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renderiza el texto base del footer', () => {
    render(<Footer />);
    expect(screen.getByText(/Galería de Arte — Todos los derechos reservados/i)).toBeInTheDocument();
  });
});