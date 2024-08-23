
const baseURL = "/site"
// const baseURL = ""

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
        title: "Cursos",
        href: "/courses",
    }
  ];
  
  const Courses =[
    {
        img: baseURL + "/images/courses/vue-vuetify.png",
        title: "Desenvolvedor front-end  Vue 3 e Vuetify 3 - Com 3 Projetos",
        href: "https://bit.ly/CursoVue3-Last-june2024",
        author: "Yuri Marcon",
        rate: 4.9,
        duration: "7 hours",
        lessons: "59",
        price: "R$189,90",
        promotePrice: "R$24,90",
        cupom: "AGOSTO2024"
    },
    {
      img: baseURL + "/images/courses/git-github.png",
      title: "Git e Github para Desenvolvedores - Básico ao Avançado",
      href: "https://bit.ly/CursoGit-2024-last-june",
      author: "Yuri Marcon",
      rate: 4.9,
      duration: "4,5 hours",
      lessons: "77",
      price: "R$189,90",
      promotePrice: "R$24,90",
      cupom: "AGOSTO2024"
    },
    {
        img: "https://user-images.githubusercontent.com/44410208/213885050-e603d590-5c32-45cc-abfa-be128513b964.png",
        title: "Desenvolvimento com Vue 3 + Vite - Projeto PokeVite",
        href: "https://www.youtube.com/watch?v=JWEhN12bW8w&list=PLygIEirBzJi64nSpsN1S6varBLU0HckAF",
        author: "Yuri Marcon",
        rate: 4.5,
        duration: "2,5 hours",
        lessons: "19",
        price: "R$89,90",
        promotePrice: "Free!!!",
        cupom: ""
    },
    {
      img: "https://raw.githubusercontent.com/yurimarcon/api-node-sqlite/main/docs/tumb.png",
      title: "Desenvolvendo API CRUD com Node, expres e Sqlite",
      href: "https://www.youtube.com/watch?v=yEpiT-N2DUc&list=PLygIEirBzJi4lTC-5nzfhEyxuKq2y1uiR",
      author: "Yuri Marcon",
      rate: 4.5,
      duration: "2,5 hours",
      lessons: "11",
      price: "R$89,90",
      promotePrice: "Free!!!",
      cupom: ""
  },
  {
    img: "https://user-images.githubusercontent.com/44410208/127400712-2850ba05-ddaa-42ba-ab00-2ac625b168ec.png",
    title: "Curso Vue 2 & Vuetify 2 - Projeto lista de tarefas",
    href: "https://www.youtube.com/watch?v=yEpiT-N2DUc&list=PLygIEirBzJi4lTC-5nzfhEyxuKq2y1uiR",
    author: "Yuri Marcon",
    rate: 4.5,
    duration: "2,5 hours",
    lessons: "11",
    price: "R$89,90",
    promotePrice: "Free!!!",
    cupom: ""
  },
];

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
  
