import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { PROCESS_STEPS } from '@/data/process';

export function HowWeWorkSection() {
  return (
    <section id="metodologia" className="py-24 bg-[#080C14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Como Trabalhamos"
          title="Metodologia transparente do diagnóstico à entrega"
          highlightedWord="transparente"
          description="Um processo estruturado em quatro etapas bem definidas, assegurando previsibilidade técnica, respeito aos prazos e evolução consistente."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((stepItem) => (
            <Card
              key={stepItem.step}
              className="flex flex-col justify-between p-6 sm:p-7 bg-[#0A0F1A] border-white/10 hover:border-[#09CCA2]/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#09CCA2]/80 tracking-wider">
                    {stepItem.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#09CCA2]/40" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Entrega principal:
                </span>
                <span className="text-xs text-slate-300 font-medium leading-snug">
                  {stepItem.deliverable}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
