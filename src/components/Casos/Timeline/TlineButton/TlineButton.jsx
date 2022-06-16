import { logos } from '../../../../constants'
import "../Timeline.scss";
const TlineButton = ({caso}) => {
  return (
    <div className="tlineButton">
        <p className="tlineButton__title">{caso.title}</p>
        <button className="tlineButton__button">
          <img src={logos.video} alt={caso.label} />
          <span><a href={caso.url} target="_blank" rel="noreferrer">{caso.label}</a></span>
        </button>

    </div>
  )
}

export default TlineButton