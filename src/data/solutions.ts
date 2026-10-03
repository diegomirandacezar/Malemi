import { SolutionItem } from '@/types';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'sites',
    name: 'MALEMI Sites',
    tagline: 'Presença Digital de Alta Performance',
    description: 'Soluções para criação de sites institucionais e plataformas digitais com design refinado, arquitetura escalável e máxima velocidade de carregamento.',
    problemSolved: 'Supera a baixa taxa de conversão e a falta de autoridade de páginas lentas ou genéricas, criando canais digitais que transmitem credibilidade imediata.',
    icon: 'globe',
    highlightFeatures: [
      'Engenharia moderna e design responsivo fluido',
      'Otimização avançada para motores de busca (SEO)',
      'Arquitetura segura com tempo de resposta ultrarrápido',
      'Integração facilitada com canais de atendimento'
    ],
    plans: [
      {
        id: 'Essencial',
        name: 'Plano Essencial',
        shortDescription: 'Ideal para empresas que buscam estabelecer uma presença online profissional, segura e veloz.',
        features: [
          'Site institucional estruturado',
          'Design responsivo para desktop e mobile',
          'Otimização básica de SEO e metadados',
          'Botão direto para contato e WhatsApp',
          'Arquitetura estática veloz e segura'
        ]
      },
      {
        id: 'Profissional',
        name: 'Plano Profissional',
        badge: 'Mais Procurado',
        recommended: true,
        shortDescription: 'Para empresas que necessitam de mais páginas institucionais, captação ativa de leads e integrações.',
        features: [
          'Múltiplas páginas dedicadas e arquitetura ampliada',
          'Formulários de contato avançados com validação',
          'Integrações com ferramentas de mensageria e CRM',
          'Recursos adicionais e seções dinâmicas',
          'SEO técnico aprofundado e Core Web Vitals otimizados'
        ]
      },
      {
        id: 'Premium',
        name: 'Plano Premium',
        shortDescription: 'Para negócios que demandam plataformas digitais exclusivas, com sistemas sob medida e banco de dados.',
        features: [
          'Plataforma ou aplicação web totalmente personalizada',
          'Funcionalidades avançadas sob demanda',
          'Integrações completas com APIs de terceiros',
          'Estrutura com banco de dados dedicado',
          'Acompanhamento técnico prioritário'
        ]
      }
    ]
  },
  {
    id: 'bi',
    name: 'MALEMI BI',
    tagline: 'Inteligência Estratégica & Análise de Dados',
    description: 'Soluções de Business Intelligence projetadas para organizar dados dispersos e transformá-los em indicadores visuais claros para tomadas de decisão assertivas.',
    problemSolved: 'Elimina a dependência de planilhas desorganizadas e reuniões baseadas em achismos, fornecendo uma visão unificada e em tempo real da saúde da empresa.',
    icon: 'bar-chart',
    highlightFeatures: [
      'Centralização de métricas e indicadores-chave (KPIs)',
      'Painéis visuais intuitivos com filtros interativos',
      'Visão consolidada da operação e finanças',
      'Tomada de decisão ágil baseada em fatos'
    ],
    plans: [
      {
        id: 'Essencial',
        name: 'Plano Essencial',
        shortDescription: 'Indicado para visualizar os indicadores fundamentais do negócio de forma clara e objetiva.',
        features: [
          'Dashboard centralizado com indicadores principais',
          'Visualização executiva de métricas essenciais',
          'Interface limpa de fácil leitura',
          'Exportação de relatórios resumidos',
          'Configuração inicial guiada'
        ]
      },
      {
        id: 'Profissional',
        name: 'Plano Profissional',
        badge: 'Recomendado',
        recommended: true,
        shortDescription: 'Para empresas que operam com múltiplos setores e precisam de cruzamento de dados analítico.',
        features: [
          'Dashboards completos e dinâmicos',
          'Conexão com múltiplas fontes de dados',
          'Filtros analíticos por período, setor e categorias',
          'Análises de tendências e variações históricas',
          'Acessos segmentados por permissão'
        ]
      },
      {
        id: 'Premium',
        name: 'Plano Premium',
        shortDescription: 'Estrutura corporativa completa com ingestão de dados contínua e modelagem profunda.',
        features: [
          'Solução de BI corporativo sob medida',
          'Atualização automatizada em tempo real ou quase real',
          'Indicadores avançados e modelagem estatística',
          'Pipelines de dados resilientes',
          'Acompanhamento e evolução contínua dos painéis'
        ]
      }
    ]
  },
  {
    id: 'automacao-ia',
    name: 'MALEMI Automação & IA',
    tagline: 'Eficiência Operacional & Agentes Inteligentes',
    description: 'Automação inteligente de processos e conexões de sistemas que reduzem gargalos manuais, aceleram fluxos e potencializam a produtividade da sua equipe.',
    problemSolved: 'Libera seus colaboradores de tarefas manuais e repetitivas que geram erros e lentidão, conectando sistemas em fluxos contínuos e inteligentes.',
    icon: 'cpu',
    highlightFeatures: [
      'Eliminação de etapas manuais repetitivas',
      'Integração fluida entre ferramentas e APIs corporativas',
      'Redução drástica de falhas e tempo de resposta',
      'Adoção prática e mensurável de inteligência artificial'
    ],
    plans: [
      {
        id: 'Essencial',
        name: 'Plano Essencial',
        shortDescription: 'Automações pontuais para otimizar rotinas operacionais simples e recorrentes.',
        features: [
          'Mapeamento e automação de fluxos simples',
          'Disparos de alertas e notificações automáticas',
          'Redução de trabalho manual em tarefas-chave',
          'Padronização de rotinas diárias',
          'Documentação objetiva do fluxo'
        ]
      },
      {
        id: 'Profissional',
        name: 'Plano Profissional',
        badge: 'Alta Eficiência',
        recommended: true,
        shortDescription: 'Integração de ponta a ponta entre sistemas internos, plataformas de terceiros e APIs.',
        features: [
          'Automações integradas entre múltiplos softwares',
          'Conexão estável com APIs externas e webhooks',
          'Sincronização de dados entre CRM, ERP e mensageria',
          'Fluxos condicionais com tratamento de exceções',
          'Monitoramento de integridade dos processos'
        ]
      },
      {
        id: 'Premium',
        name: 'Plano Premium',
        shortDescription: 'Arquiteturas avançadas de automação com agentes de IA personalizados e orquestração de processos.',
        features: [
          'Soluções de automação altamente personalizadas',
          'Desenvolvimento e integração de agentes inteligentes (IA)',
          'Pipelines de processos operacionais completos',
          'Orquestração de tarefas complexas e regras de negócio',
          'Suporte técnico e refinamento contínuo dos modelos'
        ]
      }
    ]
  }
];
