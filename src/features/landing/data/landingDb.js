import benefit1 from "../../../assets/images/benefit1.jpg";
import benefit2 from "../../../assets/images/benefit2.jpg";
import aiAnimationPink from "../../../assets/animations/aiAnimationPink.json";
import aiAnimationPurple from "../../../assets/animations/aiAnimationPurple.json";
import aiAnimationTeal from "../../../assets/animations/aiAnimationTeal.json";

//Benefits
const benefitsDb = [
    {
        id: 1,
        title: "AUTOMATIZACIÓN INTELIGENTE",
        subtitle: "Libera el potencial de tu equipo",
        description: "Nuestros agentes AI automatizan tareas repetitivas, permitiendo que tu equipo se enfoque en lo que realmente importa: la estrategia y el crecimiento.",
        image: benefit1,
        alt: "Automatización Inteligente",
        animation: aiAnimationPink,
    },
    {
        id: 2,
        title: "ANÁLISIS PREDICTIVO",
        subtitle: "Decisiones basadas en datos",
        description: "Utiliza el poder del machine learning para predecir tendencias y tomar decisiones informadas que impulsen el crecimiento de tu negocio.",
        image: benefit2,
        alt: "Análisis Predictivo",
        animation: aiAnimationTeal
    },
    {
        id: 3,
        title: "AGENTES AI 24/7",
        subtitle: "Servicio continuo y escalable",
        description: "Agentes AI que nunca duermen, listos para atender a tus clientes y empleados en cualquier momento del día o la noche, sin interrupciones.",
        image: benefit1,
        alt: "Asistentes Virtuales",
        animation: aiAnimationPink
    },
    {
        id: 4,
        title: "OPTIMIZACIÓN DE PROCESOS",
        subtitle: "Eficiencia maximizada",
        description: "Identifica y elimina cuellos de botella en tus procesos empresariales mediante análisis inteligente y automatización adaptativa.",
        image: benefit2,
        alt: "Optimización de Procesos",
        animation: aiAnimationPurple
    },
    {
        id: 5,
        title: "INTEGRACIÓN SEAMLESS",
        subtitle: "Implementación sin fricciones",
        description: "Nuestras soluciones AI se integran perfectamente con tus sistemas existentes, garantizando una transición suave y resultados inmediatos.",
        image: benefit1,
        alt: "Integración Seamless",
        animation: aiAnimationTeal
    },
    {
        id: 6,
        title: "ESTÁNDARES DE EXCELENCIA",
        subtitle: "Calidad garantizada",
        description: "Nos apegamos a los más altos estándares de la industria y mejores prácticas de IA, asegurando soluciones confiables y robustas.",
        image: benefit2,
        alt: "Estándares de Industria",
        animation: aiAnimationPurple
    },
    {
        id: 7,
        title: "APRENDIZAJE ADAPTATIVO",
        subtitle: "Mejora continua",
        description: "Nuestros agentes AI aprenden y evolucionan con tu negocio, adaptándose a tus procesos únicos.",
        image: benefit1,
        alt: "Aprendizaje Adaptativo",
        animation: aiAnimationPink
    },
    {
        id: 8,
        title: "SOLUCIONES ESCALABLES",
        subtitle: "Crece sin límites",
        description: "Diseñado para escalar desde startups hasta grandes empresas, nuestro sistema se adapta perfectamente a tus necesidades de crecimiento sin comprometer el rendimiento.",
        image: benefit2,
        alt: "Escalabilidad Empresarial",
        animation: aiAnimationTeal
    }
];

//Social Proof
const socialProofRow1Db = [
    {
        id: 1,
        name: "María González",
        title: "Directora de Operaciones, TechMex",
        comment: "Grozan transformó la eficiencia de nuestros procesos. Los agentes AI nos ayudaron a reducir costos operativos en un 40% en el primer trimestre.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        gradientColors: ["#c4f1be", "#faceae"],
    },
    {
        id: 2,
        name: "Roberto Sánchez",
        title: "Fundador, Innovación Digital SA",
        comment: "Como líder empresarial, la implementación de Grozan fue una decisión transformadora. La automatización inteligente superó nuestras expectativas.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        gradientColors: ["#f9d423", "#ff4e50"],
    },
    {
        id: 3,
        name: "Ana Martínez",
        title: "Gerente de Transformación Digital",
        comment: "El análisis predictivo de Grozan nos permitió anticipar tendencias y optimizar recursos. Nuestra productividad aumentó un 80%.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        gradientColors: ["#c4f1be", "#faceae"],
    },
    {
        id: 4,
        name: "Carlos Ramírez",
        title: "Director de Tecnología",
        comment: "La integración de los agentes AI fue sorprendentemente sencilla. El soporte 24/7 ha mejorado significativamente nuestra atención al cliente.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    },
    {
        id: 5,
        name: "Ricardo Mendoza",
        title: "Director de Transformación Digital",
        comment: "Los procesos que antes tomaban días ahora se completan en minutos. La automatización de Grozan transformó completamente nuestra eficiencia operativa.",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    }

];

const socialProofRow2Db = [
    {
        id: 6,
        name: "Laura Pérez",
        title: "Directora de Innovación, TechSolutions",
        comment: "Los agentes AI de Grozan revolucionaron nuestra forma de trabajo. La automatización redujo nuestros tiempos de respuesta en un 60%.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        gradientColors: ["#c4f1be", "#faceae"]
    },
    {
        id: 7,
        name: "Miguel Ángel Torres",
        title: "CEO, Innovadora Tech",
        comment: "La implementación de Grozan fue la mejor decisión estratégica que tomamos. El ROI superó nuestras expectativas en el primer semestre.",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    },
    {
        id: 8,
        name: "Patricia Ruiz",
        title: "Directora de Desarrollo",
        comment: "La capacidad de aprendizaje adaptativo de los agentes AI nos permite mejorar constantemente nuestros procesos empresariales.",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        gradientColors: ["#c4f1be", "#faceae"]
    },
    {
        id: 9,
        name: "Fernando López",
        title: "Director de Estrategia Digital",
        comment: "La escalabilidad de Grozan nos permitió crecer sin preocupaciones. El soporte técnico es excepcional.",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    },
    {
        id: 10,
        name: "Javier Morales",
        title: "CTO, InnovaSoft",
        comment: "La automatización inteligente de Grozan liberó a nuestro equipo de tareas repetitivas. La productividad aumentó un 75% en solo tres meses.",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    },

];

export { benefitsDb, socialProofRow1Db, socialProofRow2Db };
export default benefitsDb; 
