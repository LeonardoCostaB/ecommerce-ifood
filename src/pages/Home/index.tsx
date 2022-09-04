import { Link } from "react-router-dom";
''
import { Header } from "../../components/Header";
import { SwiperSlider } from "../../components/SwiperSlide";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

import logo from "../../assets/svgs/logo.svg";
import logoAntigo from "../../assets/imgs/logo-antigo.png";
import alema from "../../assets/imgs/alema.jpg";
import tortaFrango from "../../assets/imgs/torta-de-frango.jpg";
import cremeTrufada from "../../assets/imgs/creme-trufada.jpg";
import petit from "../../assets/imgs/petit.jpg";
import loja from "../../assets/imgs/loja.jpeg";

export function Home() {
   return (
      <>
         <Header />

         <main>
            <section className={style["apresentation-section"]}>
               <div className={style["title-apresentation"]}>
                  <h1 className={style.title}>
                     Sejam Bem Vindos a <strong className="dolce-cannella">Dolce Cannela</strong>
                  </h1>

                  <p className={style.description}>
                     Casa das Tortas agora é Dolce Cannella <br />
                     Dolce Cannella agora é Casa das Tortas
                  </p>

                  <div className={style["comparison-soon"]}>
                     <img
                        src={logoAntigo}
                        alt=""
                        className={style["old-logo"]}
                     />

                     <img
                        src={logo}
                        alt=""
                        className={style.logo}
                     />
                  </div>
               </div>

               <SwiperSlider />
            </section>

            <section className={style["product-list"]}>
               <h2 className={style["section-title"]}>
                  Venha conferir os nossos produtos
               </h2>

               <div className={style.container}>
                  <div className={style.product}>
                     <Link to="/produtos/torta-doce">
                        <img src={alema} alt="" />
                     </Link>

                     <div className={style["product-access"]}>
                        <strong>Torta Doce</strong>

                        <Link to="/produtos/torta-doce">
                           Saiba Mais
                        </Link>
                     </div>
                  </div>

                  <div className={style.product}>
                     <Link to="/produtos/torta-salgada">
                        <img src={tortaFrango} alt="" />
                     </Link>

                     <div className={style["product-access"]}>
                        <strong>Torta Salgada</strong>

                        <Link to="/produtos/torta-salgada">
                           Saiba Mais
                        </Link>
                     </div>
                  </div>

                  <div className={style.product}>
                     <Link to="/produtos/bolo">
                        <img src={cremeTrufada} alt="" />
                     </Link>

                     <div className={style["product-access"]}>
                        <strong>Bolo</strong>

                        <Link to="/produtos/bolo">
                           Saiba Mais
                        </Link>
                     </div>
                  </div>

                  <div className={style.product}>
                     <Link to="/produtos/individual">
                        <img src={petit} alt="" />
                     </Link>

                     <div className={style["product-access"]}>
                        <strong>Individuais</strong>

                        <Link to="/produtos/individual">
                           Saiba Mais
                        </Link>
                     </div>
                  </div>
               </div>
            </section>

            <section className={style["our-story"]}>
               <h2 className={style["section-title"]}>
                  Um pouco da nossa história
               </h2>

               <div className={style["container"]}>
                  <img
                     src={loja}
                     alt="Venha conhecer nossa loja"
                     className={style["shop-img"]}
                  />

                  <div className={style["description"]}>
                     <p className={style.text}>
                        <span>Produzindo tortas e bolos há mais de 25 anos estamos <br /> agora atualizando a nossa marca</span>

                        De "Casa das Tortas" para <strong className="dolce-cannella">Dolce Cannella</strong> Venha nos <br /> conhecer e os nossos produtos.
                     </p>

                     <Link
                        to="/about-us"
                        className={style["access-aboutUs"]}
                     >
                        Saiba Mais
                     </Link>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </>
   );
};
