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
                                dialog:{
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
                            },
                        ]
                    },
                    {
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
                            id: 1,
                            name: 'Gustavo Sain',
                            position: 'Ex Director Nacional de Ciberseguridad de Argentina',
                            image: actividades.gustavoS,
                            linkedinUrl: 'https://www.linkedin.com/in/gustavo-sain-37496950/',
                            twitterUrl: 'https://twitter.com/grsain'
                        },
                        {
                            id: 2,
                            name: 'Franz Rojas',
                            position: 'Responsable del Centro de Gestión de Incidentes Informáticos de Bolivia',
                            image: actividades.franzR,
                            linkedinUrl: '',
                            twitterUrl: ''
                        },
                        {
                            id: 3,
                            name: 'Gabriela Ratti',
                            position: 'Directora de Ciberseguridad y Protección de la Información de Paraguay',
                            image: actividades.gabrielaR,
                            linkedinUrl: 'https://www.linkedin.com/in/gabriela-ratti/',
                            twitterUrl: ''
                        },
                        {
                            id: 4,
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
                        qn: '¿Cuál es el problema en Argentina en materia de ciberseguridad?/¿Cuál es el diagnóstico?',
                        answ: [
                            {
                                t: '00:00:47',
                                name: 'Beatriz',
                                dialog: {
                                    ch: 'El Estado tiene una doble vía: tiene que ser responsable sobre los datos y además tiene que ser garante frente a terceros y en ese panorama tenemos un Estado que lamentablemente está vaciado completamente de capacidades para dirimir con las responsabilidades que tiene sobre la mesa.'
                                }
                            },
                            {
                                t: '00:04:05',
                                name: 'Gaspar',
                                dialog: {
                                    ch: {}
                                }
                            },
                        ]
                    },
                ]
            }
        ],
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
                    urlVideo: 'https://www.youtube.com/embed/RkS_jXVQP1g',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de "Democracia en Red"',
                            image: actividades.agustinF
                        },
                    ],
                    exhibitors: [
                        {
                            id: 1,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre, Argentina',
                            image: actividades.beatrizB
                        }
                    ]
                },
                highlighted: [
                    {
                        qn: '¿Cuál ?',
                        answ: [
                            {
                                t: '00:00:47',
                                name: 'Beatriz',
                                dialog: {
                                    ch1: 'El Estado ...'
                                }
                            },
                            {
                                t: '00:04:05',
                                name: 'Gaspar',
                                dialog: {
                                    ch1: '<b>Problema social:<b>',
                                    ch2: 'A nivel regional...'
                                }
                            }
                        ]
                    },
                ]
            },
            {
                id: 1,
                name: 'Panel 2',
                title: 'Panel 2',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/RkS_jXVQP1g',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de "Democracia en Red"',
                            image: actividades.agustinF
                        },
                    ],
                    exhibitors: [
                        {
                            id: 1,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre, Argentina',
                            image: actividades.beatrizB
                        }
                    ]
                },
                highlighted: [
                    {
                        qn: '¿Cuál ?',
                        answ: [
                            {
                                t: '00:00:47',
                                name: 'Beatriz',
                                dialog: {
                                    ch1: 'El Estado ...'
                                }
                            },
                            {
                                t: '00:04:05',
                                name: 'Gaspar',
                                dialog: {
                                    ch1: '<b>Problema social:<b>',
                                    ch2: 'A nivel regional...'
                                }
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                name: 'Panel 3',
                title: 'Panel 3',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/RkS_jXVQP1g',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de "Democracia en Red"',
                            image: actividades.agustinF
                        },
                    ],
                    exhibitors: [
                        {
                            id: 1,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre, Argentina',
                            image: actividades.beatrizB
                        }
                    ]
                },
                highlighted: [
                    {
                        qn: '¿Cuál ?',
                        answ: [
                            {
                                t: '00:00:47',
                                name: 'Beatriz',
                                dialog: {
                                    ch1: 'El Estado ...'
                                }
                            },
                            {
                                t: '00:04:05',
                                name: 'Gaspar',
                                dialog: {
                                    ch1: '<b>Problema social:<b>',
                                    ch2: 'A nivel regional...'
                                }
                            }
                        ]
                    },
                ]
            },
            {
                id: 3,
                name: 'Panel 4',
                title: 'Panel 4',
                videos: {
                    urlVideo: 'https://www.youtube.com/embed/RkS_jXVQP1g',
                    moderators: [
                        {
                            id: 0,
                            name: 'Agustín Frizzera',
                            position: 'Director Ejecutivo de "Democracia en Red"',
                            image: actividades.agustinF
                        },
                    ],
                    exhibitors: [
                        {
                            id: 1,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre, Argentina',
                            image: actividades.beatrizB
                        }
                    ]
                },
                highlighted: [
                    {
                        qn: '¿Cuál ?',
                        answ: [
                            {
                                t: '00:00:47',
                                name: 'Beatriz',
                                dialog: {
                                    ch1: 'El Estado ...'
                                }
                            },
                            {
                                t: '00:04:05',
                                name: 'Gaspar',
                                dialog: {
                                    ch1: '<b>Problema social:<b>',
                                    ch2: 'A nivel regional...'
                                }
                            }
                        ]
                    },
                ]
            },
        ]
    }]
}

export default actividadesData