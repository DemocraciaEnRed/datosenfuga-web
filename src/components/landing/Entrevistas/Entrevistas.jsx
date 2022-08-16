import React from 'react'
import './Entrevistas.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";

const Entrevistas = () => {
  return (
    <div className='entrevistas' id='entrevistas'>
      <h1 className='entrevistas__title'>ENTREVISTAS</h1>
      <div className='entrevistas__box'>
        <div className='entrevistas__swiper'>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}
            onSlideChange={() => {
              document
                .getElementById("entrevista1")
                .contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
                document
                .getElementById("entrevista2")
                .contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
            }}
          >
            <SwiperSlide>
              <iframe
                id='entrevista1'
                src="https://www.youtube.com/embed/xhNJZSZZvIY?enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id='entrevista2'
                src="https://www.youtube.com/embed/gkeBqwBE0wA?enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </div>
  )
}

export default Entrevistas