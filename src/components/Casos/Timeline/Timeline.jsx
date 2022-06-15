import { dataTimeline } from "./dataTimeline";
import "./Timeline.scss"

const Timeline = ({ id }) => {

    let caso = dataTimeline.find((c) => c.id === id)
    console.log(caso)
    return (
        <div className="timeline">
            <div className="timeline__grid">
                {caso.quotes.map(q => {
                    return (
                        <>
                            <div className="timeline__column">
                                <img src={caso.avatar} alt={`avatar${caso.title}`} />
                            </div>
                            <div className="timeline__quote">
                                <h3>{caso.title}</h3>
                                <p>{q}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Timeline