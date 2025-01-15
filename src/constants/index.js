import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  mysql,
  linux,
  onecommunity,
  ilios,
  freelance,
  threejs,
  github,
  linkedin,
  phone,
  gmail,
  elainerodrigues,
  connectree,
  carnevalli,
  nextjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Frontend",
    icon: web,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "SQL",
    icon: mobile,
  },
  {
    title: "ORM",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next js",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Ilios Sistemas",
    company_name: "Desenvolvedora de software",
    icon: ilios,
    iconBg: "#E6DEDD",
    date: "Setembro 2024 - Presente",
    points: [
      "Desenvolvo funcionalidades no backend do sistema de e-commerce Datlética, utilizando .NET, EF Core e SQL Server",
      "Otimizo diversos processos críticos, reduzindo tempos de resposta e buscando sempre melhorar a experiência do usuário final.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Self-employed",
    icon: freelance,
    iconBg: "#383E56",
    date: "Abril 2024 - Setembro 2025",
    points: [
      "Projetei e desenvolvi websites personalizados utilizando Next.js e Tailwind CSS no frontend, integrados a sistemas backend com Node.js, MySQL e Sequelize.",
      "Gerenciei todas as etapas do ciclo de vida de desenvolvimento de software, incluindo levantamento de requisitos, planejamento, desenvolvimento, testes até a entrega final.",
    ],
  },
  {
    title: "Desenvolvedora Full-stack voluntária",
    company_name: "One Community",
    icon: onecommunity,
    iconBg: "#E6DEDD",
    date: "Maio 2024 - Julho 2024",
    points: [
      "Implementei melhorias na experiência de usuário e usabilidade da aplicação HighestGoodNetworkApp utilizando tecnologias MERN (MongoDB, Express.js, React.js, Node.js) com voluntários de diversas partes do mundo.",
      "Realizei revisões de código detalhadas e corrigi bugs, garantindo a estabilidade e a qualidade do software.",
    ],
  },
];

const projects = [
  {
    name: "Studio Carnevalli",
    description:
      "Site dedicado à encomenda e compra de mobiliários exclusivos criados por Gabriela Carnevalli.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carnevalli,
    link: "https://studiocarnevalli.com.br",
  },
  {
    name: "Elaine Advogada",
    description:
      "Site que busca facilitar o contato direto com a advogada Elaine Rodrigues, seus serviços e novidades.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: elainerodrigues,
    link: "https://elainerodriguesadv.com.br/",
  },
  {
    name: "ConnecTree",
    description:
      "Site que oferece consultorias especializadas focadas em auxiliar organizações a oferecer serviços para as Forças Armadas.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: connectree,
    link: "https://connectree.com.br/",
  },
];

const contact = [
  {
    name: "Email",
    link: "nathaliacarnevalli004@gmail.com",
    icon: gmail,
  },
  {
    name: "Telefone",
    link: "+55 (44) 99928-3553",
    icon: phone,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nathaliacarnevalli/",
    icon: linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/nathcarnevalli",
    icon: github,
  },
];

export { services, technologies, experiences, projects, contact };
