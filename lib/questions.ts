export type Question = {
  id: number;
  clase: string;
  autor: string;
  question: string;
  /** Opciones en su orden original del PDF. Se barajan en runtime. */
  options: string[];
  /** Índice (0-based) de la opción correcta dentro de `options`. */
  correctIndex: number;
};

export const CLASES = [
  "Clase 1: Equipos de Trabajo",
  "Clase 2: Cultura Organizacional",
  "Clase 3: Nuevos Modelos Organizacionales",
  "Clase 4: Modelos de Aprendizaje Organizacional",
  "Clase 5: Liderazgo y Desempeño Óptimo",
  "Clase 6: El Rol de las Emociones al Liderar",
] as const;

export const questions: Question[] = [
  // ── Clase 1: Equipos de Trabajo ──────────────────────────────
  {
    id: 1,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Lencioni",
    question: "Según Lencioni, ¿cuál es la disfunción BASE de la pirámide?",
    options: [
      "Evasión de la responsabilidad",
      "Ausencia de confianza",
      "Miedo al conflicto",
      "Desatención a los resultados",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Lencioni",
    question: "En Lencioni, la confianza dentro del equipo significa:",
    options: [
      "Predecir el comportamiento de los demás",
      "Sentirse cómodo siendo vulnerable (admitir errores, pedir ayuda)",
      "Acordar los objetivos del equipo unánimemente",
      "Una historia compartida de éxitos previos",
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Lencioni",
    question: "La técnica 'mining' de Lencioni consiste en:",
    options: [
      "Documentar conflictos para resolverlos fuera de la reunión",
      "Asignar un árbitro externo para cada debate",
      "Extraer desacuerdos enterrados y ponerlos sobre la mesa",
      "Eliminar conflictos antes de que escalen",
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Lencioni",
    question: "Las dos causas principales de la falta de compromiso según Lencioni son:",
    options: [
      "Mala comunicación y falta de recursos",
      "Búsqueda de consenso y necesidad de certeza (parálisis por análisis)",
      "Rotación alta y falta de feedback",
      "Liderazgo inconsistente y metas poco claras",
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Haas & Mortensen",
    question: "Las cuatro condiciones habilitadoras de Haas y Mortensen son:",
    options: [
      "Confianza, conflicto productivo, compromiso y resultados",
      "Dirección convincente, estructura sólida, contexto de apoyo y mentalidad compartida",
      "Propósito claro, comunicación abierta, diversidad y liderazgo adaptativo",
      "Objetivos SMART, reuniones semanales, feedback 360° y accountability",
    ],
    correctIndex: 1,
  },
  {
    id: 6,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Haas & Mortensen",
    question:
      "El mayor riesgo en equipos modernos (remotos, multidisciplinarios) según Haas y Mortensen:",
    options: [
      "Falta de herramientas tecnológicas",
      "Conocimiento demasiado especializado",
      "Condiciones estructurales cubiertas pero falla la mentalidad compartida",
      "Ausencia de jerarquía clara",
    ],
    correctIndex: 2,
  },
  {
    id: 7,
    clase: "Clase 1: Equipos de Trabajo",
    autor: "Lencioni",
    question: "El 'cascading messaging' al cierre de reunión (Lencioni) sirve para:",
    options: [
      "Registrar actas en el sistema de gestión",
      "Verificar que todos entendieron lo mismo y definir qué comunicar hacia afuera",
      "Asignar tareas y plazos equitativamente",
      "Dar feedback individual a cada miembro",
    ],
    correctIndex: 1,
  },

  // ── Clase 2: Cultura Organizacional ──────────────────────────
  {
    id: 8,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Laloux",
    question:
      "¿Qué paradigma organizacional de Laloux usa la metáfora 'la máquina' y se caracteriza por innovación, meritocracia y gestión por objetivos?",
    options: [
      "Ámbar (Conformista)",
      "Verde (Pluralista)",
      "Naranja (Logro)",
      "Teal (Evolutivo)",
    ],
    correctIndex: 2,
  },
  {
    id: 9,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Laloux",
    question: "Según Laloux, el estadio de una organización está determinado principalmente por:",
    options: [
      "La edad y el tamaño de la empresa",
      "El sector de industria",
      "El estadio de desarrollo de su liderazgo máximo",
      "La estructura de propiedad",
    ],
    correctIndex: 2,
  },
  {
    id: 10,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Laloux",
    question: "Las tres innovaciones distintivas de las organizaciones Teal son:",
    options: [
      "Jerarquía horizontal, procesos ágiles y meritocracia",
      "Autogestión, plenitud (wholeness) y propósito evolutivo",
      "Consenso, transparencia radical y democracia interna",
      "Feedback continuo, revisiones ágiles y equipos auto-organizados",
    ],
    correctIndex: 1,
  },
  {
    id: 11,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Kofman",
    question: "Kofman define 'responsabilidad incondicional' como:",
    options: [
      "Rendir cuentas ante el jefe por todos los resultados",
      "Cumplir las reglas sin excepciones",
      "Verse como protagonista (no víctima) ante cualquier situación",
      "Asumir la responsabilidad legal de las decisiones estratégicas",
    ],
    correctIndex: 2,
  },
  {
    id: 12,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Kofman",
    question: "La secuencia causal de mayor apalancamiento según Kofman es:",
    options: [
      "Tener → Hacer → Ser",
      "Hacer → Ser → Tener",
      "Ser → Hacer → Tener",
      "Saber → Querer → Poder → Tener",
    ],
    correctIndex: 2,
  },
  {
    id: 13,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Taylor",
    question: "Taylor define la cultura organizacional como:",
    options: [
      "El conjunto de valores declarados en el reporte anual",
      "Lo que las personas crean a partir de los mensajes recibidos sobre cómo comportarse",
      "La historia fundacional y tradiciones de la empresa",
      "El estilo de liderazgo de la cúpula directiva",
    ],
    correctIndex: 1,
  },
  {
    id: 14,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Taylor",
    question: "Las tres fuentes de mensajes culturales según Taylor son:",
    options: [
      "Visión, misión y valores",
      "Comportamientos, símbolos y sistemas",
      "Líderes, procesos y tecnología",
      "Estrategia, estructura y personas",
    ],
    correctIndex: 1,
  },
  {
    id: 15,
    clase: "Clase 2: Cultura Organizacional",
    autor: "Laloux",
    question: "Para que una organización cambie de paradigma (Laloux), es necesario:",
    options: [
      "Restructurar el organigrama y cambiar procesos formales",
      "Que el liderazgo máximo evolucione a un estadio de mayor complejidad",
      "Contratar consultores externos en transformación",
      "Implementar un nuevo sistema de incentivos",
    ],
    correctIndex: 1,
  },

  // ── Clase 3: Nuevos Modelos Organizacionales ─────────────────
  {
    id: 16,
    clase: "Clase 3: Nuevos Modelos Organizacionales",
    autor: "Appelo",
    question:
      "El principal problema de la motivación extrínseca en sistemas complejos (Appelo, Management 3.0):",
    options: [
      "Es demasiado costosa a largo plazo",
      "Causa efectos secundarios imprevistos, incluyendo destruir la motivación intrínseca",
      "Solo funciona con empleados de alta performance",
      "Es incompatible con metodologías ágiles",
    ],
    correctIndex: 1,
  },
  {
    id: 17,
    clase: "Clase 3: Nuevos Modelos Organizacionales",
    autor: "Appelo",
    question:
      "La Teoría de Dos Factores de Herzberg (citada en Management 3.0) distingue entre:",
    options: [
      "Motivación extrínseca e intrínseca",
      "Factores de higiene (evitan insatisfacción) y motivadores (generan satisfacción)",
      "Necesidades fisiológicas y de autorrealización",
      "Teoría X y Teoría Y de McGregor",
    ],
    correctIndex: 1,
  },
  {
    id: 18,
    clase: "Clase 3: Nuevos Modelos Organizacionales",
    autor: "Cross & Parker",
    question: "Según Cross y Parker (Hidden Power), ¿qué distingue a los high performers?",
    options: [
      "Más años de experiencia en el sector",
      "Mayor uso de tecnología colaborativa",
      "Redes más amplias y diversificadas, no su expertise individual",
      "Ubicación física en oficinas centrales",
    ],
    correctIndex: 2,
  },
  {
    id: 19,
    clase: "Clase 3: Nuevos Modelos Organizacionales",
    autor: "Cross & Parker",
    question: "Cross y Parker argumentan que más colaboración es:",
    options: [
      "Siempre beneficiosa para la productividad",
      "No siempre mejor: el objetivo es colaboración estratégica, no indiscriminada",
      "La solución principal para los cuellos de botella",
      "Solo valiosa combinada con tecnología adecuada",
    ],
    correctIndex: 1,
  },
  {
    id: 20,
    clase: "Clase 3: Nuevos Modelos Organizacionales",
    autor: "Ibarra & Hunter",
    question:
      "El networking ESTRATÉGICO (Ibarra y Hunter) se diferencia del operacional en que:",
    options: [
      "Se enfoca en las tareas actuales y el equipo directo",
      "Está orientado al futuro y busca alinear stakeholders para ejecutar una agenda estratégica",
      "Se limita a contactos externos y asociaciones profesionales",
      "Se construye de forma espontánea",
    ],
    correctIndex: 1,
  },
  {
    id: 21,
    clase: "Clase 3: Nuevos Modelos Organizacionales",
    autor: "Ibarra & Hunter",
    question:
      "El mayor error de los managers en transición hacia roles de liderazgo (Ibarra y Hunter):",
    options: [
      "Delegar demasiado",
      "Concentrarse solo en el networking operacional y descuidar el estratégico",
      "Invertir demasiado tiempo en relaciones externas",
      "No desarrollar habilidades técnicas del nuevo rol",
    ],
    correctIndex: 1,
  },

  // ── Clase 4: Modelos de Aprendizaje Organizacional ───────────
  {
    id: 22,
    clase: "Clase 4: Modelos de Aprendizaje Organizacional",
    autor: "Nicholl",
    question: "La diferencia clave entre aprendizaje por eventos y aprendizaje continuo (Nicholl):",
    options: [
      "El continuo es más costoso",
      "En eventos hay tiempo protegido, visibilidad gerencial y contexto social; en el continuo el empleado aprende solo sin tiempo dedicado",
      "El basado en eventos requiere tecnología digital",
      "El continuo produce mejores resultados medibles a corto plazo",
    ],
    correctIndex: 1,
  },
  {
    id: 23,
    clase: "Clase 4: Modelos de Aprendizaje Organizacional",
    autor: "Nicholl",
    question: "El marco AIM de Nicholl (Capítulo 6) significa:",
    options: [
      "Aprender, Integrar, Mejorar",
      "Alinear (con el negocio), Mejorar (Improve) y Medir (Measure)",
      "Analizar, Implementar y Monitorear",
      "Articular, Involucrar y Movilizar",
    ],
    correctIndex: 1,
  },
  {
    id: 24,
    clase: "Clase 4: Modelos de Aprendizaje Organizacional",
    autor: "Nicholl",
    question: "Nicholl define 'cultura de aprendizaje' como:",
    options: [
      "Una organización que invierte +3% de su presupuesto en capacitación",
      "Aquella donde el aprendizaje es fomentado y sostenido mediante hábitos a nivel organizacional, de equipo e individual",
      "Una empresa que usa plataformas LMS para todo el aprendizaje",
      "Un ambiente donde los errores son celebrados como oportunidades",
    ],
    correctIndex: 1,
  },
  {
    id: 25,
    clase: "Clase 4: Modelos de Aprendizaje Organizacional",
    autor: "Senge",
    question: "La 'parábola de la rana hervida' (Senge) ilustra:",
    options: [
      "La ilusión de que el trabajo en equipo genera sinergia automáticamente",
      "La incapacidad organizacional de detectar amenazas que crecen gradualmente",
      "El peligro de concentrarse en el propio puesto e ignorar el sistema",
      "La tendencia a atribuir el éxito a factores externos",
    ],
    correctIndex: 1,
  },
  {
    id: 26,
    clase: "Clase 4: Modelos de Aprendizaje Organizacional",
    autor: "Senge",
    question: "¿Cuál NO es una barrera de aprendizaje del Capítulo 2 de Senge?",
    options: [
      "'Yo soy mi puesto'",
      "'El enemigo externo'",
      "'La trampa de la eficiencia operacional'",
      "'La ilusión de aprender con la experiencia'",
    ],
    correctIndex: 2,
  },
  {
    id: 27,
    clase: "Clase 4: Modelos de Aprendizaje Organizacional",
    autor: "Senge",
    question: "El 'horizonte de aprendizaje' (Senge) se refiere a:",
    options: [
      "El tiempo máximo de capacitación por empleado",
      "El espacio dentro del cual cada persona puede observar las consecuencias de sus propios actos",
      "La cantidad de información que un equipo puede procesar simultáneamente",
      "El nivel de expertise al que puede aspirar un aprendiz",
    ],
    correctIndex: 1,
  },

  // ── Clase 5: Liderazgo y Desempeño Óptimo ────────────────────
  {
    id: 28,
    clase: "Clase 5: Liderazgo y Desempeño Óptimo",
    autor: "Goleman (Focused Leader)",
    question: "La tarea central del liderazgo según Goleman ('The Focused Leader') es:",
    options: [
      "Tomar las mejores decisiones estratégicas",
      "Dirigir la atención — propia y de la organización — de forma eficaz hacia lo que más importa",
      "Motivar e inspirar a los equipos para metas ambiciosas",
      "Construir relaciones de confianza dentro y fuera de la organización",
    ],
    correctIndex: 1,
  },
  {
    id: 29,
    clase: "Clase 5: Liderazgo y Desempeño Óptimo",
    autor: "Goleman (Focused Leader)",
    question: "Los tres tipos de empatía en 'The Focused Leader' (Goleman) son:",
    options: [
      "Empatía emocional, cognitiva y conductual",
      "Empatía cognitiva, emocional y empathic concern (preocupación empática)",
      "Empatía intrapersonal, interpersonal y sistémica",
      "Empatía básica, avanzada y estratégica",
    ],
    correctIndex: 1,
  },
  {
    id: 30,
    clase: "Clase 5: Liderazgo y Desempeño Óptimo",
    autor: "Nohria et al.",
    question:
      "¿Cuál de los cuatro impulsos se satisface principalmente a través del DISEÑO DEL PUESTO? (Nohria et al.)",
    options: [
      "Drive to Acquire (adquirir)",
      "Drive to Bond (vincularse)",
      "Drive to Comprehend (comprender)",
      "Drive to Defend (defenderse)",
    ],
    correctIndex: 2,
  },
  {
    id: 31,
    clase: "Clase 5: Liderazgo y Desempeño Óptimo",
    autor: "Nohria et al.",
    question: "Nohria et al. argumentan que para motivar efectivamente:",
    options: [
      "Aumentar los salarios por encima del mercado",
      "Focalizar todos los esfuerzos en el impulso de adquirir",
      "Atender los cuatro impulsos simultáneamente — ignorar uno debilita el efecto de los otros tres",
      "Dejar la motivación completamente en manos del gerente directo",
    ],
    correctIndex: 2,
  },
  {
    id: 32,
    clase: "Clase 5: Liderazgo y Desempeño Óptimo",
    autor: "Sadun et al.",
    question:
      "La vida media de las habilidades en campos tecnológicos según Sadun et al. (Reskilling):",
    options: [
      "Menos de 5 años en general, y 2,5 años en campos tecnológicos",
      "10 años en promedio",
      "7 años según proyecciones OCDE",
      "Varía pero promedia 8 años",
    ],
    correctIndex: 0,
  },
  {
    id: 33,
    clase: "Clase 5: Liderazgo y Desempeño Óptimo",
    autor: "Sadun et al.",
    question: "Uno de los cinco cambios de paradigma del reskilling (Sadun et al.):",
    options: [
      "HR debe liderar todos los programas de capacitación",
      "El reskilling debe ser tratado como imperativo estratégico y de gestión del cambio, no solo capacitación",
      "Contratar externamente en vez de re-capacitar internamente",
      "El reskilling solo es viable para empleados con educación universitaria",
    ],
    correctIndex: 1,
  },

  // ── Clase 6: El Rol de las Emociones al Liderar ──────────────
  {
    id: 34,
    clase: "Clase 6: El Rol de las Emociones al Liderar",
    autor: "Goleman (WML)",
    question: "Goleman ('¿Qué hace a un líder?') sostiene que la IE es:",
    options: [
      "Menos importante que el IQ a medida que se asciende en la jerarquía",
      "El doble de importante que las habilidades técnicas como predictor del desempeño excepcional",
      "Relevante solo para roles de atención al cliente y ventas",
      "Una habilidad innata que no puede desarrollarse",
    ],
    correctIndex: 1,
  },
  {
    id: 35,
    clase: "Clase 6: El Rol de las Emociones al Liderar",
    autor: "Goleman (WML)",
    question: "Los cinco componentes de la inteligencia emocional según Goleman (1998):",
    options: [
      "Motivación, perseverancia, empatía, comunicación y liderazgo",
      "Autoconciencia, autorregulación, motivación, empatía y habilidad social",
      "Inteligencia intrapersonal, interpersonal, emocional, social y cultural",
      "Resiliencia, adaptabilidad, colaboración, influencia y autocrítica",
    ],
    correctIndex: 1,
  },
  {
    id: 36,
    clase: "Clase 6: El Rol de las Emociones al Liderar",
    autor: "Goleman (WML)",
    question: "La 'habilidad social' (social skill) según Goleman:",
    options: [
      "La popularidad y simpatía natural del líder",
      "'Amabilidad con propósito': la capacidad de mover a las personas en la dirección deseada",
      "Comunicarse efectivamente en varios contextos culturales",
      "El nivel de extroversión del individuo",
    ],
    correctIndex: 1,
  },
  {
    id: 37,
    clase: "Clase 6: El Rol de las Emociones al Liderar",
    autor: "Goleman (WML)",
    question: "¿Puede desarrollarse la inteligencia emocional? (Goleman)",
    options: [
      "No; es exclusivamente genética",
      "Sí, pero solo hasta los 30 años",
      "Sí; requiere trabajo genuino orientado al sistema límbico (no al neocórtex) y produce cambios duraderos",
      "Solo en personas con IQ superior al promedio",
    ],
    correctIndex: 2,
  },
  {
    id: 38,
    clase: "Clase 6: El Rol de las Emociones al Liderar",
    autor: "Integración (Transversal)",
    question:
      "¿Qué tienen en común los modelos de Laloux (Teal), Kofman (empresa consciente) y Senge (quinta disciplina)?",
    options: [
      "Los tres enfatizan el aprendizaje formal y la certificación profesional",
      "Los tres proponen que el cambio genuino requiere una transformación en el nivel de conciencia y 'ser' de las personas",
      "Los tres rechazan la importancia de los resultados financieros",
      "Los tres proponen estructuras completamente horizontales sin jerarquía",
    ],
    correctIndex: 1,
  },
];
