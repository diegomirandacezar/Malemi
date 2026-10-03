import { ProcessStep } from '@/types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico & Imersão',
    description: 'Analisamos a realidade operacional da sua empresa, identificando gargalos, estrutura de dados e oportunidades claras onde a tecnologia traz maior retorno.',
    deliverable: 'Mapeamento de desafios e direcionamento inicial'
  },
  {
    step: '02',
    title: 'Estratégia & Arquitetura',
    description: 'Desenhamos a solução sob medida com a tecnologia e ferramentas certas para o seu estágio, sem excessos de complexidade ou custos desnecessários.',
    deliverable: 'Plano técnico objetivo e cronograma alinhado'
  },
  {
    step: '03',
    title: 'Desenvolvimento Ágil',
    description: 'Implementamos a solução com padrões rigorosos de engenharia, foco em velocidade, segurança da informação e validações intermediárias.',
    deliverable: 'Construção iterativa com testes e refinamento'
  },
  {
    step: '04',
    title: 'Implantação & Acompanhamento',
    description: 'Realizamos a entrega assistida, parametrização dos fluxos, capacitação da sua equipe e fornecemos base sólida para a evolução contínua.',
    deliverable: 'Solução operando em produção com suporte'
  }
];
