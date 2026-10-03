import React from 'react';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/data/navigation';
import { IconMail, IconPhone } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030407] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#09CCA2]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Column 1: Company Profile */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#09CCA2] to-[#1D4ED8] p-[1px]">
                <div className="w-full h-full bg-[#05070B] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-white">
                    M<span className="text-[#09CCA2]">.</span>
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-widest text-white">MALEMI</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transformando tecnologia, dados e inteligência artificial em soluções sob medida que ajudam empresas a evoluir com segurança e eficiência.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <IconMail size={15} className="text-[#09CCA2]" />
                <span>contato@malemi.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone size={15} className="text-[#09CCA2]" />
                <span>Atendimento Corporativo</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Soluções
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {FOOTER_LINKS.solutions.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#09CCA2] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#09CCA2] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quality & Standards */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Padrões Técnicos
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Desenvolvimento orientado a clean code, acessibilidade digital, máxima performance e proteção de dados.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#09CCA2] animate-pulse" />
              <span>Sistemas & Infraestrutura Ativos</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} MALEMI Soluções em Tecnologia & Dados. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Tecnologia + Dados + Automação + IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
