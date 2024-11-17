# App Denúncias Urbanas

Aplicação de **denúncias urbanas** desenvolvida em **React Native** com foco em permitir que os usuários relatem problemas urbanos diretamente de seus dispositivos móveis. Este projeto utiliza uma arquitetura simples com mocks de dados e permite expansão para integração com banco de dados ou APIs externas no futuro.

---

## Funcionalidades

- Exibição de uma lista de denúncias urbanas.
- Visualização detalhada de cada denúncia.
- Possibilidade de adicionar novas denúncias.
- Interface amigável e responsiva.
- Estrutura modular para facilitar a integração futura.

---

## Requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Um dispositivo ou emulador para testes (Android ou iOS)
- [Git](https://git-scm.com/) para clonar o repositório

---

## Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/SEU-USUARIO/app-denuncias-urbanas.git
   cd app-denuncias-urbanas
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor do Expo:
   ```bash
   npm start
   ```

---

## Estrutura do Projeto

A estrutura básica do projeto é:

```
app-denuncias-urbanas/
├── App.tsx
├── components/
│   ├── ReportCard.tsx
├── screens/
│   ├── HomeScreen.tsx
│   ├── ReportDetailsScreen.tsx
│   ├── AddReportScreen.tsx
├── services/
│   ├── reportService.ts
├── styles/
│   ├── globalStyles.ts
├── assets/
├── README.md
```

- `App.tsx`: Arquivo principal que inicializa o aplicativo.
- `components/`: Componentes reutilizáveis (ex.: `ReportCard`).
- `screens/`: Telas principais da aplicação.
- `services/`: Serviços para lógica de dados (mock).
- `styles/`: Estilos globais compartilhados.

---

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento Expo.
- `npm test`: Executa os testes unitários.