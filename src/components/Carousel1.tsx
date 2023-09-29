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
      className="carousel1"
    >
      <SwiperSlide className="best-deals">
        <img src="images/offer_banner.png" alt="Slide 1" />
        <h1>
          <span>Best Deal on icy delights</span>
          <br />
          <span>BEAT</span>
          <br />
          <span>THE HEAT</span>
          <br />
          <span>
            <span>UP to</span> <span>50% OFF</span>
          </span>
        </h1>
      </SwiperSlide>
      <SwiperSlide className="best-deals">
        <img src="images/offer_banner.png" alt="Slide 1" />
        <h1>
          <span>Best Deal on icy delights</span>
          <br />
          <span>BEAT</span>
          <br />
          <span>THE HEAT</span>
          <br />
          <span>
            <span>UP to</span> <span>50% OFF</span>
          </span>
        </h1>
      </SwiperSlide>
      <SwiperSlide className="best-deals">
        <img src="images/offer_banner.png" alt="Slide 1" />
        <h1>
          <span>Best Deal on icy delights</span>
          <br />
          <span>BEAT</span>
          <br />
          <span>THE HEAT</span>
          <br />
          <span>
            <span>UP to</span> <span>50% OFF</span>
          </span>
        </h1>
      </SwiperSlide>
      <SwiperSlide className="best-deals">
        <img src="images/offer_banner.png" alt="Slide 1" />
        <h1>
          <span>Best Deal on icy delights</span>
          <br />
          <span>BEAT</span>
          <br />
          <span>THE HEAT</span>
          <br />
          <span>
            <span>UP to</span> <span>50% OFF</span>
          </span>
        </h1>
      </SwiperSlide>
      <SwiperSlide className="best-deals">
        <img src="images/offer_banner.png" alt="Slide 1" />
        <h1>
          <span>Best Deal on icy delights</span>
          <br />
          <span>BEAT</span>
          <br />
          <span>THE HEAT</span>
          <br />
          <span>
            <span>UP to</span> <span>50% OFF</span>
          </span>
        </h1>
      </SwiperSlide>
      <SwiperSlide className="best-deals">
        <img src="images/offer_banner.png" alt="Slide 1" />
        <h1>
          <span>Best Deal on icy delights</span>
          <br />
          <span>BEAT</span>
          <br />
          <span>THE HEAT</span>
          <br />
          <span>
            <span>UP to</span> <span>50% OFF</span>
          </span>
        </h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel1;
