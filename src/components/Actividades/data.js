import { actividades } from "../../constants"

const actividadesData = {
    mainTitle: 'Encuentros en el marco del proyecto',
    subTitle: 'Selecciona uno de los encuentros para acceder a la grabacion de los paneles y su detalle',
    activities: [{
        id: 1,
        title: 'Encuentro Regional de Políticas Públicas de Seguridad Informática',
        subtitle: 'Hacia un marco regulatorio para el reporte de vulnerabilidades en el Cono Sur.',
        aboutTitle: 'Sobre el encuentro',
        aboutSubtitle: 'Es un espacio para que autoridades nacionales y regionales, expertas en materia de ciberseguridad, puedan exponer experiencias sobre las políticas públicas implementadas en sus respectivos países facilitando que se genere un debate e intercambio de desafíos actuales, buenas prácticas y potenciales colaboraciones a nivel regional en esta temática.',
        panels: [
            {
                id: 0,
                name: 'Panel 1',
                title: 'Panel 1: Realidad y desafíos de la detección de vulnerabilidades con miras al fortalecimiento de la ciberseguridad',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/RkS_jXVQP1g',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de "Democracia en Red"',
                            image: actividades.agustinF,
                            linkedinUrl: 'https://www.linkedin.com/in/agustin-frizzera-a33a792a/',
                            twitterUrl: 'https://twitter.com/agustinfrizzera'
                        },
                    ],
                    exhibitors: [
                        {
                            id: 1,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre, Argentina',
                            image: actividades.beatrizB,
                            linkedinUrl: 'https://www.linkedin.com/in/beatriz-busaniche-ba3a7569/',
                            twitterUrl: 'https://twitter.com/beabusaniche'
                        },
                        {
                            id: 2,
                            name: 'Gaspar Pisanu',
                            position: 'AccessNow, Argentina',
                            image: actividades.gasparP,
                            linkedinUrl: 'https://www.linkedin.com/in/gaspar-pisanu-8403717a/',
                            twitterUrl: 'https://twitter.com/PisanuGaspar'
                        },
                        {
                            id: 3,
                            name: 'María Trevisani Vespa',
                            position: 'Observatorio de Derecho Informático Argentino',
                            image: actividades.mariaT,
                            linkedinUrl: '',
                            twitterUrl: ''
                        }
                    ]
                },
                highlighted: [
                    {
                        id: 0,
                        qn: '¿Cuál es el problema en Argentina en materia de ciberseguridad? / ¿Cuál es el diagnóstico?',
                        answ: [
                            {
                                t: '00:00:47',
                                name: 'Beatriz',
                                dialog: {
                                    ch1: 'El Estado tiene una doble vía: tiene que ser responsable sobre los datos y además tiene que ser garante frente a terceros y en ese panorama tenemos un Estado que lamentablemente está vaciado completamente de capacidades para dirimir con las responsabilidades que tiene sobre la mesa.'
                                }
                            },
                            {
                                t: '00:04:05',
                                name: 'Gaspar',
                                dialog: {
                                    ch1: <b>Problema social:</b>,
                                    ch2: ' A nivel regional, Argentina ha atendido muy poco la cuestión tecnológica y ha sido poco discutida en cualquier espacio público.Trabajamos en reporte de incidentes que es el servicio madre que alimenta toda la rueda y también en reportes de vulnerabilidades, entre otros servicios. Nuestro pull de clientes es cualquier organización paraguaya o persona paraguaya y lo aprovechamos en favor nuestro y obviamente lo que son las estratégias y políticas nacionales de ciberseguridad también parten desde nuestro evento. Es muy interesante participar de este tipo de espacios para aprender tanto de las experiencias positivas como de las negativas'
                                }
                            },
                            {
                                t: '00:11:08',
                                name: 'María',
                                dialog: {
                                    ch1: 'Hay problemas en los sistemas informáticos que no son seguros, hay problemas de ciberseguridad que tienen que ver con una falta de políticas general. No hay medición de riesgos, no se toman medidas para saber que se puede hacer y cómo dar respuesta a ello.'
                                }
                            }
                        ]
                    },
                    {
                        id: 1,
                        qn: '¿Tenemos que cambiar una ley?, ¿Se puede interpretar el código penal que hoy tenemos de manera diferente para que esta situación cambie?',
                        answ: [
                            {
                                t: '00:15:45',
                                name: 'María',
                                dialog: {
                                    ch1: 'Actualmente el código penal es muy amplio y la ley actual y la forma como está puede ser interpretada como que el simple acceso de una persona no autorizada a una plataforma está tipificado en el código penal. Nuestra propuesta tiene varias aristas.'
                                }
                            },
                            {
                                t: '00:19:45',
                                name: 'Beatriz',
                                dialog: {
                                    ch1: 'En relación al artículo del código penal que fue incorporado en el 2008 menciona que “En este caso, la persecución es la pena, la propia investigación es la pena.'
                                }
                            },
                            {
                                t: '00:26:48',
                                name: 'María',
                                dialog: {
                                    ch1: 'Hay que empezar a tener procesos de capacitación de quienes aplican las leyes en estos temas.'
                                }
                            }
                        ]
                    },
                    {
                        id: 2,
                        qn: 'En vistas de un proyecto de ley de protección de datos personales, Gaspar te pregunto ¿Cómo lo ves?, ¿Cómo lo analizas?',
                        answ: [
                            {
                                t: '00:35:15',
                                name: 'Gaspar',
                                dialog: {
                                    ch1: 'Es un buen proyecto. Es una mejora en relación a lo que tenemos del año 2000. Incorpora derechos más modernos, incorpora un proceso de notificación de vulnerabilidades, multas modernas. Cumple con los parámetros de las disposiciones modernas.'
                                }
                            },
                        ]
                    }

                ],
                resourcesButton: [
                    {
                        id: 0,
                        name: 'CÓDIGO PENAL (ART. 153 BIS, 157 BIS Y 183)',
                        url: 'http://servicios.infoleg.gob.ar/infolegInternet/anexos/140000-144999/141790/norma.htm',
                        color: '#FF0000'
                    },
                    {
                        id: 1,
                        name: 'Ekoparty',
                        url: 'https://www.ekoparty.org/',
                        color: '#FF0000'
                    }
                ]
            },
            {
                id: 1,
                name: 'Panel 2',
                title: 'Panel 2: Hacia políticas públicas para la correcta atención del reporte de vulnerabilidades',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/RkS_jXVQP1g',
                    moderators: [
                        {
                            id: 0,
                            name: 'Tomás Pomar',
                            position: 'Presidente de Observatorio de Derecho Informático Argentina (ODIA)',
                            image: actividades.tomasP,
                            linkedinUrl: '',
                            twitterUrl: ''
                        },
                    ],
                    exhibitors: [
                        {
                            id: 0,
                            name: 'Gustavo Sain',
                            position: 'Ex Director Nacional de Ciberseguridad de Argentina',
                            image: actividades.gustavoS,
                            linkedinUrl: 'https://www.linkedin.com/in/gustavo-sain-37496950/',
                            twitterUrl: 'https://twitter.com/grsain'
                        },
                        {
                            id: 1,
                            name: 'Franz Rojas',
                            position: 'Responsable del Centro de Gestión de Incidentes Informáticos de Bolivia',
                            image: actividades.franzR,
                            linkedinUrl: '',
                            twitterUrl: ''
                        },
                        {
                            id: 2,
                            name: 'Gabriela Ratti',
                            position: 'Directora de Ciberseguridad y Protección de la Información de Paraguay',
                            image: actividades.gabrielaR,
                            linkedinUrl: 'https://www.linkedin.com/in/gabriela-ratti/',
                            twitterUrl: ''
                        },
                        {
                            id: 3,
                            name: 'Daniel Álvarez Valenzuela',
                            position: 'Coordinador Nacional de Ciberseguridad de Chile ',
                            image: actividades.danielAV,
                            linkedinUrl: 'https://www.linkedin.com/in/danielalvarezvalenzuela/',
                            twitterUrl: 'https://twitter.com/simenon'
                        }
                    ]
                },
                highlighted: [
                    {
                        id: 0,
                        qn: '¿Qué sentido le encuentran ustedes a esto de los encuentros regionales?, ¿Cuál es el saldo que se llevan de estos encuentros?, ¿Cuáles son sus experiencias en sus respectivos países?',
                        answ: [
                            {
                                t: '01:20:00',
                                name: 'Franz',
                                dialog: {
                                    ch: 'Somos un csirt y respondiendo al tema de los incidentes, me parece muy buena la iniciativa que se promuevan este tipo de encuentros porque es importante mirar hacia afuera sobre cómo están trabajando los otros países en temas de ciberseguridad. Efectivamente hay iniciativas por ejemplo a través de la Organización de los Estados Americanos, hay uno que es Csirt América del cuál también somos parte como institución y efectivamente brindan este tipo de capacitaciones en temas de asesoramiento y de asistencia técnica.'
                                }
                            },
                            {
                                t: '01:24:06',
                                name: 'Gabriela',
                                dialog: {
                                    ch: 'Trabajamos en reporte de incidentes que es el servicio madre que alimenta toda la rueda y también en reportes de vulnerabilidades, entre otros servicios. Nuestro pull de clientes es cualquier organización paraguaya o persona paraguaya y lo aprovechamos en favor nuestro y obviamente lo que son las estratégias y políticas nacionales de ciberseguridad también parten desde nuestro evento. Es muy interesante participar de este tipo de espacios para aprender tanto de las experiencias positivas como de las negativas.'
                                }
                            },
                            {
                                t: '01:25:25',
                                name: 'Gustavo',
                                dialog: {
                                    ch: 'Celebro este evento para el intercambio de experiencias acá con colegas de la región.'
                                }
                            },
                            {
                                t: '01:26:20',
                                name: 'Gustavo',
                                dialog: {
                                    ch: 'La Dirección Nacional de Ciberseguridad tiene 3 funciones básicas:',
                                    ch1: <ul>
                                        <li>
                                            Elevar los estándares de seguridad de la información de todo el sector público nacional.
                                        </li>
                                        <li>
                                            La gestión de incidentes de seguridad informáticos sabemos que se diferencia de lo que es un ciberdelito; puede constituirlo o no, pero es diferente.
                                        </li>
                                        <li>
                                            Protección de infraestructuras críticas de información a nivel nacional.
                                        </li>
                                    </ul>
                                }
                            },
                            {
                                t: '01:27:40',
                                name: 'Daniel',
                                dialog: {
                                    ch: 'En el caso de Chile, nosotros estamos en un proceso de construcción de institucionalidad, donde se diferenciaron las áreas políticas de las áreas de gestión de incidentes.'
                                }
                            },
                            {
                                t: '01:29:15',
                                name: 'Daniel',
                                dialog: {
                                    ch: 'Nosotros tenemos una política de ciberseguridad vigente desde el año 2017. Hay una cuestión que no pasa mucho en la región en materia de ciberseguridad pero nosotros logramos transformar el instrumento de planificación primaria en un instrumento de política de estado. Mi mensaje principal para el proceso de discusión política en ciberseguridad es que este tiene que ser un diálogo multinivel, multipartidario, múltiples partes interesadas donde lo técnico, lo político, lo regulatorio, lo académico, confluya y donde hay que buscar objetivos comunes. Si ustedes me preguntan el éxito teórico de la estratégia chilena fue porque el documento de política nacional de seguridad es un documento que tienen muchas madres y padres entonces la gente lo siente como propio.'
                                }
                            }
                        ]
                    },
                    {
                        id: 1,
                        qn: 'Daniel, ¿antes de llegar a este documento nacional de políticas públicas en materia de ciberseguridad que fue primigenio, cuál fue el espacio donde se gestó? Es decir, ¿hubo una política pública de designar previamente a eso una autoridad?',
                        answ: [
                            {
                                t: '01:33:00',
                                name: 'Daniel',
                                dialog: {
                                    ch: 'No es que lo técnico no importe pero tienes que meterle política a esto si quieres que se transforme en una preocupación de Estado.\nCuando se crea el comité interministerial, se crea lo que se llama la Secretaría Ejecutiva del comité interministerial que si bien formalmente se radicó en defensa, nosotros hicimos que el proceso participativo fuera simbólicamente en un edificio civil e hicimos audiencias públicas.'
                                }
                            }
                        ]
                    },
                    {
                        id: 2,
                        qn: 'Hay una gran experiencia en lo que ha pasado en Chile, no solamente desde lo político y los consensos, sino también desde lo comunicacional en materia política. Poder comunicarse con las autoridades y poner esto en valor...',
                        answ: [
                            {
                                t: '01:39:45',
                                name: 'Daniel',
                                dialog: {
                                    ch: 'No podemos seguir hablando de ciber con tecnicismo porque provoca un rechazo automático. Por lo tanto esto hay que transformarlo en asunto o problemas que las autoridades puedan comprender en un sentido didáctico.'
                                }
                            },
                            {
                                t: '01:42:37',
                                name: 'Daniel',
                                dialog: {
                                    ch: 'Comunicacionalmente hay que traducir esto al lenguaje que puedan comprender autoridades políticas que tienen múltiples responsabilidades y que la jerga técnica no nos bloquea.'
                                }
                            }
                        ]
                    },
                    {
                        id: 3,
                        qn: 'Gustavo, habiendo estado dentro de este monstruo administrativo que es el Estado argentino con su caos, con su superposición de competencias, ¿cuál es tu análisis de la situación actual respecto a cómo están hechos los diseños institucionales en esto?, ¿cuál es tu análisis respecto a cuáles son las prácticas técnicas que tenemos hoy en día?',
                        answ: [
                            {
                                t: '01:46:26',
                                name: 'Gustavo',
                                dialog: {
                                    ch: 'Lo primero que tuvimos que hacer fue crear una norma basada en ISO 27.001 - 27.002 y Estándares Nist con el mayor nivel de ejecutividad sacado requisitos mínimos para las políticas de seguridad de la información del sector público nacional. ¡Fundamental! porque administran los archivos y las bases con datos personales de nuestros ciudadanos, acompañado de un registro de puntos focales. Que cada organismo tenga un punto focal, un enlace con la Dirección Nacional de Ciberseguridad que vaya notificando su plan de cumplimiento de esa norma.'
                                }
                            },
                        ]
                    },
                    {
                        id: 4,
                        qn: 'Según la experiencia de Paraguay, Gabriela dijiste que según su marco normativo se habla de ecosistema y que eso les permite no solamente trabajar los reportes dentro del sector público. ¿Podrás contarnos un poco más sobre eso?',
                        answ: [
                            {
                                t: '01:56:52',
                                name: 'Gabriela',
                                dialog: {
                                    ch: 'Nosotros lo hicimos al revés; desde lo operativo, lo técnico a ir elevando el nivel de madurez. Tenemos estadísticas de los reportes desde el 2013 hasta ahora sin que en ese momento siquiera el Csirt tuviera las atribuciones legales para atender incidentes. Años después cuando dijimos hay que tener una estratégia nacional entonces fue mucho más fácil trabajar sobre algo que ya existía. Por eso establecimos como objetivo y como atribución de la institución una frase que no molestó a nadie porque refería a construir un ecosistema digital confiable, resiliente, entre todos los actores que forman parte del ecosistema digital. No es algo que se dio por casualidad, se dió porque las personas adecuadas buscaron un consenso sin llegar a escalar a un plano penal o político donde obviamente la conversación siempre va a ser más compleja. No es algo que se debatió en el congreso y sabemos que en algún momento tenemos que plantear en algún momento un proyecto de ley.'
                                }
                            },
                            {
                                t: '02:03:40',
                                name: 'Gabriela',
                                dialog: {
                                    ch: 'Nosotros el estándar nacional que adoptamos no fue ni las ISO ni marcos de gestión que requieren un cambio cultural, sino bases operativas como el CIS Control.'
                                }
                            },
                        ]
                    },

                ],
                resourcesButton: [
                    {
                        id: 0,
                        name: 'CSirt',
                        url: 'https://www.welivesecurity.com/la-es/2015/05/18/que-es-como-trabaja-csirt-respuesta-incidentes/',
                        color: '#FF0000'
                    },
                    {
                        id: 1,
                        name: 'Política de ciberseguridad chilena',
                        url: 'https://digital.gob.cl/biblioteca/estrategias/politica-nacional-de-ciberseguridad-2017-2022/',
                        color: '#FF0000'
                    },
                    {
                        id: 2,
                        name: 'ISO 27.001',
                        url: 'https://www.normas-iso.com/iso-27001/',
                        color: '#32F991'
                    },
                    {
                        id: 3,
                        name: 'ISO 27.002',
                        url: 'https://www.normas-iso.com/?s=27002',
                        color: '#32F991'
                    },
                    {
                        id: 4,
                        name: 'Estándares Nist',
                        url: 'https://www.nist.gov/standards',
                        color: '#0094FF'
                    },
                    {
                        id: 5,
                        name: 'CIS Control',
                        url: 'https://www.cisecurity.org/controls',
                        color: '#0094FF'
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        title: 'Jornada Justicia 4.0: Algoritmos y prueba digital',
        subtitle: 'Discusiones ético-jurídicas desde una perspectiva de la defensa',
        aboutTitle: 'Sobre el encuentro',
        aboutSubtitle: 'Fue un encuentro para debatir sobre las implicancias de la incorporación de las nuevas tecnologías en la administración de justicia, desde la perspectiva de la defensa pública.\nLos retos y desafíos que supone la innovación tecnológica en la investigación y procesamiento de casos judiciales.',
        panels: [
            {
                id: 0,
                name: 'Panel 1',
                title: 'Panel 1',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/VcmIax35RaY',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de "Democracia en Red"',
                            image: actividades.agustinF,
                            linkedinUrl: 'https://www.linkedin.com/in/agustin-frizzera-a33a792a/',
                            twitterUrl: 'https://twitter.com/agustinfrizzera'
                        },
                    ],
                    exhibitors: [
                        {
                            id: 0,
                            name: 'Julieta Di Corleto',
                            position: 'Encargada de la Secretaría General de Capacitación y jurisprudencia del Ministerio Público de la Defensa',
                            image: actividades.julietaDC,
                            linkedinUrl: '',
                            twitterUrl: ''
                        },
                        {
                            id: 1,
                            name: 'Rodrigo Iglesias',
                            position: 'Observatorio de Derecho Informático Argentino, Argentina',
                            image: actividades.rodrigoI,
                            linkedinUrl: '',
                            twitterUrl: ''
                        }
                    ]
                },
                highlighted: [
                    {
                        id: 0,
                        qn: 'Presentaciones:',
                        answ: [
                            {
                                t: '00:00:52',
                                name: 'Julieta',
                                dialog: {
                                    ch1: 'El objetivo de ésta actividad es presentar la discusión sobre el uso de evidencia digital en los procesos judiciales con una perspectiva de Derechos Humanos. Creemos que este enfoque es el que nos da buenas herramientas para debatir y garantizar seguridad, para respetar y generar una conciencia sobre la importancia del respeto de la privacidad y la intimidad.'
                                }
                            },
                            {
                                t: '00:08:21',
                                name: 'Rodrigo',
                                dialog: {
                                    ch1: 'por resolución del Ministerio de Seguridad (720/2020) se dió por derogado el protocolo de actuación que también había salido por resolución (144/2020), por lo cuál no hay actualmente una investigación con un protocolo de investigación sobre fuentes abiertas y es un buen momento para que las organizaciones en apoyo del Ministerio Público de la Defensa, puedan establecer los parámetros adecuados para poder hacer una investigación con todas las garantías constitucionales posibles.',
                                }
                            },
                            {
                                t: '00:10:36',
                                name: 'Agustín',
                                dialog: {
                                    ch1: 'Me parece que el diálogo con las instituciones es indispensable; muchas veces en nuestras organizaciones tenemos un saber que se queda encapsulado y el diálogo con personas que tienen responsabilidades públicas es algo que no podemos soslayar. Debería ser el principal aporte que deberíamos hacer desde nuestras organizaciones. Tenemos un problema con la protección de datos personales, tenemos un problema con la introducción de inteligencia artificial en nuestras instituciones, tenemos un problema con la gobernanza de datos, hay costumbres, procedimientos, protocolos y normativas que ya no reflejan determinada manera a la que nos hemos acostumbrado de hacer las cosas y esto es un problema. Entonces me parece que estos espacios son esenciales.',
                                }
                            }
                        ]
                    },
                ],
                resourcesButton: [
                    {
                        id: 0,
                        name: 'Resolución 720/2020',
                        url: 'https://www.boletinoficial.gob.ar/detalleAviso/primera/274655/20221031',
                        color: '#FF0000'
                    },
                    {
                        id: 1,
                        name: 'Resolución 144/2020',
                        url: 'https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%83%C2%B3n-144-2020-338229',
                        color: '#FF0000'
                    }
                ]
            },
            {
                id: 1,
                name: 'Panel 2',
                title: 'Panel 2',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/VcmIax35RaY',
                    moderators: [
                        {
                            id: 0,
                            name: 'Florencia Caffarone',
                            position: 'Director Ejecutivo de Democracia en Red',
                            image: actividades.florenciaC,
                            linkedinUrl: 'https://www.linkedin.com/in/florenciacaffarone/',
                            twitterUrl: 'https://twitter.com/pitucaffarone'
                        },
                    ],
                    exhibitors: [
                        {
                            id: 0,
                            name: 'Rodrigo Iglesias',
                            position: 'Observatorio de Derecho Informático Argentino, Argentina',
                            image: actividades.rodrigoI,
                            linkedinUrl: '',
                            twitterUrl: ''
                        },
                        {
                            id: 1,
                            name: 'Christian Sueiro',
                            position: 'Secretario Letrado de la Defensoría General de la Nación',
                            image: actividades.christianS,
                            linkedinUrl: '',
                            twitterUrl: 'https://twitter.com/SueiroChristian'
                        },
                        {
                            id: 2,
                            name: 'Sebastián Waisbrot',
                            position: 'Observatorio de Derecho Informático Argentino, Argentina',
                            image: actividades.sebastianW,
                            linkedinUrl: '',
                            twitterUrl: 'https://twitter.com/seppo0011'
                        },
                        {
                            id: 3,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre',
                            image: actividades.beatrizB,
                            linkedinUrl: 'https://www.linkedin.com/in/beatriz-busaniche-ba3a7569/',
                            twitterUrl: 'https://twitter.com/beabusaniche'
                        }
                    ]
                },
                highlighted: [
                    {
                        id: 0,
                        qn: 'Cristian va a realizar una presentación sobre “vigilancia electrónica asistida por inteligencia artificial y selectividad algorítmica”.',
                        answ: [
                            {
                                t: '00:47:36',
                                name: 'Cristian',
                                dialog: {
                                    ch1: 'Cada actividad que realizamos queda registrada digitalmente y ese registro digital implica que hubo una migración en una gran parte de lo que es la prueba corpórea física o tangible a la prueba digital. Esto tuvo impacto en algunos códigos procesales y en otros no. A nivel Nacional, tanto el código procesal penal federal como el código procesal penal de la nación no tienen regulada la prueba digital. Por ejemplo, el Código Procesal Penal de Corrientes se atrevió a regular 5 medios de prueba en torno a la evidencia digital.',
                                    ch2: <ol>
                                        <li>
                                            Vigilancia Acústica
                                        </li>
                                        <li>
                                            Vigilancia de comunicaciones electrónicas
                                        </li>
                                        <li>
                                            Vigilancia mediante acceso remoto
                                        </li>
                                        <li>
                                            Vigilancia mediante dispositivos de localización
                                        </li>
                                        <li>
                                            Dispositivos de captación de imágenes
                                        </li>
                                    </ol>
                                }
                            }
                        ]
                    },
                    {
                        id: 1,
                        qn: 'Sebastián, ¿cómo funciona el reconocimiento facial?',
                        answ: [
                            {
                                t: '01:09:42',
                                name: 'Sebastián',
                                dialog: {
                                    ch: 'Venimos hablando previamente de sesgos y de falsos positivos  y quiero ahondar en cómo esto viene ocurriendo …'
                                }
                            }
                        ]
                    },
                    {
                        id: 2,
                        qn: 'Sebastián nos va a hablar de sistemas informáticos de caja negra en la justicia, avance tecnológico o retroceso de derechos.',
                        answ: [
                            {
                                t: '01:09:42',
                                name: 'Sebastián',
                                dialog: {
                                    ch: 'Tenemos que entender la tecnología como un proceso social, económico, político y por qué no jurídico en el cual tenemos voz y voto'
                                }
                            },
                            {
                                t: '01:41:16',
                                name: 'Sebastián',
                                dialog: {
                                    ch: 'Cuándo hablamos de regulaciones fuertes, estamos hablando de regulaciones legales.'
                                }
                            },
                            {
                                t: '01:42:34',
                                name: 'Sebastián',
                                dialog: {
                                    ch: 'Cuando las tecnologías suponen la afectación de los derechos fundamentales de las personas, no debemos resignar las potestades que tenemos para regular con regulación litigable en un tribunal. Con regulaciòn que nos permita identificar responsabilidad civil o penal. Si tenemos que hacernos cargo de que cómo sociedades éstas tecnologías no llegan a operar en el vacío, llegan a operar en un sistema donde ya tenemos un sistema de derechos.'
                                }
                            }
                        ]
                    }
                ],
                resourcesButton: [
                    {
                        id: 0,
                        name: 'Código Procesal Penal de Corrientes',
                        url: 'http://www.saij.gob.ar/2945-local-corrientes-codigo-procesal-penal-para-provincia-corrientes-lpw0002945-1971-02-19/123456789-0abc-defg-549-2000wvorpyel',
                        color: '#FF0000'
                    }
                ]
            },
            {
                id: 2,
                name: 'Panel 3',
                title: 'Panel 3',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/n5HAJFZ-yZE',
                    moderators: [
                        {
                            id: 0,
                            name: 'Lucía Montenegro',
                            position: 'Policía de Seguridad Aeroportuaria',
                            image: actividades.luciaM,
                            linkedinUrl: 'https://www.linkedin.com/in/luc%C3%ADa-montenegro-0925b34a/',
                            twitterUrl: ''
                        },
                    ],
                    exhibitors: [
                        {
                            id: 0,
                            name: 'Gustavo Presman',
                            position: 'Director de Estudio de Informática Forense',
                            image: actividades.gustavoP,
                            linkedinUrl: 'https://www.linkedin.com/in/gpresman/',
                            twitterUrl: 'https://twitter.com/gpresman'
                        },
                        {
                            id: 1,
                            name: 'Antonella Bentin',
                            position: 'Ministerio Público de la Defensa',
                            image: actividades.antonellaB,
                            linkedinUrl: 'https://www.linkedin.com/in/antonella-bentin-9759ab236/',
                            twitterUrl: ''
                        },
                        {
                            id: 2,
                            name: 'Ana Haydeé Di Iorio',
                            position: 'Instructora Informática en Poder Judicial',
                            image: actividades.anaHaydee,
                            linkedinUrl: 'https://www.linkedin.com/in/anadiiorio/',
                            twitterUrl: 'https://twitter.com/anadiiorio'
                        },
                        {
                            id: 3,
                            name: 'Jonathan A. Polansky',
                            position: "General Attorney's Office of Argentina",
                            image: actividades.jonathanAP,
                            linkedinUrl: 'https://www.linkedin.com/in/jpolansky/?originalSubdomain=ar',
                            twitterUrl: ''
                        }
                    ]
                },
                highlighted: [
                    {
                        id: 0,
                        qn: 'En primer lugar, va a exponer Gustavo Presman sobre “Desafìos actuales en el peritaje de teléfonos celulares',
                        answ: [
                            {
                                t: '00:03:15',
                                name: 'Gustavo',
                                dialog: {
                                    ch1: 'No es la inteligencia artificial la que va a definir una situación, la que va a emitir una sentencia. La tecnología en general es una herramienta y es algo para aportar verdad en aquellos temas que se desconocen. Pero definitivamente es claro que los operadores judiciales empiecen a inmiscuirse un poco en temas tecnológicos.  También es importante incorporar profesionales informáticos en las distintas fiscalías, defensorías y los distintos estamentos para empezar a diseñar las pruebas para controlarlas, para acompañarlas.'
                                }
                            },
                            {
                                t: '00:05:09',
                                name: 'Gustavo',
                                dialog: {
                                    ch1: 'Estos 5 puntos hoy definen el escenario de peritaje de cualquier teléfono celular o más ampliamente como me gusta llamarle, dispositivos móviles: ',
                                    ch2: <ol>
                                        <li>
                                            El bloqueo y el cifrado del dispositivo
                                        </li>
                                        <li>
                                            La arquitectura restringida
                                        </li>
                                        <li>
                                            El cifrado de las aplicaciones y la codificación de datos
                                        </li>
                                        <li>
                                            Las herramientas y el ciclo de vida
                                        </li>
                                        <li>
                                            La experticia necesaria
                                        </li>
                                    </ol>
                                }
                            }
                        ]
                    },
                    {
                        id: 1,
                        qn: 'Ahora expone Antonella Bentin, que va a exponer sobre “Desbloqueo compulsivo de dispositivos electrónicos vs. la garantía contra la autoincriminación”',
                        answ: [
                            {
                                t: '00:23:12',
                                name: 'Antonella',
                                dialog: {
                                    ch1: 'Hay dos casos puntuales: Riley vs California y Carpenter. Uno trata sobre la requisa de teléfonos celulares y el otro sobre geolocalización y ambos fallos hacen mucho hincapié respecto a lo que es la reconstrucción de la vida privada que se puede hacer a través del teléfono celular, a través de toda la información que le entregamos a las aplicaciones que tenemos hoy en día en nuestros dispositivos.'
                                }
                            },
                            {
                                t: '00:24:55',
                                name: 'Antonella',
                                dialog: {
                                    ch1: 'Hay dos momentos diferenciados en cuanto a desbloqueo:',
                                    ch2: <ol>
                                        <li>
                                            Durante el allanamiento
                                        </li>
                                        <li>
                                            En el laboratorio - Imposibilidad de desbloqueo a través de softwares de extracción forense
                                        </li>
                                    </ol>
                                }
                            },
                        ]
                    },
                    {
                        id: 2,
                        qn: 'Ahora expone Ana Haydeé Di Iorio que nos va a exponer sobre “Las pericias informáticas. Buenas prácticas en el tratamiento de la evidencia digital',
                        answ: [
                            {
                                t: '00:43:22',
                                name: 'Ana',
                                dialog: {
                                    ch1: 'Cada delito y cada prueba de cada delito, va a ser más digital que lo que lo precede. Entonces, sabemos que hay muchas fuentes de información que pueden convertirse después en fuentes de prueba y que nosotros dejamos una huella en cada uno de los actos que vamos realizando a lo largo de nuestra vida.'
                                }
                            },
                        ]
                    },
                    {
                        id: 3,
                        qn: 'Cerramos este panel con la presentación de Jonathan Polansky sobre el “Concepto de peritaje en el entorno digital, obtención de imágenes forenses y extracciones”',
                        answ: [
                            {
                                t: '1:05:04',
                                name: 'Jonathan',
                                dialog: {
                                    ch1: 'La tecnología digital nos hace muchas veces cuestionarnos y preguntarnos la esencia de algunos actos jurídicos, algunos principios sobre los cuáles se levanta la persecución penal, al principio de territorialidad que está en crisis ya desde hace un tiempo con la existencia de investigaciones que requieren acceder a información almacenada en la nube, almacenada en servidores que se encuentran en otro país'
                                }
                            },
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'Panel 4',
                title: 'Panel 4',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/n5HAJFZ-yZE',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de Democracia en Red',
                            image: actividades.agustinF,
                            linkedinUrl: 'https://www.linkedin.com/in/agustin-frizzera-a33a792a/',
                            twitterUrl: 'https://twitter.com/agustinfrizzera'
                        },
                    ],
                    exhibitors: [
                        {
                            id: 0,
                            name: 'Dra. PhD Johanna Caterina Faliero',
                            position: 'Doctora en Derecho con Tesis Doctoral Distinguida en Protección de Datos Personales',
                            image: actividades.draFaliero,
                            linkedinUrl: '',
                            twitterUrl: 'https://twitter.com/JoyCfTw'
                        },
                        {
                            id: 1,
                            name: 'Dr. Gustavo Eduardo Aboso',
                            position: 'Defensoría de Cámara N°1* Penal, Contravencional y de Faltas',
                            image: actividades.drAboso,
                            linkedinUrl: '',
                            twitterUrl: ''
                        }
                    ]
                },
                highlighted: [
                    {
                        id: 0,
                        qn: 'Vamos a ir por el lado de la identidad digital, protección de datos personales y estándares de ciberseguridad. Para eso me acompañan la Dra. PhD Johanna Faliero y el Dr. Gustavo Eduardo Aboso',
                        answ: [
                            {
                                t: '02:09:21',
                                name: 'Johanna',
                                dialog: {
                                    ch1: 'Parece el derecho a estas alturas no saber defenderse de ciertos avances de carácter tecnorreducionista que se están realizando en el ámbito de nuestra era de datos y que van permanentemente infiltrándose en los diferentes poderes, en los diferentes organismos, en las diferentes instituciones y organizaciones. Y es en este sentido que podemos señalar que ya no hay sectores limpios de intereses de carácter corporativo. Sin embargo, la industria no se ha detenido allí en permear el sector no gubernamental sino que también inunda el sector de carácter académico. Hoy en día tenemos muchísimo edutainment, una fusión entre educación y entretenimiento, donde ese entretenimiento de carácter educativo está imbuido de una suerte de carácter técnico comercial legal que pisa fuerte tanto en universidades como en centros de carácter calificado donde se funde la temática de carácter educativo con el impulso de ciertos proyectos específicos en temáticas tecnológicas y que tienen que ver con la imposición de determinados modelos de negocios  y de productos particularmente de la industria de la inteligencia artificial.'
                                }
                            },
                            {
                                t: '',
                                name: 'Gustavo',
                                dialog: {
                                    ch1: 'Cuando el Ministerio Público Fiscal nos discute si se hace un informe o un peritaje, en realidad está ocultando algo mucho más grave y es que los defensores lo debemos que saber: el problema de la anomia. Esto significa que no tenemos normas procesales por ejemplo, para determinar cuándo una geolocalización puede ser realizada y si es necesaria la autorización judicial. Si es necesario por ejemplo, para la identificación de una dirección IP y los metadatos o datos de tráfico están asociados a esa dirección, si es necesaria una autorización judicial. Claramente el problema se lleva al área de la prueba pericial, pero el problema es otro. El problema es de anomia, que no tenemos dentro de los códigos procesales vigilancia acústica, no tenemos monitoreo remoto, monitoreo en tiempo real, no tenemos utilización de malware, no tenemos un montón de herramientas jurídicas informáticas que se están utilizando hoy en día y sin embargo pasa a ser si el 212 del Código Procesal Penal de la Nación, abarca el tema de la geolocalización  de la dirección IP. Entonces, la discusión que se tiene que dar, por lo menos la defensa, debe partir del plano constitucional. Hablamos de la autodeterminación de la informática, la autodeterminación que ya viene prefijada en nuestra Constitución por aplicación de los artículos 18, 28 y 43 del Código Penal. Es decir, hay un principio de autodeterminación informativa que se relaciona con cosas que no tienen que ver con el proceso penal.',
                                }
                            }
                        ]
                    },
                ],
                resourcesButton: [
                    {
                        id: 0,
                        name: 'Art. 18, 28, 43 y 212 del Código Procesal Penal',
                        url: 'http://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/383/texact.htm',
                        color: '#FF0000'
                    }
                ]
            },
        ]
    }]
}

export default actividadesData