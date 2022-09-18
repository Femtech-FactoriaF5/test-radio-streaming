import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import SearchBar from './components/Search';
import { server } from './mocks/server';

describe('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA".', () =>
  test('renders learn react link', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { name: 'RADIO FACTORIA' });
    expect(titleElement).toBeInTheDocument();
  }));

describe('Debemos poder buscar radios por nombre', () => {



  test('La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
    render(<App />)
    const inputEl = screen.getByPlaceholderText("Escribe el nombre de la radio")
    expect(inputEl).toBeInTheDocument();
  })
  test('La aplicación debe tener un botón de búsqueda => Texto "Buscar"', () => {
    render(<App />)
    const buttonEl = screen.getByRole('button', { name: 'Buscar' })
    expect(buttonEl).toBeInTheDocument();
  })
  test('Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez', () => {
    const mockSearchFn = jest.fn();
    const mockInputFn = jest.fn();
    render(<SearchBar handleClick={mockSearchFn}
      value=''
      handleInput={mockInputFn} />)
    const buttonEl = screen.getByRole('button', { name: 'Buscar' })
    // buttonEl.addEventListener('click',mockSearchFn)
    userEvent.click(buttonEl);
    expect(mockSearchFn).toHaveBeenCalledTimes(1);
  })
});

describe('listado de emisoras', () => {
  beforeAll(() => server.listen());
  beforeEach(() => render(<App />));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('Debe existir un listado de emisoras', () => {
    const listaEl = screen.getByRole('list')
    expect(listaEl).toBeInTheDocument();
  });
  test('El listado debe inicializar vacío', () => {
    const listaEl = screen.getByRole('list')
    expect(listaEl.childElementCount).toBeLessThanOrEqual(0);
  })
  test('Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado', async () => {
    const inputEl = screen.getByPlaceholderText("Escribe el nombre de la radio");
    const buttonEl = screen.getByRole('button', { name: 'Buscar' })
    userEvent.type(inputEl, 'Country');
    userEvent.click(buttonEl);
    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(1);
    })



  })
  test('Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"',
    async () => {
      const inputEl = screen.getByPlaceholderText("Escribe el nombre de la radio");
      const buttonEl = screen.getByRole('button', { name: 'Buscar' })
      userEvent.type(inputEl, 'NoExiste');
      userEvent.click(buttonEl);
      const notFoundEl = await screen.findByLabelText('not-found-text');
      expect(notFoundEl).toBeInTheDocument();

    })
})

