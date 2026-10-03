'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { SOLUTIONS } from '@/data/solutions';
import { SolutionItem, SolutionTier } from '@/types';
import {
  IconGlobe,
  IconBarChart,
  IconCpu,
  IconCheck,
  IconArrowRight
} from '@/components/icons';

export function SolutionsSection() {
  const [activeSolutionId, setActiveSolutionId] = useState<SolutionItem['id']>('sites');
  const [selectedTier, setSelectedTier] = useState<SolutionTier>('Profissional');

  const activeSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];

  const getIcon = (iconName: SolutionItem['icon']) => {
    switch (iconName) {
      case 'globe':
        return <IconGlobe size={24} />;
      case 'bar-chart':
        return <IconBarChart size={24} />;
      case 'cpu':
        return <IconCpu size={24} />;
      default:
        return <IconGlobe size={24} />;
    }
  };

  const handleTierKeyDown = (tierId: SolutionTier, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedTier(tierId);
    }
  };

  return (
    <section id="solucoes" className="py-24 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Nossos Produtos"
          title="Soluções estruturadas para impulsionar sua empresa"
          highlightedWord="estruturadas"
          description="Conheça os três pilares de atuação da MALEMI: criação de plataformas digitais, inteligência em dados e automação com inteligência artificial."
        />

        {/* Solution Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14" role="tablist">
          {SOLUTIONS.map((solution) => {
            const isActive = solution.id === activeSolutionId;
            return (
              <button
                key={solution.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveSolutionId(solution.id);
                  setSelectedTier('Profissional');
                }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0F1728] border-[#09CCA2] text-white shadow-[0_0_20px_rgba(9,204,162,0.15)]'
                    : 'bg-[#0A0F1A]/80 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={isActive ? 'text-[#09CCA2]' : 'text-slate-400'}>
                  {getIcon(solution.icon)}
                </span>
                <span>{solution.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Solution Overview Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 border-white/10 bg-gradient-to-b from-[#0F1728] to-[#0A0F1A]">
              <div className="w-12 h-12 rounded-xl bg-[#09CCA2]/15 border border-[#09CCA2]/30 text-[#09CCA2] flex items-center justify-center mb-5">
                {getIcon(activeSolution.icon)}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {activeSolution.name}
              </h3>
              <p className="text-sm font-medium text-[#09CCA2] uppercase tracking-wider">
                {activeSolution.tagline}
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                {activeSolution.description}
              </p>

              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10">
                <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-200 mb-1">
                  Problema que resolve
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {activeSolution.problemSolved}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-200 mb-3">
                  Principais Recursos
                </h4>
                <ul className="space-y-2.5">
                  {activeSolution.highlightFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="text-[#09CCA2] mt-0.5 shrink-0">
                        <IconCheck size={16} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="primary"
                  size="md"
                  href={`#contato?solucao=${activeSolution.id}`}
                  className="w-full"
                  icon={<IconArrowRight size={16} />}
                >
                  Conheça a solução
                </Button>
              </div>
            </Card>
          </div>

          {/* Solution Plans Tier Display */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Planos Disponíveis</h4>
                <p className="text-xs text-slate-400">
                  Estrutura transparente adaptada ao momento da sua empresa
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {activeSolution.name}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeSolution.plans.map((plan) => {
                const isSelected = selectedTier === plan.id;
                return (
                  <div
                    key={plan.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedTier(plan.id)}
                    onKeyDown={(e) => handleTierKeyDown(plan.id, e)}
                    className={`rounded-xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between border focus:outline-none focus:ring-2 focus:ring-[#09CCA2] ${
                      isSelected
                        ? 'bg-[#0F1728] border-[#09CCA2] shadow-[0_0_25px_rgba(9,204,162,0.15)] ring-1 ring-[#09CCA2]'
                        : 'bg-[#0A0F1A]/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {plan.id}
                        </span>
                        {plan.badge && (
                          <Badge variant="emerald" className="text-[10px] py-0.5 px-2">
                            {plan.badge}
                          </Badge>
                        )}
                      </div>
                      <h5 className="text-xl font-bold text-white mb-2">{plan.name}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        {plan.shortDescription}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-white/10">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-[#09CCA2] mt-0.5 shrink-0">
                              <IconCheck size={14} />
                            </span>
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10">
                      <Button
                        variant={isSelected ? 'primary' : 'secondary'}
                        size="sm"
                        href="#contato"
                        className="w-full text-xs"
                      >
                        Solicitar Proposta
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
