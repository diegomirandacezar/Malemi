import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { DIFFERENTIALS } from '@/data/differentials';
import {
  IconCodeBracket,
  IconTarget,
  IconLayers,
  IconShieldCheck
} from '@/components/icons';

export function DifferentialsSection() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'code-bracket':
        return <IconCodeBracket size={22} />;
      case 'target':
        return <IconTarget size={22} />;
      case 'layers':
        return <IconLayers size={22} />;
      case 'shield-check':
        return <IconShieldCheck size={22} />;
      default:
        return <IconShieldCheck size={22} />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#05070B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Diferenciais MALEMI"
          title="Por que escolher a MALEMI para o seu projeto?"
          highlightedWord="MALEMI"
          description="Nossa abordagem combina rigor técnico com pragmatismo de negócios para que cada entrega gere valor real e duradouro."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {DIFFERENTIALS.map((diff) => (
            <Card
              key={diff.title}
              className="p-8 bg-gradient-to-br from-[#0F1728] to-[#0A0F1A] border-white/10 hover:border-[#09CCA2]/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#09CCA2]/10 border border-[#09CCA2]/25 text-[#09CCA2] flex items-center justify-center mb-5">
                {getIcon(diff.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                {diff.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {diff.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
