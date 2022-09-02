import { eventPhotos } from "../../../assets/evento";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Lazy } from "swiper";
import "swiper/scss";
import "swiper/scss/lazy";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./PhotosCarrousel.scss";

const PhotosCarrousel = () => {

  return (
    <div className="photosCarrousel__swiper">
      <Swiper
        loop={true}
        lazy={true}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={10}
        pagination={{
            type: "progressbar",
          }}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
      >
        {eventPhotos.map((photo) => {
          let name = photo.split("/static/media/")[1].split(".")[0];
          return (
            <SwiperSlide key={name}>
              {({ isActive }) => (
                <>
                  <img
                    className={`swiper-lazy ${isActive? 'active': 'inactive'}`}
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
