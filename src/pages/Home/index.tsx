import { Header } from "../../components/Header";
import { SwiperSlider } from "../../components/SwiperSlide";

import style from "./style.module.scss";

import alema from "../../assets/imgs/alema.jpg";
import chocolate from "../../assets/imgs/chocolate.jpg";
import cremeTrufada from "../../assets/imgs/creme-trufada.jpg";
import ferrero from "../../assets/imgs/ferrero.jpg";

const products = {
  sweetPie: {
   img: {
      src: "",
      alt: ""
   },
   name: "",
   link: ""
  },

  saltPie: {
   img: {
      src: "",
      alt: ""
   },
   name: "",
   link: ""
  },

  cake: {
   img: {
      src: "",
      alt: ""
   },
   name: "",
   link: ""
  },

  individual: {
   img: {
      src: "",
      alt: ""
   },
   name: "",
   link: ""
  }
}

export function Home() {
   return (
      <>
         <Header />

         <main>
            <section className={style["apresentation-section"]}>
               <div className={style["title-apresentation"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur libero asperiores delectus, pariatur natus dolores repudiandae temporibus odit excepturi adipisci rem dicta harum ex tenetur inventore tempora assumenda explicabo.
               </div>

               <SwiperSlider />
            </section>

            <section className={style["product-list"]}>
               <h2 className={style["section-title"]}>Confira todos os nossos sabores</h2>

               <div className={style.container}>
                  <div className={style.product}>
                     <a href="">
                        <img src={alema} alt="" />
                     </a>

                     <div className={style["product-access"]}>
                        <strong>Torta Doce</strong>

                        <a href="">
                           Saiba Mais
                        </a>
                     </div>
                  </div>

                  <div className={style.product}>
                     <a href="">
                        <img src={chocolate} alt="" />
                     </a>

                     <div className={style["product-access"]}>
                        <strong>Torta Salgada</strong>

                        <a href="">
                           Saiba Mais
                        </a>
                     </div>
                  </div>

                  <div className={style.product}>
                     <a href="">
                        <img src={cremeTrufada} alt="" />
                     </a>

                     <div className={style["product-access"]}>
                        <strong>Bolo</strong>

                        <a href="">
                           Saiba Mais
                        </a>
                     </div>
                  </div>

                  <div className={style.product}>
                     <a href="">
                        <img src={ferrero} alt="" />
                     </a>

                     <div className={style["product-access"]}>
                        <strong>Individuais</strong>

                        <a href="">
                           Saiba Mais
                        </a>
                     </div>
                  </div>
               </div>
            </section>
         </main>

      </>
   );
};
