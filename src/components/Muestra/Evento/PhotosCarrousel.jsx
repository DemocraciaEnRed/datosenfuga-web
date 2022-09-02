import { eventPhotos } from "../../../assets/evento";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy, Scrollbar } from "swiper";
import "swiper/scss";
import "swiper/scss/lazy";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import "./PhotosCarrousel.scss";

const PhotosCarrousel = () => {
  return (
    <div className="photosCarrousel__swiper">
      <Swiper
        loop={true}
        lazy={true}
        navigation={true}
        scrollbar={{
          draggable: true,
          hide: false,
        }}
        breakpoints={{769: {slidesPerView: 3}}}
        slidesPerView={1}
        // spaceBetween={10}
        centeredSlides={true}
        modules={[Scrollbar, Lazy, Navigation]}
      >
        {eventPhotos.map((photo) => {
          let name = photo.split("/static/media/")[1].split(".")[0];
          return (
            <SwiperSlide key={name}>
              {({ isActive }) => (
                <>
                  <img
                    className={`swiper-lazy ${
                      isActive ? "active" : "inactive"
                    }`}
                    src={photo}
                    alt={name}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PhotosCarrousel;
