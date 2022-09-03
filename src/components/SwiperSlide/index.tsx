import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swiper.scss";
import style from "./style.module.scss";

import pedacoCheesecake from "../../assets/imgs/pedaco-cheesecake.jpg";
import tortaAfricana from "../../assets/imgs/torta-africana.jpg";
import cremeTrufada from "../../assets/imgs/creme-trufada.jpg";

export function SwiperSlider() {
   return (
      <Swiper
         modules={[ Navigation, Pagination, Autoplay ]}
         spaceBetween={50}
         slidesPerView={1}
         loop={true}
         navigation
         autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction : false
         }}
         pagination={{ clickable: true }}
      >
         <SwiperSlide>
            <img
               src={pedacoCheesecake}
               alt="pedaco cheesecake"
               className={style["image-slider"]}
            />
         </SwiperSlide>

         <SwiperSlide>
            <img
               src={tortaAfricana}
               alt="torta africana"
               className={style["image-slider"]}
            />
         </SwiperSlide>

         <SwiperSlide>
            <img
               src={cremeTrufada}
               alt="torta de creme trufada"
               className={style["image-slider"]}
            />
         </SwiperSlide>
      </Swiper>
   );
};
