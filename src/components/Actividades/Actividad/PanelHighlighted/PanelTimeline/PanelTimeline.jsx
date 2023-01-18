import { useState } from 'react';
import './PanelTimeline.scss';
import TimelineAnswers from './TimelineAnswers';

const PanelTimeline = ({ data }) => {
    const [hidden, setHidden] = useState(true)
    return (
        <div>
            {data.map(({ qn, answ }) => {
                return (
                    <div key={qn.name + Math.floor(Math.random() * 10)}>
                        <h4 className="panel-timeline__question">{qn}</h4>
                        <div className={hidden ? 'panel-timeline__answers-hidden' : ''}>
                            <TimelineAnswers answ={answ} setHidden={setHidden}/>
                        </div>
                        <div className={hidden ? '' : 'panel-timeline__answers-hidden'}>
                            <p style={{ textDecorationLine: 'underline', cursor:'pointer', marginTop: '30px' }} onClick={()=>setHidden(false)}>Ver respuestas de los y las panelistas</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default PanelTimeline