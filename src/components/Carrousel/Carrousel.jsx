import React from 'react'
import gif from '../../assets/gifs/gifCanilla.gif'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { textos } from '../../constants/textos'
import 'swiper/css';
import 'swiper/css/pagination';
import './Carrousel.scss';

const Carrousel = () => {
  return (
    <section className='app__principal'>
      <div className='app__principal-slider'>
          <h1>#datos<span>en</span>fuga</h1>
          <Swiper
                modules={[ Pagination, Autoplay ]}
                slidesPerView={1}
                spaceBetween={40}
                pagination={{clickable: true}}
                autoplay={{delay: 6000}}
              >
                {
                  textos.map(({ title, text }, id) => {
                    return (
                      <SwiperSlide key={id}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                      </SwiperSlide>
                    )
                  })
                }
          </Swiper> 
      </div>
          <div className='app__principal-gif'>
            <img src={gif} alt="" />
          </div>
    </section>
  )
}

export default Carrousel