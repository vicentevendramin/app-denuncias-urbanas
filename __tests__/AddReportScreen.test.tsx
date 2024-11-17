import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AddReportScreen from '../screens/AddReportScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

describe('AddReportScreen', () => {
  it('deve renderizar o título e os campos de entrada', () => {
    const { getByPlaceholderText, getByText } = render(<AddReportScreen navigation={{ goBack: jest.fn() }} />);
    expect(getByText('Nova Denúncia')).toBeTruthy();
    expect(getByPlaceholderText('Título')).toBeTruthy();
    expect(getByPlaceholderText('Descrição')).toBeTruthy();
  });

  it('deve exibir um alerta se os campos estiverem vazios ao tentar salvar', () => {
    const { getByText } = render(<AddReportScreen navigation={{ goBack: jest.fn() }} />);
    const salvarButton = getByText('Salvar');

    fireEvent.press(salvarButton);

    expect(getByText('Por favor, preencha todos os campos.')).toBeTruthy();
  });

  it('deve exibir um alerta de sucesso ao salvar com todos os campos preenchidos', () => {
    const { getByPlaceholderText, getByText } = render(<AddReportScreen navigation={{ goBack: jest.fn() }} />);
    const tituloInput = getByPlaceholderText('Título');
    const descricaoInput = getByPlaceholderText('Descrição');
    const salvarButton = getByText('Salvar');

    fireEvent.changeText(tituloInput, 'Denúncia de teste');
    fireEvent.changeText(descricaoInput, 'Descrição da denúncia de teste');
    fireEvent.press(salvarButton);

    expect(getByText('Denúncia adicionada com sucesso!')).toBeTruthy();
  });

  it('deve navegar de volta ao pressionar o botão Salvar', () => {
    const mockGoBack = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddReportScreen navigation={{ goBack: mockGoBack }} />);
    const tituloInput = getByPlaceholderText('Título');
    const descricaoInput = getByPlaceholderText('Descrição');
    const salvarButton = getByText('Salvar');

    fireEvent.changeText(tituloInput, 'Denúncia de teste');
    fireEvent.changeText(descricaoInput, 'Descrição da denúncia de teste');
    fireEvent.press(salvarButton);

    expect(mockGoBack).toHaveBeenCalled();
  });
});
