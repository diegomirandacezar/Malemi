import { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Sobre a MALEMI', href: '#sobre' },
  { label: 'Como Trabalhamos', href: '#metodologia' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' }
];

export const FOOTER_LINKS = {
  solutions: [
    { label: 'MALEMI Sites', href: '#solucoes' },
    { label: 'MALEMI BI', href: '#solucoes' },
    { label: 'MALEMI Automação & IA', href: '#solucoes' }
  ],
  company: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' }
  ],
  legal: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Privacidade & Dados', href: '#' }
  ]
};
