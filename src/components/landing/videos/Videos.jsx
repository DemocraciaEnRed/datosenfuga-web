import "./Videos.scss";
// import videoIcon from "../../assets/iconos/iconoVideo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";

const Videos = () => {
  // const nextbtn = document.querySelector(".swiper-button-next").addEventListener(onclick, () => {console.log("next")});
  // const prevbtn = document.querySelector(".swiper-button-prev").addEventListener(onclick, () => {console.log("prev")});
  return (
    <div id="ABC" className="videos">
      <div className="videos__title">
        <h2 className="videos__title--pink">
          #datos<span>en</span>fuga #datos<span>en</span>fuga #datos
          <span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>
          fuga #datos<span>en</span>fuga #datos<span>en</span>fuga #datos
          <span>en</span>fuga
        </h2>
        <h2 className="videos__title--white">
          #datos<span>en</span>fuga #datos<span>en</span>fuga #datos
          <span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>
          fuga #datos<span>en</span>fuga #datos<span>en</span>fuga #datos
          <span>en</span>fuga
        </h2>
        <h2 className="videos__title--green">
          #datos<span>en</span>fuga #datos<span>en</span>fuga #datos
          <span>en</span>fuga #datos<span>en</span>fuga #datos<span>en</span>
          fuga #datos<span>en</span>fuga #datos<span>en</span>fuga #datos
          <span>en</span>fuga
        </h2>
      </div>
      <div className="videos__box">
        <h3 className="videos__subtitle">ABC de Ciberseguridad</h3>
        <div className="videos__swiper">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}
            onSlideChange={() => {
              document
                .getElementById("video1")
                .contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
              document
                .getElementById("video2")
                .contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
              document
              .getElementById("video3")
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
              document
              .getElementById("video4")
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }}
          >
            <SwiperSlide>
              <iframe
                id="video1"
                src="https://www.youtube.com/embed/FIMkE6u9pqs?enablejsapi=1"
                title="¿Nuestros datos están seguros?"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="video2"
                src="https://www.youtube.com/embed/7neHhi_cpsc?enablejsapi=1"
                title="¿Qué es la #CiberSeguridad?"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="video3"
                src="https://www.youtube.com/embed/c5uOX2G2NGw?enablejsapi=1"
                title="Vulnerabilidad informática"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe id="video4" width="560" height="315" src="https://www.youtube.com/embed/dF2jmBf8Tko" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <button className="videos__button">
          <img src={videoIcon} alt="download" />
          <span>Conoce otros casos como este</span>
        </button> */}
      </div>
    </div>
  );
};

export default Videos;