import React from 'react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { TechNetworkCanvas } from '@/components/visual/TechNetworkCanvas';
import { IconArrowRight, IconSparkles, IconBarChart, IconCpu, IconGlobe } from '@/components/icons';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#05070B]">
      {/* Dynamic Digital Architecture Background Canvas */}
      <TechNetworkCanvas />

      {/* Subtle Radial Gradient Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#1D4ED8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#09CCA2]/[0.08] blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="mb-6 animate-in fade-in duration-500">
            <Badge variant="emerald" icon={<IconSparkles size={14} className="text-[#09CCA2]" />}>
              Tecnologia &bull; Dados &bull; Automação &bull; IA
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            A tecnologia certa, te levará a{' '}
            <span className="text-gradient-accent">novas oportunidades!</span>
          </h1>

          {/* Subtitle / Company Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
            A <strong className="text-white font-medium">MALEMI</strong> transforma tecnologia, dados e automação em soluções sob medida que ajudam empresas a evoluir com segurança, clareza e eficiência.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Button
              variant="primary"
              size="lg"
              href="#solucoes"
              className="w-full sm:w-auto"
              icon={<IconArrowRight size={18} />}
            >
              Conheça nossas soluções
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#contato"
              className="w-full sm:w-auto"
            >
              Fale com a MALEMI
            </Button>
          </div>

          {/* Digital Architecture Data Bar / Tech Highlights (No Stock Photos) */}
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5 hover:border-[#09CCA2]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#1D4ED8]/20 border border-[#1D4ED8]/40 flex items-center justify-center shrink-0 text-sky-400">
                <IconGlobe size={20} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">MALEMI Sites</h2>
                <p className="text-xs text-slate-400 mt-0.5">Plataformas e presença digital de alto impacto</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5 hover:border-[#09CCA2]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#09CCA2]/20 border border-[#09CCA2]/40 flex items-center justify-center shrink-0 text-[#09CCA2]">
                <IconBarChart size={20} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">MALEMI BI</h2>
                <p className="text-xs text-slate-400 mt-0.5">Indicadores visuais para decisões assertivas</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5 hover:border-[#09CCA2]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-300">
                <IconCpu size={20} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">Automação & IA</h2>
                <p className="text-xs text-slate-400 mt-0.5">Processos integrados e fluxos inteligentes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
