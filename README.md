# MALEMI — Plataforma Web Institucional

> Plataforma web institucional da **MALEMI**, focada em soluções corporativas de tecnologia, inteligência artificial, análise de dados e automação de processos.

---

## 📌 Visão Geral

O site institucional da **MALEMI** foi desenvolvido sob uma arquitetura moderna, responsiva e de alta performance. Com estética *dark luxury* minimalista, o portal apresenta a identidade visual da empresa, seus pilares de atuação, catálogo de soluções e canais diretos de contato comercial.

---

## ✨ Principais Funcionalidades

- **Apresentação Institucional (Hero & Sobre)**: Proposta de valor clara, posicionamento de mercado e indicadores de credibilidade.
- **Portfólio de Soluções Especializadas**:
  - *Sites & Plataformas Digitais de Alto Padrão*: Portais institucionais, landing pages e plataformas escaláveis.
  - *Business Intelligence & Dashboards*: Centralização de métricas, inteligência analítica e tomada de decisão informada.
  - *Automação de Processos*: Integração de fluxos de trabalho e eliminação de tarefas manuais repetitivas.
  - *Inteligência Artificial Aplicada*: Agentes inteligentes, processamento de linguagem natural e automação cognitiva.
- **Metodologia de Atendimento (Como Trabalhamos)**: Visualização estruturada do ciclo de projeto (Diagnóstico, Estratégia, Desenvolvimento, Entrega & Suporte).
- **Diferenciais Competitivos**: Pilares de qualidade técnica, segurança e foco no resultado de negócios.
- **Canal de Contato e Conversão**: Formulário e links diretos para atendimento comercial.
- **Acessibilidade e SEO Integrados**:
  - Padrão WCAG 2.1 com link de navegação rápida (*Skip to Main Content*).
  - Metadados completos com OpenGraph e Twitter Cards.
  - Dados estruturados com Schema.org (`Organization`).
  - Geração dinâmica de `sitemap.xml` e `robots.txt`.

---

## 🛠️ Stack e Tecnologias

- **Framework Web**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Biblioteca de UI**: [React](https://react.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Tipografia**: [Geist Sans & Geist Mono](https://vercel.com/font)
- **Qualidade de Código**: [ESLint](https://eslint.org/) (Next.js Core Web Vitals)

---

## 📋 Pré-requisitos

- **Node.js**: versão 18.18.0 ou superior (recomendado 20.x LTS)
- **npm**: versão 9.x ou superior (ou gerenciador de pacotes equivalente como pnpm ou yarn)

---

## 🚀 Instalação e Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diegomirandacezar/Malemi.git
   cd Malemi
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Copie o arquivo de exemplo para seu ambiente local:
   ```bash
   cp .env.example .env.local
   ```
   *(Consulte o arquivo `.env.example` para referências de variáveis disponíveis)*.

---

## 💻 Executando em Desenvolvimento

Inicie o servidor de desenvolvimento local:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

---

## 🔍 Validação e Qualidade de Código

Para executar o linter e checar a conformidade de boas práticas:

```bash
npm run lint
```

Para verificar os tipos estáticos com TypeScript sem gerar bundle:

```bash
npx tsc --noEmit
```

---

## 📦 Build e Execução em Produção

1. **Compilar a aplicação para produção**:
   ```bash
   npm run build
   ```

2. **Iniciar o servidor de produção**:
   ```bash
   npm run start
   ```

---

## 📁 Estrutura do Projeto

```text
├── .doc/                  # Documentação de especificações e diretrizes
├── public/                # Ativos estáticos públicos (SVGs, ícones)
├── skiils/                # Diretrizes de arquitetura, UI e engenharia
├── src/
│   ├── app/               # Rotas e páginas do Next.js (App Router)
│   │   ├── favicon.ico    # Favicon oficial
│   │   ├── globals.css    # Estilos globais e tokens Tailwind
│   │   ├── layout.tsx     # Layout raiz, SEO, fontes e dados estruturados
│   │   ├── page.tsx       # Página principal da aplicação
│   │   ├── robots.ts      # Geração do robots.txt
│   │   └── sitemap.ts     # Geração dinâmica do sitemap.xml
│   ├── components/        # Componentes modulares
│   │   ├── common/        # Componentes compartilhados (Botões, Cards, etc.)
│   │   ├── icons/         # Componentes de ícones SVG otimizados
│   │   ├── layout/        # Cabeçalho (Header) e Rodapé (Footer)
│   │   ├── sections/      # Seções temáticas da landing page
│   │   └── visual/        # Elementos decorativos e de composição gráfica
│   ├── data/              # Dados estáticos (soluções, diferenciais, processos)
│   └── types/             # Definições de tipos TypeScript
├── .env.example           # Modelo de variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── eslint.config.mjs      # Configuração do ESLint
├── next.config.ts         # Configurações do Next.js
├── package.json           # Manifesto de dependências e scripts
├── postcss.config.mjs     # Configuração do PostCSS
├── README.md              # Documentação principal
└── tsconfig.json          # Configuração do compilador TypeScript
```

---

## 📄 Licença

Este projeto é de propriedade da **MALEMI**. Todos os direitos reservados.
