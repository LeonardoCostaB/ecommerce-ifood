import { GoogleMaps } from "../../components/GoogleMaps";
import { Envelope, MapPin, WhatsappLogo } from "phosphor-react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

export function Contact() {
   return (
      <>
         <Header />

         <main className={style.contact}>
            <h1 className={style.title}>Contato</h1>

            <div className={style.container}>
               <div className={style.informations}>
                  <div className={style["informations-wrapper"]}>
                     <address className={style.address}>
                        <a
                           href="mailto:contato@dolcecannella.com.br"
                           target="_blank"
                           className={style.email}
                        >
                           <Envelope size={24} className={style["email-icon"]}/>
                           <span>contato@dolcecannella.com.br</span>
                        </a>
                     </address>

                     <address className={style.address}>
                        <a
                           href="https://contate.me/dolcecannella"
                           target="_blank"
                           className={style.whatsapp}
                        >
                           <WhatsappLogo size={30} className={style["whatsapp-icon"]} />

                           <span>Dolce Cannella</span>
                        </a>
                     </address>

                     <address className={style["address-whats"]}>
                        <a href="https://wa.me/5519996946584" target="_blank">
                           (19) 996946584
                        </a>
                     </address>

                     <address className={style.address}>
                        <MapPin size={24} />
                        <span>Avenida Jacaúna 977</span>
                     </address>
                  </div>
               </div>

               <div className={style["container-map"]}>
                  <GoogleMaps />
               </div>
            </div>
         </main>

         <Footer />
      </>
   );
};
