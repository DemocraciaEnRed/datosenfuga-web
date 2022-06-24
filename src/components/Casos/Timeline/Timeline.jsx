import { dataTimeline } from "./dataTimeline";
import "./Timeline.scss";
// import TlineButton from "./TlineButton/TlineButton";

const Timeline = ({ id }) => {
  let caso = dataTimeline.find((c) => c.id === id);
  if (!caso) {
    return null;
  } else {
    let quoteKey = 0;
    return (
      <>
        <div className="casos__timeline">
        {/* {caso.button ? <TlineButton caso={caso.button} /> : <></>} */}
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
