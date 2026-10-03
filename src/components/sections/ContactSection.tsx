'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { IconMail, IconCheck, IconArrowRight } from '@/components/icons';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    solution: 'sites',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      solution: 'sites',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-24 bg-[#080C14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Fale com a MALEMI"
          title="Pronto para transformar sua tecnologia e dados?"
          highlightedWord="transformar"
          description="Entre em contato com nossa equipe técnica para avaliar seu cenário e desenhar uma proposta alinhada à sua realidade."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-[#0A0F1A] border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">
                Vamos conversar
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Nosso atendimento é direto e voltado a entender seu desafio de negócio. Sem intermediários ou discursos prontos.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#09CCA2]/10 border border-[#09CCA2]/20 text-[#09CCA2] flex items-center justify-center shrink-0">
                    <IconMail size={16} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      E-mail Direto
                    </span>
                    <a
                      href="mailto:contato@malemi.com.br"
                      className="text-sm text-slate-200 hover:text-[#09CCA2] transition-colors"
                    >
                      contato@malemi.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200 block mb-1">Privacidade Garantida:</strong>
                Seus dados serão utilizados exclusivamente para responder ao seu contato e estruturar seu diagnóstico.
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-[#0F1728] border-white/10">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#09CCA2]/20 border border-[#09CCA2]/50 text-[#09CCA2] flex items-center justify-center mx-auto mb-4">
                    <IconCheck size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Mensagem Enviada com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Agradecemos seu contato. Nossa equipe técnica analisará sua solicitação e retornará em breve.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleReset}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') handleReset();
                      }}
                    >
                      Enviar outra mensagem
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider"
                      >
                        Nome Completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1A] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#09CCA2] focus:ring-1 focus:ring-[#09CCA2] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider"
                      >
                        E-mail Corporativo *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@empresa.com.br"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1A] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#09CCA2] focus:ring-1 focus:ring-[#09CCA2] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider"
                      >
                        Nome da Empresa
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Sua empresa ou projeto"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1A] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#09CCA2] focus:ring-1 focus:ring-[#09CCA2] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="solution"
                        className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider"
                      >
                        Solução de Interesse *
                      </label>
                      <select
                        id="solution"
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#09CCA2] focus:ring-1 focus:ring-[#09CCA2] transition-colors"
                      >
                        <option value="sites">MALEMI Sites (Web & Plataformas)</option>
                        <option value="bi">MALEMI BI (Dados & Dashboards)</option>
                        <option value="automacao-ia">MALEMI Automação & IA</option>
                        <option value="multiplas">Múltiplas Soluções / Diagnóstico Geral</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider"
                    >
                      Como podemos ajudar? *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva brevemente o desafio ou objetivo do seu projeto..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0F1A] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#09CCA2] focus:ring-1 focus:ring-[#09CCA2] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={<IconArrowRight size={18} />}
                    >
                      {isSubmitting ? 'Enviando...' : 'Solicitar Contato Especializado'}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
