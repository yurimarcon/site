

import { useRuntimeConfig } from '#imports';

const baseURL = useRuntimeConfig().public.baseURL || "";

const headerMenu = [
    {
      title: "Início",
      href: "/",
    },
    // {
    //   title: "Sobre",
    //   href: "/about",
    // },
    {
        title: "Contato",
        href: "/contact",
    }
  ];
  
import coursesData from './courses.json';

const Courses = coursesData.map((course) => ({
  ...course,
  img: course.img.startsWith('http') ? course.img : baseURL + course.img,
}));

  const Testimonials = [
    {
      img: baseURL + "/images/courses/user.png",
      testimonial:
        "Instrutor bem objetivo nos conceitos.",
      name: "DANIELE",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
    {
      img: baseURL + "/images/courses/user.png",
      testimonial:
        "muito bom. Curso direto, rápido, sem enrolação com um ótimo suporte do professor.",
      name: "SILVANA",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
    {
      img: baseURL + "/images/courses/user.png",
      testimonial:
        "Parabéns Professor, bem explicativo! Estou aprendendo bastante.",
      name: "EDUARDO",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
    {
      img: baseURL + "/images/courses/user.png",
      testimonial:
        "Ótimo curso. Por enquanto estou gostando muito.",
      name: "LUCAS",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
    {
      img: baseURL + "/images/courses/user.png",
      testimonial:
        "O curso contempla muita coisa, desde a criação do projeto, componentes do vue, até a publicação do projeto no webserver. Indico 100%",
      name: "LEONARDO",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
    {
      img: baseURL + "/images/courses/user.png",
      testimonial: "Muito bom o curso, superou todas as expectativas. Amei o dinamismo, os plugins mostrados a forma como as aulas progridem, professor muito bom e paciente, explica os detalhes e deixa claro todas as funcionalidades.",
      name: "LUAN",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
    {
      img: baseURL + "/images/courses/user.png",
      testimonial: "Excelente professor. Conseguir entender até questões mais complexas com ele explicando. Além disso, manteve o conteúdo rico e bem didático durante o curso todo.",
      name: "WAGNER",
      socialicon: [
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
        { icon: "mdi mdi-star text-error" },
      ],
    },
  ];

  const socialMedias =[
    {
      title: "Compartilho alguns conteúdos no YouTube.",
      img: "https://cdn-icons-png.flaticon.com/512/1076/1076995.png",
      href: "https://www.youtube.com/channel/UCtGTyjWw15xNi_dcQHEiZuA"
    },
    {
      title: "Me acompanhe no Linkedin.",
      img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      href: "https://www.linkedin.com/in/yurimarcon/"
    },
    {
      title: "Confira meus projetos no Github.",
      img: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      href: "https://github.com/yurimarcon"
    },
    {
      title: "Pode entrar em contato pelo Telegram.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
      href: "https://web.telegram.org/k/#@yurimarcon"
    },
    {
      title: "yuri.erik.oliveira@gmail.com",
      img: "https://cdn.icon-icons.com/icons2/1381/PNG/512/gmail_93551.png",
      href: ""
    },
  ];
  
  export { baseURL, headerMenu, Courses, Testimonials, socialMedias};
  
