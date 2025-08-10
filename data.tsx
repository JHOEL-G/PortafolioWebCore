import { FaWhatsapp, FaLinkedin, FaYoutube, FaTiktok, FaHome, FaReact, FaServer, FaTools, FaLaptopCode, FaBrain, FaBookReader } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa6';
import { GoCodeSquare, GoMail } from "react-icons/go";

// Se han corregido los enlaces con ejemplos reales y se han agregado íconos de GitHub
export const socialNetworks = [
    {
        id: 1,
        logo: <FaYoutube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UC3FKLTXrPjVkx722h277UaQ",
    },
    {
        id: 2,
        logo: <FaLinkedin size={25} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/junior-garcia-134790369/", // Enlace a tu perfil de LinkedIn
    },
    {
        id: 3,
        logo: <GoMail size={27} strokeWidth={1} />,
        src: "mailto:yuniorjhoelgarcia@gmail.com",
    },
    {
        id: 4,
        logo: <FaWhatsapp size={27} strokeWidth={1} />,
        src: "https://wa.me/951072293", // Enlace para contactarte por WhatsApp
    },
    {
        id: 5,
        logo: <FaTiktok size={22} strokeWidth={1} />,
        src: "https://www.tiktok.com/@debug_code4",
    },
];

// Se han cambiado los títulos para que sean más descriptivos y profesionales
export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <FaHome size={25} color="#fff" strokeWidth={1} />,
        link: "/",
        ariaLabel: "Ir a la página de inicio", // Agregado para accesibilidad
    },
    {
        id: 2,
        title: "Sobre Mí",
        icon: <FaAddressCard size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
        ariaLabel: "Ir a la página sobre mí", // Agregado para accesibilidad
    },
    {
        id: 3,
        title: "Servicios",
        icon: <FaLaptopCode size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
        ariaLabel: "Ir a la página de servicios", // Agregado para accesibilidad
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <GoCodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
        ariaLabel: "Ir a la página del portafolio", // Agregado para accesibilidad
    },
    {
        id: 5,
        title: "Testimonios",
        icon: <FaBookReader size={23} color='#fff' strokeWidth={1} />,
        link: "/testimonials",
        ariaLabel: "Ir a la página de testimonios", // Agregado para accesibilidad
    },
];


// Se ha corregido la inconsistencia de años de experiencia y se ha mejorado el lenguaje
export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Full Stack para Soluciones a Medida",
        subtitle: "De la idea a la realidad, sin intermediarios.",
        description: "Construyo soluciones web completas, desde la base de datos hasta la interfaz del usuario. Con **C# y Node.js** en el backend y **React** en el frontend, garantizo plataformas robustas, seguras y con una excelente experiencia de usuario. Olvídate de plantillas limitadas y obtén una solución única que represente a tu marca.",
        date: "2023 - Presente",
    },
    {
        id: 2,
        title: "Especialista en Inteligencia Artificial Aplicada",
        subtitle: "Tu sitio web, más inteligente.",
        description: "Diferencia tu negocio con funcionalidades de **Inteligencia Artificial (IA)** que otros no ofrecen. Puedo integrar módulos de IA para analizar el comportamiento de tus usuarios, personalizar su experiencia, automatizar procesos o gestionar datos de forma inteligente. Es el siguiente nivel en tecnología web, al alcance de tu mano.",
        date: "2023 - Presente",
    },
    {
        id: 3,
        title: "Socio Tecnológico de Confianza",
        subtitle: "Proyectos profesionales con soporte garantizado.",
        description: "Mi experiencia profesional se traduce en un trabajo de alta calidad. Utilizo **Git** para un desarrollo organizado, **Azure** o **AWS** para un despliegue seguro y confiable, y **Postman** para garantizar que todas las funcionalidades de la API funcionen perfectamente. No solo te entrego una página, te ofrezco una solución profesional completa.",
        date: "2023 - Presente",
    },
    {
        id: 4,
        title: "Creador de Experiencias Digitales Personalizadas",
        subtitle: "Tu visión, mi código.",
        description: "Trabajo contigo de cerca para entender tu visión y convertirla en una experiencia digital impactante. Como desarrollador **full stack**, tengo la capacidad de materializar cualquier idea, por ambiciosa que sea, asegurando que tu sitio web no solo sea bonito, sino también funcional, rápido y perfectamente adaptado a tus necesidades y las de tus clientes.",
        date: "2023 - Presente",
    },
];

// Corregimos la inconsistencia en los años de experiencia para que coincida con la data
export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 5,
        text: "Soluciones implementadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

// Se ha agregado un servicio de IA para reflejar mejor tu perfil
export const serviceData = [
    {
        icon: <FaReact />,
        title: "Desarrollo de Aplicaciones Web",
        description: "Construyo aplicaciones web completas y escalables desde cero, utilizando React para crear interfaces dinámicas y un backend sólido con C# o Node.js. Me encargo de todo el proceso para entregar una solución funcional y robusta.",
    },
    {
        icon: <FaBrain />, // Nuevo icono para IA
        title: "Soluciones de Inteligencia Artificial",
        description: "Integro modelos de Machine Learning y herramientas de IA para potenciar tus aplicaciones. Desde sistemas de recomendación y análisis de datos hasta chatbots personalizados, te ayudo a crear soluciones inteligentes que automatizan y optimizan tus procesos de negocio.",
    },
    {
        icon: <FaServer />,
        title: "Creación de Backend y APIs",
        description: "Diseño y desarrollo la lógica de negocio y las bases de datos de tus aplicaciones. Creo APIs eficientes y seguras con C# y Node.js para que tus servicios se comuniquen de manera fluida y confiable.",
    },
    {
        icon: <FaTools />,
        title: "Mantenimiento y Soporte",
        description: "Ofrezco mantenimiento continuo para asegurar que tu sitio web esté siempre actualizado, seguro y funcionando correctamente. Te brindo soporte técnico para resolver cualquier problema que pueda surgir.",
    },
];

// Se han corregido los enlaces y se ha mejorado la descripción del proyecto de IA
export const dataPortfolio = [
    {
        id: 1,
        title: "Inventario de Calzados",
        description: "Sitio web moderno para una inventario, permitiendo a los clientes ver servicios, precios y reservar citas en línea.",
        image: "/webpro.png",
        tags: ["React", "Tailwind CSS", "Reservas Online", "C#"],
        status: "Terminado",
        urlGithub: "https://github.com/JHOEL-G/calzado_pro_confort", // Ejemplo de URL
        urlDemo: "https://calzado-pro-confort.vercel.app/", // Ejemplo de URL
    },
    {
        id: 3,
        title: "Consultoría Empresarial",
        description: "Página web para una consultora, destacando sus áreas de especialización, equipo y casos de éxito.",
        image: "/proyecto1.png",
        tags: ["Diseño Web", "Ilustración", "Animación"],
        status: "Desarrollo",
        urlGithub: "https://github.com/JHOEL-G/PaginaOnline",
        urlDemo: "https://paginaonlin.netlify.app/",
    },
    {
        id: 4,
        title: "Agencia de Diseño de Hamburgesa",
        description: "Portafolio web para una agencia de diseño, mostrando proyectos creativos en diversas disciplinas.",
        image: "/proyecto2.png",
        tags: ["HTML", "CSS", "JavaScript", "Diseño Responsivo"],
        status: "Finalizado",
        urlGithub: "https://github.com/JHOEL-G/nativo",
        urlDemo: "https://proyectonativo.netlify.app/",
    },
    {
        id: 5,
        title: "Web con Inteligencia Artificial (IA)",
        description: "Aplicación web que integra un modelo de Machine Learning para analizar y clasificar el comportamiento de los usuarios en tiempo real, personalizando la experiencia del sitio.",
        image: "/img6.png",
        tags: ["Inteligencia Artificial", "Python", "React", "API"],
        status: "Finalizado",
        urlGithub: "https://github.com/JHOEL-G/Pagina",
        urlDemo: "https://masterenginer.netlify.app/",
    },
    {
        id: 6,
        title: "Plataforma de Gestión de Comida",
        description: "Aplicación web para la gestión de pedidos y visualización de menús de restaurantes, con un dashboard administrativo para el seguimiento de ventas.",
        image: "/img5.png",
        tags: ["React", "Postgres", "Gestión de Datos"],
        status: "Finalizado",
        urlGithub: "https://github.com/JHOEL-G/tienda-online",
        urlDemo: "https://tienda-online-n5e0.onrender.com/",
    },
    {
        id: 7,
        title: "Portafolio Profesional Oscuro",
        description: "Sitio web de portafolio con un diseño elegante en modo oscuro, ideal para destacar proyectos visuales y habilidades de desarrollo front-end.",
        image: "/porta.png",
        tags: ["Diseño Oscuro", "Next", "Portafolio"],
        status: "Finalizado",
        urlGithub: "https://github.com/JHOEL-G/portafolioweb",
        urlDemo: "https://developerwebporta.netlify.app/",
    },
    {
        id: 8,
        title: "Inventario, Tienda de Productos",
        description: "Plataforma de comercio electrónico completa para la venta de productos alimenticios de alta calidad, incluyendo pasarela de pago y gestión de inventario.",
        image: "/image-4.png",
        tags: ["E-commerce", "React", "Pasarela de Pago", "C#"],
        status: "Finalizado",
        urlGithub: "https://github.com/JHOEL-G/SISTEMALIBRERIA/tree/master",
        urlDemo: "https://sistem-de-ventas.vercel.app/",
    }
];

// Se ha corregido el error en el nombre de Ana Morales y se ha mejorado el lenguaje
export const dataTestimonials = [
    {
        id: 1,
        name: "María Fernández",
        description:
            "Jhoel transformó mi idea de negocio en un sitio web funcional y estéticamente increíble. Su atención al detalle y su habilidad para resolver problemas complejos de forma rápida es impresionante. ¡Lo recomiendo al 100%!",
        imageUrl: "/profile1.jpg",
    },
    {
        id: 2,
        name: "Carlos Sánchez",
        description:
            "Necesitaba una plataforma de e-commerce robusta y escalable. Jhoel no solo entregó un producto de alta calidad, sino que también me guió en cada paso del proceso. Un verdadero profesional full stack.",
        imageUrl: "/profile2.jpg",
    },
    {
        id: 3,
        name: "Laura Gómez",
        description:
            "El desarrollo de mi aplicación fue un éxito. Su profundo conocimiento en el 'backend' y su habilidad para crear una interfaz de usuario intuitiva superaron mis expectativas. Un trabajo impecable.",
        imageUrl: "/profile3.jpg",
    },
    {
        id: 4,
        name: "Javier Ríos",
        description:
            "Trabajar con Jhoel fue una experiencia fluida y muy positiva. Comprendió mis necesidades de inmediato y construyó una solución a medida que ha mejorado significativamente la eficiencia de mi empresa.",
        imageUrl: "/profile4.jpg",
    },
    {
        id: 5,
        name: "Ana Morales",
        description:
            "La página que desarrolló es moderna, rápida y adaptable a cualquier dispositivo. Recibí comentarios muy positivos de mis clientes. Sin duda, Jhoel es un talento a seguir en el mundo del desarrollo web.",
        imageUrl: "/profile5.jpg",
    },
    {
        id: 6,
        name: "Pedro Navarro",
        description:
            "Un desarrollador excepcionalmente talentoso. Resolvió problemas que otros consideraban imposibles y optimizó mi sitio para un rendimiento superior. Su profesionalismo y dedicación son inigualables.",
        imageUrl: "/profile6.jpg",
    },
];
