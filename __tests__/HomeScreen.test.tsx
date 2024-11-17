import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { getReports } from '../services/reportService';

jest.mock('../services/reportService', () => ({
  getReports: jest.fn(),
}));

describe('HomeScreen', () => {
  it('exibe a mensagem de "Sem relatórios no momento" quando não há dados', async () => {
    (getReports as jest.Mock).mockResolvedValueOnce([]);
    const { findByText } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);
    const message = await findByText('Sem relatórios no momento.');
    expect(message).toBeTruthy();
  });

  it('exibe uma lista de denúncias', async () => {
    const mockReports = [
      { id: 1, title: 'Buraco na rua', description: 'Rua com buraco grande' },
      { id: 2, title: 'Iluminação pública', description: 'Lâmpada queimada' },
    ];
    (getReports as jest.Mock).mockResolvedValueOnce(mockReports);

    const { findByText } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);
    const report1 = await findByText('Buraco na rua');
    const report2 = await findByText('Iluminação pública');

    expect(report1).toBeTruthy();
    expect(report2).toBeTruthy();
  });

  it('navega para os detalhes da denúncia ao tocar no item', async () => {
    const mockReports = [
      { id: 1, title: 'Buraco na rua', description: 'Rua com buraco grande' },
    ];
    const mockNavigate = jest.fn();
    (getReports as jest.Mock).mockResolvedValueOnce(mockReports);

    const { findByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);
    const reportItem = await findByText('Buraco na rua');

    fireEvent.press(reportItem);

    expect(mockNavigate).toHaveBeenCalledWith('ReportDetails', { id: 1 });
  });
});
