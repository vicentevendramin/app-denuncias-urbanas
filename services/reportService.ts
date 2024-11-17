export interface Report {
  id: string;
  title: string;
  description: string;
  date: string;
}

let reports: Report[] = [
  {
    id: '1',
    title: 'Buraco na Rua Principal',
    description: 'Um buraco grande está dificultando o trânsito na Rua Principal.',
    date: '2024-10-29',
  },
  {
    id: '2',
    title: 'Lâmpada queimada',
    description: 'Lâmpada de poste apagada na Praça Central.',
    date: '2024-10-28',
  },
];

// Simula a busca de todas as denúncias
export const getReports = async (): Promise<Report[]> => {
  return Promise.resolve(reports);
};

// Simula a adição de uma nova denúncia
export const addReport = async (report: Omit<Report, 'id'>): Promise<Report> => {
  const newReport = { ...report, id: (reports.length + 1).toString() };
  reports.push(newReport);
  return Promise.resolve(newReport);
};

// Simula a busca de uma denúncia pelo ID
export const getReportById = async (id: string): Promise<Report | undefined> => {
  return Promise.resolve(reports.find((report) => report.id === id));
};
