import techflowMarketplaceCover from '../assets/techflow-marketplace-cover.png'
import rareCandyHero from '../../demo-tcg/assets/hero-perfect-order.jpg'
import { siteConfig } from './site'

export const portfolioExperience = {
  navigation: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
    { label: 'GitHub', href: siteConfig.github, external: true },
  ],
  hero: {
    eyebrow: 'Digital Product Portfolio',
    title: 'Sites premium para empresas que nao podem parecer amadoras.',
    description:
      'Design cinematografico, front-end preciso e experiencia visual pensada para vender percepcao, confianca e autoridade desde o primeiro segundo.',
    topbarCta: {
      label: 'Contato',
      href: siteConfig.whatsappHref,
      external: true,
    },
    primaryCta: {
      label: 'Solicitar projeto',
      href: siteConfig.whatsappHref,
      external: true,
    },
    secondaryCta: {
      label: 'Ver projetos',
      href: '#projetos',
    },
    ambientNotes: [
      'Direcao visual autoral',
      'Motion suave e intencional',
      'Acabamento com cara de produto',
    ],
    featured: {
      label: 'Projeto em destaque',
      title: 'Nexus Solucoes',
      summary: 'Presenca corporativa pronta para abrir conversa e gerar confianca real.',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/hero-business-Pzesjy6w8MdWz7CccwPaop.webp',
      imageAlt: 'Preview do projeto Nexus Solucoes em um frame de navegador.',
      metrics: [
        { label: 'Estrutura', value: '9 paginas' },
        { label: 'Contato', value: 'WhatsApp + form' },
        { label: 'Entrega', value: 'Pronto para venda' },
      ],
    },
  },
  primaryProjects: [
    {
      id: 'nexus-solucoes',
      eyebrow: 'Projeto real publicado',
      title: 'Nexus Solucoes',
      summary: 'Site B2B com presenca madura e foco direto em contato.',
      href: 'https://businesstmp-3fnzknkt.manus.space',
      buttonLabel: 'Abrir site',
      external: true,
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/hero-business-Pzesjy6w8MdWz7CccwPaop.webp',
      imageAlt: 'Tela inicial do projeto Nexus Solucoes.',
      accent: '#ff7d45',
      glow: 'rgba(255, 125, 69, 0.28)',
      surface:
        'linear-gradient(145deg, rgba(16, 22, 42, 0.98), rgba(10, 14, 26, 0.94) 52%, rgba(28, 37, 70, 0.96))',
    },
    {
      id: 'nexo-movimento',
      eyebrow: 'Projeto real publicado',
      title: 'Nexo Movimento Club',
      summary: 'Landing fitness premium para vender planos e matriculas.',
      href: 'https://nexomovclub-ttbrfxcx.manus.space',
      buttonLabel: 'Abrir site',
      external: true,
      image:
        'https://files.manuscdn.com/webdev_screenshots/2026/04/06/GKd7wjDCjHxJvhzQwdT5o2.png?x-oss-process=image/resize,w_1200/crop,h_630,x_0,y_0',
      imageAlt: 'Preview do projeto Nexo Movimento Club com identidade fitness escura.',
      accent: '#efad00',
      glow: 'rgba(239, 173, 0, 0.26)',
      surface:
        'linear-gradient(145deg, rgba(20, 16, 8, 0.98), rgba(8, 8, 10, 0.95) 46%, rgba(36, 22, 8, 0.96))',
    },
    {
      id: 'techflow-marketplace',
      eyebrow: 'Projeto real publicado',
      title: 'TechFlow Marketplace',
      summary: 'Marketplace visual com descoberta clara e compra fluida.',
      href: 'https://techflow-marketplace.manus.space',
      buttonLabel: 'Abrir site',
      external: true,
      image: techflowMarketplaceCover,
      imageAlt: 'Preview do projeto TechFlow Marketplace.',
      accent: '#8f58ff',
      glow: 'rgba(143, 88, 255, 0.28)',
      surface:
        'linear-gradient(145deg, rgba(27, 16, 48, 0.98), rgba(11, 12, 28, 0.95) 48%, rgba(44, 14, 52, 0.96))',
    },
    {
      id: 'rare-candy',
      eyebrow: 'Projeto real publicado',
      title: 'Rare Candy Paradise',
      summary: 'Loja nichada com atmosfera forte e vitrine colecionavel.',
      href: './demo-tcg/',
      buttonLabel: 'Abrir site',
      image: rareCandyHero,
      imageAlt: 'Preview do projeto Rare Candy Paradise.',
      accent: '#5b7cff',
      glow: 'rgba(91, 124, 255, 0.28)',
      surface:
        'linear-gradient(145deg, rgba(12, 21, 48, 0.98), rgba(7, 11, 24, 0.95) 48%, rgba(24, 38, 78, 0.96))',
    },
  ],
  secondaryProjects: [
    {
      id: 'casa-fuego',
      eyebrow: 'Site de marca',
      title: 'Casa Fuego',
      segment: 'Restaurante autoral',
      summary: 'Site para restaurante autoral com foco em reserva e percepcao premium.',
      href: '#contato',
      previewEyebrow: 'Degustacao contemporanea',
      previewTitle: 'Experiencia que comeca antes da primeira mesa.',
      tones: ['#ff9a57', '#30170d', '#6f3e1f'],
    },
    {
      id: 'clinica-aurora',
      eyebrow: 'Site institucional',
      title: 'Clinica Aurora',
      segment: 'Clinica boutique',
      summary: 'Site para clinica com foco em confianca, agenda e postura premium.',
      href: '#contato',
      previewEyebrow: 'Atendimento particular',
      previewTitle: 'Confianca imediata para marcas de saude mais exigentes.',
      tones: ['#6fc7ff', '#0f2236', '#16465a'],
    },
    {
      id: 'atlas-flow',
      eyebrow: 'Site B2B',
      title: 'Atlas Flow',
      segment: 'SaaS comercial',
      summary: 'Landing B2B para vender valor com clareza e linguagem de produto.',
      href: '#contato',
      previewEyebrow: 'Software com posicao clara',
      previewTitle: 'Narrativa de produto pronta para demo e venda.',
      tones: ['#9c7dff', '#18142f', '#1f4ae5'],
    },
  ],
  finalCta: {
    eyebrow: 'Proximo projeto',
    title: 'Se o seu site precisa parecer outro nivel, vamos construir isso direito.',
    description:
      'Sem formula pronta. Direcao visual, arquitetura front-end e acabamento com cara de produto real.',
    primaryAction: {
      label: 'Solicitar projeto',
      href: siteConfig.whatsappHref,
      external: true,
    },
    secondaryAction: {
      label: 'Enviar briefing',
      href: 'mailto:augusto.santana009@gmail.com?subject=Briefing%20de%20site%20premium',
      external: true,
    },
    meta: [siteConfig.location, siteConfig.responseTime, siteConfig.githubLabel],
  },
}
