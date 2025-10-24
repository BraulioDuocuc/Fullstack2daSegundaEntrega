import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartBadge from '../components/CartBadge';
import { CartProvider, useCart } from '../context/CartContext';

function AddButton() {
  const { addToCart } = useCart();
  const obra = { id: 99, titulo: 'X', precio: 500 };
  return <button onClick={() => addToCart(obra)}>add</button>;
}

describe('CartBadge', () => {
  it('no se muestra cuando itemCount es 0 y aparece tras agregar', async () => {
    render(
      <CartProvider>
        <CartBadge />
        <AddButton />
      </CartProvider>
    );

    // No debe mostrar el texto oculto ni el contador
    expect(screen.queryByText('items en el carrito')).toBeNull();
    expect(screen.queryByText('1')).toBeNull();

    await userEvent.click(screen.getByText('add'));

    // Debe aparecer el badge con contador y el texto accesible
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('items en el carrito')).toBeInTheDocument();
  });
});