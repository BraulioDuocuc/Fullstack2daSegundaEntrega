import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartProvider, useCart } from '../context/CartContext';

function TestConsumer() {
  const { addToCart, clearCart, getTotal, itemCount } = useCart();
  const obra = { id: 1, titulo: 'Obra de prueba', precio: 1000 };
  return (
    <div>
      <div data-testid="count">{itemCount}</div>
      <div data-testid="total">{getTotal()}</div>
      <button onClick={() => addToCart(obra)}>add</button>
      <button onClick={() => addToCart(obra)}>add-again</button>
      <button onClick={() => clearCart()}>clear</button>
    </div>
  );
}

describe('CartContext', () => {
  it('agrega items, calcula total y limpia el carrito', async () => {
    render(
      <CartProvider>
        <TestConsumer />
      </CartProvider>
    );

    const count = () => Number(screen.getByTestId('count').textContent);
    const total = () => Number(screen.getByTestId('total').textContent);

    expect(count()).toBe(0);
    expect(total()).toBe(0);

    await userEvent.click(screen.getByText('add'));
    expect(count()).toBe(1);
    expect(total()).toBe(1000);

    await userEvent.click(screen.getByText('add-again'));
    expect(count()).toBe(2);
    expect(total()).toBe(2000);

    await userEvent.click(screen.getByText('clear'));
    expect(count()).toBe(0);
    expect(total()).toBe(0);
  });
});