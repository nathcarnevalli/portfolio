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
  mongodb,
  git,
  figma,
  mysql,
  linux,
  onecommunity,
  freelance,
  threejs,
  github,
  linkedin,
  phone,
  gmail,
  elainerodrigues,
  carnevalli,
  nextjs,
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
    title: "SQL e NoSQL",
    icon: mobile,
  },
  {
    title: "Web Design",
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
    name: "figma",
    icon: figma,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Engenheira de software freelancer",
    company_name: "Self-employed",
    icon: freelance,
    iconBg: "#383E56",
    date: "Abril 2024 - Presente",
    points: [
      "Desenvolvo websites com Next.js e Tailwind no frontend, e Node.js, MySQL e ORM Sequelize no backend.",
      "Gerencio todas as etapas do ciclo de vida do desenvolvimento de software, garantindo que as necessidades do cliente sejam sempre atendidas.",
    ],
  },
  {
    title: "Desenvolvedora full-stack voluntária",
    company_name: "One Community",
    icon: onecommunity,
    iconBg: "#E6DEDD",
    date: "Maio 2024 - Julho 2024",
    points: [
      "Desenvolvi diferentes funcionalidades no aplicativo HighestGoodNetworkApp utilizando tecnologias MERN (MongoDB, Express.js, React.js, Node.js).",
      "Realizei revisões periódicas de código e auxiliei na resolução de inconsistências tanto no frontend quanto no backend.",
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
        name: "tailwind",
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
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: elainerodrigues,
    link: "https://elainerodriguesadv.com.br/",
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
