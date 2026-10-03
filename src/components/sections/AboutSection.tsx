import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { IconShieldCheck, IconTarget, IconLayers } from '@/components/icons';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[#080C14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Sobre a MALEMI"
          title="Tecnologia aplicada com foco no que realmente importa"
          highlightedWord="realmente importa"
          description="Acreditamos que a tecnologia mais sofisticada é aquela que simplifica o dia a dia e gera resultados mensuráveis para sua operação."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Statement Card */}
          <div className="lg:col-span-7">
            <Card className="h-full flex flex-col justify-between p-8 sm:p-10 border-white/10 bg-gradient-to-b from-[#0F1728] to-[#0A0F1A]">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded bg-[#09CCA2]/10 border border-[#09CCA2]/20 text-[#09CCA2] text-xs font-semibold tracking-wider uppercase">
                  Nossa Missão
                </div>
                <blockquote className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                  &ldquo;A MALEMI transforma tecnologia, dados e automação em soluções que ajudam empresas a evoluir.&rdquo;
                </blockquote>
                <p className="text-base text-slate-300 leading-relaxed">
                  Não acreditamos em tecnologia pela tecnologia. Nosso compromisso é identificar onde a engenharia de software, a organização de dados e a inteligência artificial podem desatar nós operacionais, acelerar atendimentos e fornecer clareza executiva.
                </p>
                <p className="text-base text-slate-300 leading-relaxed">
                  Trabalhamos de forma transparente, desenvolvendo soluções sustentáveis, seguras e prontas para crescer junto com os objetivos do seu negócio.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-[#09CCA2] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#09CCA2]" /> Engenharia Sob Medida
                </span>
                <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Decisão Baseada em Dados
                </span>
              </div>
            </Card>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-[#0A0F1A] border border-white/10 hover:border-[#09CCA2]/30 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#09CCA2]/15 border border-[#09CCA2]/30 text-[#09CCA2] flex items-center justify-center shrink-0">
                <IconTarget size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Objetividade Comercial</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Entregamos o que seu negócio realmente precisa hoje, estruturando uma base sólida que permite expansões futuras sem retrabalho.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0F1A] border border-white/10 hover:border-[#09CCA2]/30 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1D4ED8]/20 border border-[#1D4ED8]/40 text-sky-400 flex items-center justify-center shrink-0">
                <IconLayers size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Arquitetura Integrada</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Seus canais de atendimento, painéis de decisão e processos internos conversam harmonicamente em um ecossistema conectado.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0F1A] border border-white/10 hover:border-[#09CCA2]/30 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <IconShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Confiança & Segurança</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Padrões rigorosos de desenvolvimento com proteção aos dados sensíveis da sua organização e estabilidade de longo prazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
