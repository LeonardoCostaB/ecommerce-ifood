import { MapPin, FacebookLogo, InstagramLogo, Envelope, WhatsappLogo } from "phosphor-react";

import style from "./style.module.scss";

import logo from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";

export function Footer() {
   return (
      <footer className={style.footer}>
         <div className={style.container}>
            <div className={style["address-shop"]}>
               <address className={style.address}>
                  <a
                     href=""
                     target="_blank"
                     className={style["link-address"]}
                  >
                     <MapPin size={24} />

                     <span>Rua</span>
                  </a>
               </address>

               <address className={style.address}>
                  <a
                     href="mailto:email"
                     target="_blank"
                     className={style["link-address"]}
                  >
                     <Envelope size={24} />
                     <span>email</span>
                  </a>
               </address>
            </div>

            <div className={style["network-time"]}>
               <div className={style.networking}>
                  <a
                     href="https://www.facebook.com/dolcecannellabr"
                     target="_blank"
                  >
                     <FacebookLogo
                        size={30}
                        color="#000000"
                     />
                  </a>

                  <a
                     href="https://www.instagram.com/dolcecannellabr/"
                     target="_blank"
                  >
                     <InstagramLogo
                        size={30}
                        color="#000000"
                     />
                  </a>

                  <a
                     href="https://contate.me/dolcecannella"
                     target="_blank"
                  >
                     <WhatsappLogo size={30} color="#000000" />
                  </a>
               </div>

               <div className={style.time}>
                  <h4>Horário de funcionamento:</h4>
                  <span>segunda a sexta 8:00-18:00</span>
               </div>
            </div>

            <div className={style.finish}>
               <h4 className={style.developed}>
                  Developed by <br />

                  <a
                     href="https://www.linkedin.com/in/leonardo-costa-96641a220/"
                     target="_blank"
                     className={style["link-developed"]}
                  >
                     Leonardo Costa
                  </a>
               </h4>
            </div>
         </div>
      </footer>
   );
};
