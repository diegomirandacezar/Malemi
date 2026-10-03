import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05070B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MALEMI — Tecnologia, Dados, Automação & Inteligência Artificial',
  description:
    'A MALEMI transforma tecnologia, dados e automação em soluções sob medida que ajudam empresas a evoluir com segurança, clareza e eficiência.',
  keywords: [
    'MALEMI',
    'tecnologia para empresas',
    'business intelligence',
    'automação de processos',
    'inteligência artificial corporativa',
    'desenvolvimento de sites profissionais',
    'dashboards e dados',
    'IA para negócios'
  ],
  authors: [{ name: 'MALEMI' }],
  creator: 'MALEMI',
  publisher: 'MALEMI',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://malemi.com.br',
    siteName: 'MALEMI',
    title: 'MALEMI — Tecnologia, Dados, Automação & Inteligência Artificial',
    description:
      'Soluções em tecnologia, dados e automação pensadas sob medida para acelerar a evolução da sua empresa.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MALEMI — Tecnologia, Dados, Automação & Inteligência Artificial',
    description:
      'Soluções em tecnologia, dados e automação pensadas sob medida para acelerar a evolução da sua empresa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MALEMI',
    url: 'https://malemi.com.br',
    description:
      'A MALEMI transforma tecnologia, dados e automação em soluções que ajudam empresas a evoluir.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contato@malemi.com.br',
      contactType: 'customer support',
      availableLanguage: ['Portuguese'],
    },
    knowsAbout: [
      'Desenvolvimento Web e Plataformas',
      'Business Intelligence e Análise de Dados',
      'Automação de Processos',
      'Inteligência Artificial'
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <head>
        <title>MALEMI — Tecnologia, Dados, Automação &amp; Inteligência Artificial</title>
        <meta
          name="description"
          content="A MALEMI transforma tecnologia, dados e automação em soluções sob medida que ajudam empresas a evoluir com segurança, clareza e eficiência."
        />
        <meta property="og:title" content="MALEMI — Tecnologia, Dados, Automação &amp; Inteligência Artificial" />
        <meta
          property="og:description"
          content="Soluções em tecnologia, dados e automação pensadas sob medida para acelerar a evolução da sua empresa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://malemi.com.br" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-[#09CCA2]/20 selection:text-[#09CCA2]">
        {/* Skip to Main Content Link for Accessibility (WCAG 2.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#09CCA2] focus:text-[#05070B] focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
