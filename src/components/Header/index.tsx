import { useState } from "react";
import { List, CaretDown, X, ShoppingCart } from "phosphor-react";

import style from "./style.module.scss";

import logo from "../../assets/svgs/logo.svg";
import ifood from "../../assets/svgs/ifood.svg";
import { Minicart } from "./Minicart";

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
   const [ isActiveMenuMobile, setIsActiveMenuMobile ] = useState<boolean>(false);
   const [ isActiveMinicart, setIsActiveMinicart ] = useState<boolean>(false);

   return (
      <>
         <header className={style["header-container"]}>
            <button
               type="button"
               className={style["menu-hamburguer"]}
               onClick={() => setIsActiveMenuMobile(true)}
            >
               <List
                  size={24}
                  color="#000000"
                  weight="bold"
               />
            </button>

            <img
               src={logo}
               alt="logo Dolce Cannella"
               className={style.logo}
            />

            <div className={style["container-nav-link"]}>
               <nav className={style["header-nav"]}>
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

               { isActiveMenuMobile && (
                  <nav className={`${style["header-nav"]} ${style["mobile"]}`}>
                     <button
                        type="button"
                        className={style["close-menu"]}
                        onClick={() => setIsActiveMenuMobile(false)}
                     >
                        <X size={24} />
                     </button>

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

                                       <span
                                          className={`${style["open-submenu"]} ${isActiveSubmenu && "animation-arrow"}`}
                                          onClick={() => setIsActiveSubmenu(!isActiveSubmenu)}
                                       >
                                          <CaretDown size={16} />
                                       </span>
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
               )}

               <a
                  href="#"
                  className={style["order-product"]}
               >
                  Faça o seu pedido

                  <span className={style["order-product-icon"]}>
                     <img
                        src={ifood}
                        alt="clique aqui para acessar nossa conta no ifood"
                     />
                  </span>
               </a>

               <button
                  type="button"
                  onClick={() => setIsActiveMinicart(true)}
               >
                  <ShoppingCart
                     size={24}
                  />
               </button>
            </div>
         </header>

         {isActiveMinicart && (
            <div
               style={{
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  backgroundColor: "#000000",
                  opacity: 0.5

               }}
               onClick={() => setIsActiveMinicart(false)}
            >
               <Minicart showMinicart={isActiveMinicart}/>
            </div>
         )}

      </>


   );
};
