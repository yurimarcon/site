
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
        title: "Contato",
        href: "/contact",
    }
  ];
  
  const Courses =[
    {
        img: baseURL + "/images/courses/vue-vuetify.png",
        title: "Curso completo Vue JS 3, Vuetify, Pinia, Vue Router e mais",
        href: "https://bit.ly/vue-novembro-2024",
        author: "Yuri Marcon",
        rate: 4.9,
        duration: "7 hours",
        lessons: "59",
        price: "R$189,90",
        promotePrice: "R$24,90",
        cupom: "NOVEMBRO-2024"
    },
    {
      img: baseURL + "/images/courses/git-github.png",
      title: "Curso completo de Git e GitHub - Básico ao Avançado",
      href: "https://bit.ly/git-novembro-2024",
      author: "Yuri Marcon",
      rate: 4.9,
      duration: "4,5 hours",
      lessons: "77",
      price: "R$189,90",
      promotePrice: "R$24,90",
      cupom: "NOVEMBRO-2024"
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
  {
    img: baseURL + "/images/courses/vue-vuetify-en.png",
    title: "Complete course Vue JS 3, Vuetify, Pinia, Vue Router and more",
    href: "https://bit.ly/Vue3-en-september-2024",
    author: "Yuri Marcon",
    rate: 4.9,
    duration: "7 hours",
    lessons: "59",
    price: "U$39,90",
    promotePrice: "U$19,90",
    cupom: "2024-SEPTEMBER"
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
  
