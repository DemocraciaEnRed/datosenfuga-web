import { dataTimeline } from "./dataTimeline";
import "./Timeline.scss";
import TlineButton from "./TlineButton/TlineButton";

const Timeline = ({ id }) => {
  let caso = dataTimeline.find((c) => c.id === id);
  if (!caso) {
    return null;
  } else {
    let quoteKey = 0;
    return (
      <>
        <div className="casos__timeline">
          {caso.id === 3 ? 
          <div>
            <h2 className="casos__timeline-titulo">Conoce mas sobre el caso</h2>
            <div className="casos__timeline-botones">
              <TlineButton caso={caso.button} title="Escucha el podcast" url="https://open.spotify.com/episode/1PhH3TtC4YqydxmDDW49YN?si=I0RuIERwQsy5-uDyECD-tA&nd=1" />
              <TlineButton caso={caso.button} title="Blog de Javier" url="https://blog.smaldone.com.ar/2021/12/08/sobreseido-y-aca-no-ha-pasado-nada/" />
              <TlineButton caso={caso.button} title="Nota periodistica" url="https://www.lanacion.com.ar/tecnologia/varios-detenidos-robo-datos-del-sistema-informatico-nid2295293/" />
            </div>
          </div>
            : ''
          }
          <h2>Te contamos los hechos en primera persona</h2>
          <div className="casos__timeline-grid">
            {caso.quotes.map((q) => {
              quoteKey ++
              return (
                <>
                  <div className="casos__timeline-column">
                    <img src={caso.avatar} alt={`avatar${caso.title}`} />
                  </div>
                  <div className="casos__timeline-quote">
                    <p>{caso.title}</p>
                    <p key={"timeline"+caso.id+quoteKey}>{q}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Timeline;
