import { dataTimeline } from "./dataTimeline";
import "./Timeline.scss";
import TlineButton from "./TlineButton/TlineButton";

const Timeline = ({ id }) => {
  let caso = dataTimeline.find((c) => c.id === id);
  if (!caso) {
    return null;
  } else {
    return (
      <>
        <div className="timeline">
        {caso.button ? <TlineButton caso={caso.button} /> : <></>}
          <div className="timeline__grid">
            {caso.quotes.map((q) => {
              return (
                <>
                  <div key={caso.id} className="timeline__column">
                    <img src={caso.avatar} alt={`avatar${caso.title}`} />
                  </div>
                  <div className="timeline__quote">
                    <p>{caso.title}</p>
                    <p>{q}</p>
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
