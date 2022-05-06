import "./Videos.scss"
import videoIcon from '../../assets/iconos/iconoVideo.svg'
const Videos = () => {
  return (
    <div id="casos" className="videos__container">
      <div className="videos__title">
        <h2 className='videos__title--pink'>#datos<span>en</span>fuga #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga #datos<span>en</span>fuga</h2>
        <h2 className='videos__title--white'>#datos<span>en</span>fuga #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga #datos<span>en</span>fuga</h2>
        <h2 className='videos__title--green'>#datos<span>en</span>fuga #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga #datos<span>en</span>fuga</h2>
      </div>
      <div className='videos__box'>
        <iframe width="806" height="456" src="https://www.youtube.com/embed/FIMkE6u9pqs" title="Datos en fuga" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button className="videos__button">
          <img src={videoIcon} alt="download"/>
          <span>Conoce otros casos como este</span>
        </button>
      </div>
    </div>
  )
}

export default Videos