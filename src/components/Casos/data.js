import { avatars } from "../../assets/casos";

export const casos = [
  {
    id: 1,
    avatar: avatars.anon,
    mouseOver: avatars.caso1,
    name: "Joaquín Sorianello",
    tooltip: "Denunciado por reportar vulnerabilidades en el sistema de votación con Boleta Única Electrónica",
    occupation: "Desarrollador de software",
    year: "2015",
    subtitle:"Quiso alertar sobre la facilidad de cometer un fraude informático con el sistema de votación con Boleta Única Electrónica y lo denunciaron penalmente.",
    content:{
      child1:'Días antes de las Elecciones Generales para jefe de Gobierno de 2015 en la Ciudad de Buenos Aires, ',
      chlid2:<b>Joaquín alertó fallas en el sistema de seguridad de la empresa Magic Software Argentina SA (MSA)</b>,
      child3:', elegida por el gobierno ',
      child4: <b>para implementar la Boleta Única Electrónica.</b>,
      child5: '\n\nDos días antes de las elecciones, ',
      child6: <b>la división de cibercrimen de la Policía Metropolitana allanó su casa</b>,
      child7: ' y le secuestró una computadora, cuatro discos rígidos, pendrives y memorias. ',
      child8: <b>Lo acusaron de ingresar al sistema de la empresa para “causar daño”</b>,
      child9:', es decir, ',
      child10:<b>con intenciones de generar fallas en la transparencia electoral</b>,
      child11:'. En 2016, un año después, ',
      child12: <a href="https://www.lanacion.com.ar/tecnologia/sobreseyeron-al-programador-que-revelo-fallas-en-el-sistema-de-boleta-unica-electronica-nid1924088/" target="_blank" rel="noopener noreferrer">Sorianello fue sobreseído del proceso judicial</a>,
      child13:' porque ',
      child14:<b>se determinó que había entrado al sistema, pero no de manera indebida ni causando daño alguno, sino que actuó con la (buena) intención de alertar sobre la facilidad de ejecutar un fraude informático.</b>
    },
    timeline:true,
    video:true
  },
  {
    id: 2,
    avatar: avatars.anon,
    mouseOver: avatars.caso2,
    name: "Gaspar Ortmann",
    tooltip: "Procesado penalmente por identificar\nvulnerabilidades en el sistema de Home\nBanking de Banco Nación.",
    occupation: "",
    year:"2019",
    subtitle:"",
    content:{
      child1:"Logró modificar la cotización del dólar a través de su homebanking del Banco Nación y realizó varias operaciones de compraventa por un total de u$s 11.800. Botón de Ver más para desglosar más información que aparecería de la siguiente manera:\n\nEl 3 de septiembre de 2019, Gaspar ingresó como cualquiera de nosotros/as a su homebanking del Banco de la Nación Argentina -desarrollada y operada por la firma Red Link S.A.- pero con una pequeña gran diferencia: mediante técnicas específicas para detectar vulnerabilidades en sistemas informáticos, descubrió que podía modificar el valor del dólar, corriendo la coma en los valores.\nUna vez modificada la cotización, realizó múltiples operaciones de compraventa de dólares adquiriendo los mismos a $5,695 (cuando la cotización real era de $56,95) y luego vendiéndolos a $530,50 (cuando la real era de $53,05). Todo por un monto total de U$S 11.800.\nEn octubre, Gaspar alertó a RedLink y Banco Nación a través de emails sobre la posibilidad de modificar el valor del dólar. El 23 de ese mes, se presentó personalmente en la entidad bancaria para mostrar las pruebas que tenía, poner a disposición de las autoridades el dinero ganado con las operaciones y así, dejar en claro su transparencia. El 1 de diciembre de ese mismo año, ",
      child2:<a href="https://www.perfil.com/noticias/amp/policia/hackeo-banco-nacion-cambio-valor-dolar-demostrar-fallas-fue-sobreseido.phtml" target="_blank" rel="noopener noreferrer">el Juzgado Criminal Nro. 11 de CABA decretó el sobreseimiento de Gaspar Ariel Ortmann</a>,
      child3:" porque ",
      child4:<b>no se causó ningún daño a los sistemas informáticos de las entidades involucradas</b>,
      child5:". Las modificaciones se realizaron en la computadora donde se accedió a la sesión personal de homebanking, por lo que estrictamente se vieron afectadas las operaciones realizadas desde dicho usuario y no el sistema en general.\nAdemás, no fueron detectadas transferencias de dinero u otro tipo de operaciones que impidieran el recupero de los fondos, así como tampoco la adopción de ningún otro tipo de maniobra que tuviera por objeto encubrir, enmascarar y/o dificultar el rastreo de la procedencia y origen de dichas operaciones.",
    },
    timeline:false,
    video:false,
  }
];
