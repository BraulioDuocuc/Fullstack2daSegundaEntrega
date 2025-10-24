import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ObraCard from '../components/ObraCard';
import { CartProvider } from '../context/CartContext';

const obra = {
  id: 123,
  titulo: 'El arte de probar',
  autor: 'Tester Anónimo',
  tecnica: 'Óleo',
  estilo: 'Impresionismo',
  anio: 2024,
  precio: 19990,
  imagen: '/assets/img/demo.jpg',
  url: 'https://example.com/obra'
};

describe('ObraCard', () => {
  it('renderiza título y permite agregar al carrito', async () => {
    render(
      <CartProvider>
        <ObraCard obra={obra} />
      </CartProvider>
    );

    expect(screen.getByText(obra.titulo)).toBeInTheDocument();
    const button = screen.getByText('Agregar al carrito');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByText('En el carrito')).toBeInTheDocument();
  });
});