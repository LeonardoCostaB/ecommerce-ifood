import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";
import { GoogleMaps } from "../../components/GoogleMaps";
import { Envelope, MapPin, WhatsappLogo } from "phosphor-react";

export function Contact() {
   return (
      <>
         <Header />

         <main className={style.contact}>
            <h1 className={style.title}>Contato</h1>

            <div className={style.container}>
               <div className={style["container-map"]}>
                  <GoogleMaps />
               </div>

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

                     <span className={style.options}>ou nos visite</span>

                     <address className={style.address}>
                        <MapPin size={24} />
                        <span>Avenida Jacaúna 977</span>
                     </address>
                  </div>
               </div>

            </div>

         </main>

         <Footer />
      </>
   );
};
