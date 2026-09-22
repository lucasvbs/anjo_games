import { ReactNode } from 'react';

export const CONFIG = {
  whatsapp: '', // Honest unavailable state
  email: '',
  social: {
    instagram: 'https://instagram.com/anjogames',
    linkedin: 'https://linkedin.com/company/anjogames'
  }
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  isLogo?: boolean;
  documentUrl?: string; // For transparency
};

export const PROJECTS: Project[] = [
  {
    id: 'geek-day',
    title: 'Geek Day Festival',
    description: 'Um dos maiores festivais de cultura geek e e-sports, promovendo entretenimento, palestras, competições e integração social de forma acessível.',
    image: '/images/logo-geek-day.jpeg',
    tags: ['Festival', 'Cultura', 'E-sport'],
    isLogo: true,
  },
  {
    id: 'cerrado-cup',
    title: 'Cerrado Cup',
    description: 'Competição que fomenta o cenário de e-sports na região, revelando talentos e profissionalizando equipes locais com infraestrutura de ponta.',
    image: '/images/logo-cerrado-cup.jpeg',
    tags: ['Competição', 'Oportunidade', 'Regional'],
    isLogo: true,
    documentUrl: '/images/transparencia-cerrado-cup.jpeg'
  },
  {
    id: 'renova-tech',
    title: 'Renova Tech',
    description: 'Projeto social voltado à inclusão digital e capacitação tecnológica para jovens em situação de vulnerabilidade, utilizando os games como porta de entrada.',
    image: '/images/logo-renovatech.jpeg',
    tags: ['Inclusão', 'Capacitação', 'Social'],
    isLogo: true,
    documentUrl: '/images/Transparencia_renovatech_1789947615560.jpg'
  },
  {
    id: 'next-level',
    title: 'Festival Next Level',
    description: 'Evento de celebração da cultura gamer com foco em educação e novas profissões no mercado de jogos digitais e tecnologia.',
    image: '/images/logo-next-level.jpeg',
    tags: ['Educação', 'Carreira', 'Games'],
    isLogo: true,
    documentUrl: '/images/transparencia-next-level.jpeg',
  },
  {
    id: 'missao-inclusiva',
    title: 'Missão Inclusiva',
    description: 'Iniciativa dedicada a democratizar o acesso aos e-sports para pessoas com deficiência, adaptando controles e promovendo torneios inclusivos.',
    image: '/images/logo-missao-inclusiva.jpeg',
    tags: ['Acessibilidade', 'Inclusão', 'E-sport'],
    isLogo: true,
    documentUrl: '/images/transparencia-missao-inclusiva.jpeg'
  },
  {
    id: 'capital-game-show',
    title: 'Capital Game Show 2026',
    description: 'Apoio institucional ao grande evento que colocará a capital no mapa global dos e-sports, com infraestrutura, campeonatos internacionais e fomento ao turismo e tecnologia.',
    image: '/images/logo-capital-game-show.jpeg',
    tags: ['Apoio', 'Mega Evento', 'Internacional'],
    isLogo: true,
  }
];

export const FAQS = [
  {
    question: 'A ANJOGAMES é uma organização registrada de verdade?',
    answer: 'Sim, somos uma associação civil sem fins lucrativos registrada desde 10 de junho de 2014, com estatuto público e sede em Taguatinga/DF.'
  },
  {
    question: 'Minha doação ou patrocínio é dedutível de imposto?',
    answer: 'Esta informação depende do enquadramento fiscal vigente e da modalidade de apoio. Entre em contato conosco para avaliarmos seu caso específico.'
  },
  {
    question: 'Preciso ser gamer pra ser voluntário?',
    answer: 'Não! Buscamos perfis diversos: desde produtores de eventos e especialistas em tecnologia até profissionais de comunicação, logística e assistência social. Se você acredita no impacto, tem espaço aqui.'
  },
  {
    question: 'Como sei que o dinheiro chegou no projeto certo?',
    answer: 'A prestação de contas é anual e pública, seguindo as normas contábeis rigorosas de nosso estatuto (Art. 29). Não distribuímos excedentes: todo recurso volta obrigatoriamente para o objeto social.'
  },
  {
    question: 'Quais projetos meu apoio financia hoje?',
    answer: 'Seu apoio pode ser direcionado para o Geek Day Festival, Cerrado Cup, Renova Tech, Festival Next Level, Missão Inclusiva ou para estruturar nosso apoio ao Capital Game Show 2026.'
  },
  {
    question: 'Como funciona o patrocínio pra empresa?',
    answer: 'Temos pacotes de cotas de patrocínio com diferentes níveis de contrapartida de exposição de marca, sempre formalizados via termo de parceria/convênio. Fale no WhatsApp para receber o mídia kit atualizado.'
  },
  {
    question: 'Tem algum compromisso mínimo de tempo pro voluntariado?',
    answer: 'O compromisso de tempo varia de acordo com o projeto e a sua disponibilidade. Alinhamos tudo durante a entrevista inicial para garantir que a experiência seja positiva e sustentável para você.'
  },
  {
    question: 'Como falo com vocês antes de decidir?',
    answer: 'Você pode falar com nossa equipe direto pelo WhatsApp, sem nenhum compromisso. Estamos à disposição para tirar dúvidas e apresentar nossos relatórios.'
  }
];
