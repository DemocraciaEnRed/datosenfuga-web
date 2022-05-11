import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import './Carrousel.scss';

const Carrousel = () => {
  return (
    <section className='app__principal'>
      <div className='app__principal-slider'>
        <div className='app__principal-container'>
          <h1>#datos<span>en</span>fuga</h1>
          <Swiper
                modules={[ Pagination, Autoplay ]}
                slidesPerView={1}
                spaceBetween={40}
                pagination={{clickable: true}}
                autoplay={{delay: 6000}}
              >
                <SwiperSlide>
                  <h2>¿Que queremos?</h2>
                  <p> 
                    Queremos que el <strong>Estado</strong> asegure <strong>estándares de ciberseguridad</strong> y que atienda a las alarmas que suenan por todos lados.<br /> 
                    <br />
                    Queremos que el <strong>Estado</strong> deje de <strong>perseguir penalmente</strong> a quienes identifican, denuncian y <strong>reportan vulnerabilidades informáticas.</strong>
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <h2>¿Por que nos interesa?</h2>
                  <p>
                    Porque las <strong>filtraciones que sufrieron diversas reparticiones del Estado</strong> en el último tiempo nos hace temer que <strong>sus sistemas son vulnerables.</strong><br />
                    Porque <strong>nos sentimos cada  vez más expuestos al mal uso de nuestros datos para distintos fines, ninguno bueno.</strong><br />
                    Porque <strong>se persigue penalmente a activistas de la comunidad</strong> de seguridad informática, que podrían ayudar.<br />
                    Porque <strong>se legitima una “cultura del miedo” que silencia el debate</strong> en materia de seguridad informática.<br />
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <h2>¿Que es la ciberseguridad?</h2>
                  <p>
                    La ciberseguridad es el conjunto de prácticas, políticas y herramientas para proteger los datos de quienes operamos en Internet.<br />
                    Es lo que podemos hacer para cuidar nuestros datos de las ciberamenzas.
                  </p>
                </SwiperSlide>
          </Swiper> 
        </div>
      </div>
    </section>
  )
}

export default Carrousel