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
                           href="mailto:email"
                           target="_blank"
                           className={style.email}
                        >
                           <Envelope size={24} className={style["email-icon"]}/>
                           <span>email</span>
                        </a>
                     </address>

                     <address className={style.address}>
                        <a
                           href="https://"
                           target="_blank"
                           className={style.whatsapp}
                        >
                           <WhatsappLogo size={30} className={style["whatsapp-icon"]} />

                           <span>Dolce Cannella</span>
                        </a>
                     </address>

                     <address className={style["address-whats"]}>
                        <a href="https://" target="_blank">
                           Telefone
                        </a>
                     </address>

                     <address className={style.address}>
                        <MapPin size={24} />
                        <span>Rua</span>
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
