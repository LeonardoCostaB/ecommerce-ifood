import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swiper.scss";
import style from "./style.module.scss";

import alema from "../../assets/imgs/alema.jpg";
import chocolate from "../../assets/imgs/chocolate.jpg";
import cremeTrufada from "../../assets/imgs/creme-trufada.jpg";
import ferrero from "../../assets/imgs/ferrero.jpg";

export function SwiperSlider() {
   return (
      <Swiper
         modules={[ Navigation, Pagination, Autoplay ]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction : false
         }}
         pagination={{ clickable: true }}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
      >
         <SwiperSlide>
            <img
               src={alema}
               alt="torta alemã"
               className={style["image-slider"]}
            />
         </SwiperSlide>

         <SwiperSlide>
            <img
               src={chocolate}
               alt="torta de chocolate"
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

         <SwiperSlide>
            <img
               src={ferrero}
               alt="torta ferrero"
               className={style["image-slider"]}
            />
         </SwiperSlide>
      </Swiper>
   );
};
