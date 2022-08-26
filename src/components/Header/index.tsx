import style from "./style.module.scss";

import logo from "../../assets/svgs/logo.svg";
import { useState } from "react";

const optionsNavigationLink = {
   home: {
      name: "Home",
      link: "/"
   },

   about: {
      name: "Sobre",
      link: "about-us"
   },

   menu: {
      name: "Menu",
      link: "menu"
   },

   contact: {
      name: "Contato",
      link: "contact"
   },

   dealer: {
      name: "Revendedor",
      link: "dealer"
   },
};

export function Header() {
   const [ isActiveSubmenu, setIsActiveSubmenu ] = useState<boolean>(false);

   return (
      <header className={style["header-container"]}>
         <img src={logo} alt="" />

         <div className={style["container-nav-link"]}>
            <nav>
               <ul className={style["list-container"]}>
                  {Object.entries(optionsNavigationLink).map(([ key, value ]) => {
                     return <li
                        key={key}
                        className={style["list-navigation"]}
                     >
                        { value.link === "menu" ? (
                           <>
                              <button
                                 type="button"
                                 className={style["link-dropdown"]}
                                 onMouseOver={() => setIsActiveSubmenu(true)}
                              >
                                 Menu
                              </button>

                              { isActiveSubmenu && (
                                 <div
                                    className={style["submenu"]}
                                 >
                                    <a href="#">Tortas Doces</a>

                                    <a href="#">Tortas Salgadas</a>

                                    <a href="#">Bolos</a>

                                    <a href="#">Individuais</a>
                                 </div>
                              )}

                           </>
                        ) : (
                           <a
                              href={value.link}
                              className={style["link"]}
                           >
                              { value.name }
                           </a>
                        )}
                     </li>
                  })}
               </ul>
            </nav>

            <button className={style["order-product"]}>
               Faça o seu pedido
            </button>
         </div>
      </header>
   );
};
