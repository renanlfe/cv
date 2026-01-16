import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Renan Ferreira — Desenvolvedor FullStack",
  author: "Renan Ferreira",
  description: "Desenvolvedor Full Stack, com ênfase em Java e Kotlin.",
  lang: "en",
  siteLogo: "/renan-small.jpg",
  navLinks: [
    { text: "Experiência", href: "#experience" },
    { text: "Projetos", href: "#projects" },
    { text: "Sobre", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/renanlfe " },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/renanlfe/" },
    { text: "Github", href: "https://github.com/renanlfe" },
    { text: "Youtube", href: "https://github.com/renanlfe" },
    { text: "Dribbble", href: "https://github.com/renanlfe" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    greeting: "Oi! Eu sou o",
    name: "Renan Ferreira :)",
    tagline: "A tecnologia me fascina como ferramenta para a resolução de problemas.",
    profilePhoto: "/renan-big.jpg",
    email: "example@email.com",
  },
  experience: [
    {
      company: "ACIM Sistemas",
      position: "Analista de Suporte Técnico Nível II",
      startDate: "Dez 2018",
      endDate: "Presente",
      summary: [
        "Suporte técnico remoto a clientes do setor de distribuição, com foco na resolução de problemas e garantia da estabilidade do sistema ERP.",
        "Configuração completa do ambiente do sistema, incluindo instalação, parametrização e ajustes operacionais.",
        "Treinamento de usuários em diversos módulos do sistema, promovendo melhor aproveitamento da ferramenta.",
        "Abertura e acompanhamento de chamados técnicos, realizando requisições junto a outras equipes para garantir a resolução eficiente das demandas.",
        "Atuação orientada à excelência no atendimento e à melhoria contínua da experiência do cliente.",
      ],
    },
    {
      company: "Proezus",
      position: "Cofounder & Gestor de Mídia",
      startDate: "Ago 2016",
      endDate: "Dez 2021",
      summary: [
        "Gerenciamento de campanhas de tráfego pago no Meta Ads e Google Ads, com foco na geração de conversões e aumento de vendas para e-commerces e negócios locais.",
        "Criação, segmentação e otimização de anúncios alinhados às metas estratégicas de cada cliente.",
        "Acompanhamento de métricas, análise de desempenho e aplicação de melhorias para maximizar o ROI.",
        "Desenvolvimento de sites institucionais e landing pages otimizadas para conversão, com foco na experiência do usuário e performance.",
        "Gestão de redes sociais, com planejamento de conteúdo, engajamento do público e fortalecimento da presença digital.",
        "Atuação orientada por dados, com foco em resultados mensuráveis e crescimento sustentável.",
      ],
    },
    {
      company: "Vitóriasoft",
      position: "Analista de Suporte Técnico Nível III",
      startDate: "Jan 2013",
      endDate: "Ago 2016",
      summary: [
        "Atendimento a clientes com demandas complexas, via acesso remoto, garantindo agilidade e precisão na resolução de problemas.",
        "Correção de falhas e execução de ajustes diretamente no banco de dados (consultas e otimizações).",
        "Treinamentos personalizados sobre módulos pouco utilizados ou desconhecidos, ajudando na melhor usabilidade da ferramenta.",
        "Suporte estratégico ao cliente, atuando na prevenção de erros recorrentes e melhoria contínua dos processos.",
        "Interface com times de desenvolvimento para reportes de bugs e sugestões de melhorias no sistema.",
      ],
    },
    {
      company: "Via Brasil Imobiliária",
      position: "Corretor Imobiliário",
      startDate: "Set 2012",
      endDate: "Jan 2013",
      summary:
        "Responsável pelo atendimento especializado a clientes interessados em locações, oferecendo suporte personalizado e soluções adequadas às suas necessidades. Atuação também na atualização de conteúdo do site da empresa, contribuindo para a comunicação eficaz dos serviços e ofertas disponíveis.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "Um aplicativo de streaming de música que emula os principais recursos do Spotify.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "Uma plataforma de e-commerce que replica os principais recursos do Shopify.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "Uma rede social que replica os recursos do Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      A tecnologia me fascina como ferramenta para a resolução de problemas. Acredito que a organização, paciência e persistência são essenciais para alcançar resultados eficientes.
      Sou um profissional com mais de 10 anos na área de tecnologia, atuando com suporte a sistemas ERP em distribuidoras e no setor farmacêutico. Experiência em correção de falhas, configuração de ambientes, treinamento de usuários e otimização de processos em banco de dados. Conhecimentos em desenvolvimento de sites com HTML, CSS, JavaScript e WordPress.
 
      Formado em Análise e Desenvolvimento de Sistemas e focado em ampliar minhas competências como Desenvolvedor Full Stack, com ênfase em Java e Kotlin. Busco aplicar minha experiência técnica e visão analítica no desenvolvimento de soluções eficientes, contribuindo com projetos e evoluindo na área.

    `,
    image: "/renan-big.jpg",
  },
};

// #5755ff
