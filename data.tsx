import { FaWhatsapp, FaLinkedin, FaYoutube, FaTiktok, FaHome, FaUserAltSlash, FaBookOpen, FaReact, FaServer, FaCode, FaTools } from 'react-icons/fa';
import { FaAddressCard, FaXTwitter } from 'react-icons/fa6';
import { GoCodeSquare } from "react-icons/go";

export const socialNetworks = [
    {
        id: 1,
        logo: <FaYoutube size={25} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <FaLinkedin size={25} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <FaXTwitter size={25} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <FaWhatsapp size={25} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <FaTiktok size={25} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <FaHome size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <FaUserAltSlash size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <FaBookOpen size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <GoCodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <FaAddressCard size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Full Stack para Sitios Web a Medida",
        subtitle: "De la idea a la realidad, sin intermediarios.",
        description: "Construyo soluciones web completas, desde la base de datos hasta la interfaz del usuario. Con **C#** en el backend y **React** en el frontend, garantizo sitios robustos, seguros y con una excelente experiencia de usuario. Olvídate de plantillas limitadas y obtén una página única que represente a tu marca.",
        date: "2023 - Presente",
    },
    {
        id: 2,
        title: "Especialista en Optimización y Funcionalidad con IA",
        subtitle: "Tu sitio web, más inteligente.",
        description: "Diferencia tu negocio con funcionalidades de **Inteligencia Artificial** que otros no ofrecen. Puedo integrar módulos de IA para analizar el comportamiento de tus usuarios, personalizar su experiencia, automatizar procesos o gestionar datos de forma inteligente. Es el siguiente nivel en tecnología web, al alcance de tu mano.",
        date: "2023 - Presente",
    },
    {
        id: 3,
        title: "Socio Tecnológico de Confianza",
        subtitle: "Proyectos profesionales con soporte garantizado.",
        description: "Mis 2 años de experiencia profesional se traducen en un trabajo de alta calidad. Utilizo **Git** para un desarrollo organizado, **Azure** para un despliegue seguro y confiable, y **Postman** para garantizar que todas las funcionalidades de la API funcionen perfectamente. No solo te entrego una página, te ofrezco una solución profesional.",
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

export const serviceData = [
    {
        icon: <FaReact />,
        title: "Desarrollo de Aplicaciones Web",
        description: "Construyo aplicaciones web completas y escalables desde cero, utilizando React para crear interfaces dinámicas y un backend sólido con C#. Me encargo de todo el proceso para entregar una solución funcional y robusta.",
    },
    {
        icon: <FaServer />,
        title: "Creación de Backend y APIs",
        description: "Diseño y desarrollo la lógica de negocio y las bases de datos de tus aplicaciones. Creo APIs eficientes y seguras con C# para que tus servicios se comuniquen de manera fluida y confiable.",
    },
    {
        icon: <FaCode />,
        title: "Optimización y Consultoría Técnica",
        description: "Reviso y mejoro el código de proyectos existentes para optimizar su rendimiento y seguridad. Ofrezco consultoría para ayudarte a elegir las mejores tecnologías y estrategias para tu próximo proyecto.",
    },
    {
        icon: <FaTools />,
        title: "Mantenimiento y Soporte",
        description: "Ofrezco mantenimiento continuo para asegurar que tu sitio web esté siempre actualizado, seguro y funcionando correctamente. Te brindo soporte técnico para resolver cualquier problema que pueda surgir.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/webpro.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/proyecto1.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/proyecto2.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/img6.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/img5.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/porta.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-4.png",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "María Fernández",
        description:
            "Jhonatan transformó mi idea de negocio en un sitio web funcional y estéticamente increíble. Su atención al detalle y su habilidad para resolver problemas complejos de forma rápida es impresionante. ¡Lo recomiendo al 100%!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Carlos Sánchez",
        description:
            "Necesitaba una plataforma de e-commerce robusta y escalable. Jhonatan no solo entregó un producto de alta calidad, sino que también me guió en cada paso del proceso. Un verdadero profesional full stack.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Laura Gómez",
        description:
            "El desarrollo de mi aplicación fue un éxito gracias a Jhonatan. Su profundo conocimiento en el 'backend' y su habilidad para crear una interfaz de usuario intuitiva superaron mis expectativas. Un trabajo impecable.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Javier Ríos",
        description:
            "Trabajar con Jhonatan fue una experiencia fluida y muy positiva. Comprendió mis necesidades de inmediato y construyó una solución a medida que ha mejorado significativamente la eficiencia de mi empresa.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Ana Morales",
        description:
            "La página que desarrolló es moderna, rápida y adaptable a cualquier dispositivo. Recibí comentarios muy positivos de mis clientes. Sin duda, Jhonatan es un talento a seguir en el mundo del desarrollo web.",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Pedro Navarro",
        description:
            "Un desarrollador excepcionalmente talentoso. Resolvió problemas que otros consideraban imposibles y optimizó mi sitio para un rendimiento superior. Su profesionalismo y dedicación son inigualables.",
        imageUrl: "/profile6.png",
    },
];