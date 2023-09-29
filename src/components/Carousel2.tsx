import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Carousel1 = () => {
  return (
    <Swiper
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={350}
      slidesPerView={3}
      className="brand_slide"
    >
      <SwiperSlide>
        <img src="/images/brand1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/brand3.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel1;
