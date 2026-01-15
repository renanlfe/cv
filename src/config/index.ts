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
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Renan Ferreira",
    specialty: "Desenvolvedor Back End & Web Developer",
    summary: "Desenvolvedor Full Stack, com ênfase em Java e Kotlin.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Desenvolvedor Android Líder",
      startDate: "Mai 2018",
      endDate: "Set 2020",
      summary: [
        "Implementei técnicas avançadas de gerenciamento de memória e otimização de código, resultando em uma redução de 40% no tempo de carregamento do aplicativo e uma diminuição de 25% nas falhas. Isso melhorou significativamente a experiência do usuário e aumentou a retenção em 20%.",
        "Liderei uma equipe de desenvolvedores na construção e integração de novos recursos usando componentes Jetpack Android como LiveData e ViewModel. Isso nos permitiu construir aplicações escaláveis e sustentáveis, reduzindo a taxa de falhas em 20% e acelerando o tempo de entrega de novos recursos em 15%.",
        "Integrei o Google Pay para compras no aplicativo, resultando em um aumento de 35% na receita de transações móveis. Além disso, implementei o Firebase Analytics para obter insights sobre o comportamento do usuário, permitindo otimizações baseadas em dados e um aumento de 30% na retenção de usuários.",
      ],
    },
    {
      company: "Bankit",
      position: "Desenvolvedor Mobile",
      startDate: "Fev 2017",
      endDate: "Mai 2018",
      summary: [
        "Projetei e desenvolvi um aplicativo mobile usando Flutter, permitindo sua implantação tanto no Android quanto no iOS com uma única base de código. Isso reduziu o tempo de desenvolvimento em 50% e os custos de manutenção em 30%, facilitando uma experiência de usuário consistente em ambas as plataformas.",
        "Integrei autenticação biométrica e criptografia de dados, melhorando significativamente a segurança dos dados do usuário. Esta implementação resultou em um aumento de 40% na confiança do usuário e uma redução de 25% nas tentativas de acesso não autorizado.",
      ],
    },
    {
      company: "Driveer",
      position: "Desenvolvedor Frontend",
      startDate: "Jun 2015",
      endDate: "Out 2016",
      summary:
        "Desenvolvi e integrei um sistema de rastreamento de veículos em tempo real usando WebSockets, melhorando a precisão e atualização de dados no aplicativo. Esta funcionalidade aumentou a satisfação do usuário em 30% e reduziu as consultas ao atendimento ao cliente em 25%.",
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
