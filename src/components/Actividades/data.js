import { actividades } from "../../constants"

const actividadesData = {
    mainTitle: 'Encuentros en el marco del proyecto',
    subTitle: 'Selecciona uno de los encuentros para acceder a la grabacion de los paneles y su detalle',
    activities: [{
        id: 1,
        title: 'Encuentro Regional de Políticas Públicas de Seguridad Informática',
        subtitle: 'Hacia un marco regulatorio para el reporte de vulnerabilidades en el Cono Sur.',
        aboutTitle: 'Sobre el encuentro',
        aboutSubtitle:'Es un espacio para que autoridades nacionales y regionales, expertas en materia de ciberseguridad, puedan exponer experiencias sobre las políticas públicas implementadas en sus respectivos países facilitando que se genere un debate e intercambio de desafíos actuales, buenas prácticas y potenciales colaboraciones a nivel regional en esta temática.',
        panelTabs: [
            {
                id: 0,
                name:'Panel 1',
                activityMembers: {
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
                            id: 0,
                            name: 'Beatriz Busaniche',
                            position: 'Fundación Vía Libre, Argentina',
                            image: actividades.beatrizB
                        },
                        {
                            id: 1,
                            name: 'Gaspar Pisanu',
                            position: 'AccessNow, Argentina',
                            image: actividades.gasparP
                        },
                        {
                            id: 2,
                            name: 'María Trevisani Vespa',
                            position: 'Observatorio de Derecho Informático Argentino',
                            image: actividades.mariaT
                        }
                    ]
                }
            },
            {
                id: 1,
                name:'Panel 2'
            }
        ],
        activityMembers: {
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
                    id: 0,
                    name: 'Beatriz Busaniche',
                    position: 'Fundación Vía Libre, Argentina',
                    image: actividades.beatrizB
                },
                {
                    id: 1,
                    name: 'Gaspar Pisanu',
                    position: 'AccessNow, Argentina',
                    image: actividades.gasparP
                },
                {
                    id: 2,
                    name: 'María Trevisani Vespa',
                    position: 'Observatorio de Derecho Informático Argentino',
                    image: actividades.mariaT
                }
            ]
        }
    },
    {
        id: 2,
        title:'Jornada Justicia 4.0: Algoritmos y prueba digital',
        subtitle:'Discusiones ético-jurídicas desde una perspectiva de la defensa',
        aboutTitle: 'Sobre el encuentro',
        aboutSubtitle:'Fue un encuentro para debatir sobre las implicancias de la incorporación de las nuevas tecnologías en la administración de justicia, desde la perspectiva de la defensa pública.\nLos retos y desafíos que supone la innovación tecnológica en la investigación y procesamiento de casos judiciales.',
        panelTabs: [
            {
                id: 0,
                name:'Panel 1'
            },
            {
                id: 1,
                name:'Panel 2'
            },
            {
                id: 2,
                name:'Panel 3'
            },
            {
                id: 3,
                name:'Panel 4'
            }
        ]
    }]
}

export default actividadesData