import { avatars } from "../../../assets/casos"
export const dataTimeline =
    [
        {
            id: 1,
            title: "Joaquín Sorianello",
            avatar: avatars.timeline1,
            quotes: [
                '→ “Quise comprobar si el sistema era seguro. Entré y era una fiesta, no podía creer lo fácil que era”, declaró Joaquín y aseguró que el voto electrónico “es un curro”.',
                '→ “La campaña de marketing alrededor del voto electrónico estuvo llena de mentiras. Ya fue sospechoso que le cambiaran el nombre”.',
                '→ “Entre los manuales de operación detecté que había prácticas de seguridad pésimas. El punto cúlmine decía que los centros de cómputos de las escuelas estaban almacenados en un servidor con clave. Estas claves no estaban filtradas en la web. El sistema de gestión del día de la votación no protegía esas claves. Con el nombre de la escuela, el distrito y otras informaciones podías ingresar”.',
                '→  “Hubo accesos ilegítimos antes de que yo ingresara”.',
                '→ “Me tocó poner el cuerpo para que no nos roben la democracia”.'
            ],
            button: {title:"Te contamos los hechos en primera persona", label:"Charla TEDx de Joaquín" ,url:"https://www.youtube.com/watch?v=mVNzL0l5U3k&ab_channel=TEDxTalks"},
        },
        {
            id: 3,
            title: "Javier Smaldone",
            avatar: avatars.timeline2,
            quotes: [
                '→ “En la Ciudad lo que falló de la empresa MSA fue la transmisión segura de datos, porque usó claves para cada escuela y por un error expuso esa llave en un servidor de Internet. Si nadie lo hubiese advertido (como lo hizo Sorianello) se podrían haber modificado datos, sin que nadie sospeche del sistema”',
                '→ “El sistema de Boleta Electrónica incluye un chip, que se puede destruir, leer y modificar desde una distancia variable de 50 centímetros y posiblemente más. Cada chip está numerado. Por lo cual, si el presidente de mesa o el sistema logra identificar el número de chip que se le asigna a un votante, después puede identificar quién votó a quién. Ese número es inalterable, viene de fábrica”.'
            ],
            button: {title:"Te contamos los hechos en primera persona", label:"Charla TEDx de Joaquín" ,url:"https://www.youtube.com/watch?v=mVNzL0l5U3k&ab_channel=TEDxTalks"},
        }
    ]
