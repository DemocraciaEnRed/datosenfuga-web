import { useState, useEffect } from 'react';
import './PanelTimeline.scss';
import TimelineAnswers from './TimelineAnswers';

const PanelTimeline = ({ data }) => {

    const [answShown, setAnswShown] = useState([])

    useEffect(()=>{setAnswShown([])},[data])
    
    const showAnswer = (idAnsw) => {
        if (answShown.length > 0) {
            if (answShown.find(x => x === idAnsw) !== undefined) { return true }
            return false
        }
    }

    const spliceAnswer = (idAnsw) => {
        const copy = [...answShown]
        const answIndex = copy.findIndex((id) => id === idAnsw);
        copy.splice(answIndex, 1);
        return copy
    }

    const addAnswer = (idAnsw) => {
        if (answShown.length > 0) {
            const copy = [...answShown]
            copy.push(idAnsw)
            return copy
        }
        return [idAnsw]
    }

    return (
        <div className="panel-timeline">
            {data.map(({ id, qn, answ }) => {
                return (
                    <div key={id + answ[0].t + answ[0].name}>
                        <h4 className="panel-timeline__question">{qn}</h4>
                        {showAnswer(id) ?
                            <>
                                <div>
                                    <TimelineAnswers answ={answ} />
                                </div>
                                <div>
                                    <p className='panel-timeline__toggle' onClick={() => setAnswShown(spliceAnswer(id))}>Ocultar respuestas</p>
                                </div>
                            </>
                            :
                            <p className='panel-timeline__toggle' onClick={() => setAnswShown(addAnswer(id))}>Ver respuestas de los y las panelistas</p>
                        }
                    </div>
                )
            })}
        </div >
    )
}

export default PanelTimeline