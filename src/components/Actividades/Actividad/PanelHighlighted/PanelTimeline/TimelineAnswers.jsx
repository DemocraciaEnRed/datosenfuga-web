import { Fragment } from 'react';
import './TimelineAnswers.scss';
const TimelineAnswers = ({ answ }) => {
    let tlineKey = 0;
    return (
        <>
            <div className="panel-timeline__grid">
                {answ.map((a) => {
                    let dialog = Object.values(a.dialog)
                    tlineKey++
                    return (
                        <Fragment key={'ptline' + tlineKey}>
                            <div className="panel-timeline__answer__column" >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12.5" r="11" fill="black" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="panel-timeline__answer__time">
                                <span>{a.t}</span>
                            </div>
                            <div className="panel-timeline__answer__content">
                                <p className='panel-timeline__answer__content__name'>{a.name}</p>
                                <p className='panel-timeline__answer__content__dialog'>
                                    {dialog}
                                </p>
                            </div>
                        </Fragment>
                    )
                }
                )}
            </div>
        </>
    )
}

export default TimelineAnswers