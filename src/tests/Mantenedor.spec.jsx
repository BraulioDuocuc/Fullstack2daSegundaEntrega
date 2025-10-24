import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Mantenedor from '../pages/Mantenedor.jsx';

describe('Mantenedor', () => {
  it('valida título, inputs y validaciones de formulario', () => {
    render(
      <MemoryRouter>
        <Mantenedor />
      </MemoryRouter>
    );

    // Título
    expect(
      screen.getByRole('heading', { name: /Mantenedor de Obras/i })
    ).toBeInTheDocument();

    // Inputs requeridos presentes
    const inputTitulo = document.querySelector('input[name="titulo"]');
    const inputAutor = document.querySelector('input[name="autor"]');
    const inputPrecio = document.querySelector('input[name="precio"]');
    expect(inputTitulo).toBeInTheDocument();
    expect(inputAutor).toBeInTheDocument();
    expect(inputPrecio).toBeInTheDocument();

    // Validación negativa: enviar vacío muestra mensaje de error
    const form = document.querySelector('form');
    fireEvent.submit(form);
    expect(
      screen.getByText(/Por favor complete los campos obligatorios/i)
    ).toBeInTheDocument();

    // Caso positivo: completar y enviar muestra éxito
    fireEvent.change(inputTitulo, { target: { value: 'Nueva Obra' } });
    fireEvent.change(inputAutor, { target: { value: 'Autor X' } });
    fireEvent.change(inputPrecio, { target: { value: '1000' } });
    fireEvent.submit(form);
    expect(
      screen.getByText(/Obra agregada con éxito/i)
    ).toBeInTheDocument();
  });
});