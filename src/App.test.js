//111-16 - Análise e Desenvolvimento de Sistema
//RA: 1112024105490 - Valdinei dos Santos Proença


import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renderiza o título Login', () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test('renderiza campo de email', () => {
  render(<App />);
  expect(
    screen.getByPlaceholderText(/digite seu e-mail/i)
  ).toBeInTheDocument();
});

test('renderiza campo de senha', () => {
  render(<App />);
  expect(
    screen.getByPlaceholderText(/digite sua senha/i)
  ).toBeInTheDocument();
});

test('exibe erro ao login inválido', () => {
  render(<App />);

  fireEvent.change(
    screen.getByPlaceholderText(/digite seu e-mail/i),
    { target: { value: 'teste@email.com' } }
  );

  fireEvent.change(
    screen.getByPlaceholderText(/digite sua senha/i),
    { target: { value: '000' } }
  );

  fireEvent.click(screen.getByText(/acessar/i));

  expect(
    screen.getByText(/inválido|invalido/i)
  ).toBeInTheDocument();
});

test('login válido funciona', () => {
  render(<App />);

  fireEvent.change(
    screen.getByPlaceholderText(/digite seu e-mail/i),
    { target: { value: 'valdinei.santos@pucpr.br' } }
  );

  fireEvent.change(
    screen.getByPlaceholderText(/digite sua senha/i),
    { target: { value: '12345678' } }
  );

  fireEvent.click(screen.getByText(/acessar/i));

  // verifica que NÃO apareceu erro
  expect(
    screen.queryByText(/inválido|invalido/i)
  ).not.toBeInTheDocument();
});