import { logos } from '../../../../constants'
import "../Timeline.scss";
const TlineButton = ({caso, url ,title}) => {
  return (
    <div className="tlineButton">
        <button className="tlineButton__button">
          <img src={logos.video} alt={caso.label} />
          <span><a href={url} target="_blank" rel="noreferrer">{title}</a></span>
        </button>
    </div>
  )
}

export default TlineButton