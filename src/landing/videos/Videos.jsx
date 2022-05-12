import "./Videos.scss"
import videoIcon from '../../assets/iconos/iconoVideo.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Videos = () => {
  return (
    <div id="casos" className="videos">
      <div className="videos__title">
        <h2 className='videos__title--pink'>#datos<span>en</span>fuga #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>fuga</h2>
        <h2 className='videos__title--white'>#datos<span>en</span>fuga #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>fuga</h2>
        <h2 className='videos__title--green'>#datos<span>en</span>fuga #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga  #datos<span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>fuga</h2>
      </div>
      <div className='videos__box'>
        <h2 className="videos__subtitle">ABC de Ciberseguridad</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={40}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
        >
          <SwiperSlide>
            <iframe src="https://www.youtube.com/embed/FIMkE6u9pqs" title="¿Nuestros datos están seguros?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe src="https://www.youtube.com/embed/7neHhi_cpsc" title="¿Qué es la #CiberSeguridad?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </SwiperSlide>
        </Swiper>
        <button className="videos__button">
          <img src={videoIcon} alt="download" />
          <span>Conoce otros casos como este</span>
        </button>
      </div>
    </div>
  )
}

export default Videos