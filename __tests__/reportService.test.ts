import { getReports } from '../services/reportService';

describe('getReports', () => {
  it('retorna uma lista de denúncias mockadas', async () => {
    const reports = await getReports();
    expect(reports).toEqual([
      {
        id: '1',
        title: 'Buraco na Rua Principal',
        description: 'Um buraco grande está dificultando o trânsito na Rua Principal.',
        date: '2024-10-29'
      },
      {
        id: '2',
        title: 'Lâmpada queimada',
        description: 'Lâmpada de poste apagada na Praça Central.',
        date: '2024-10-28'
      },
    ]);
  });
});
