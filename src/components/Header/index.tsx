import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CaretDown, List } from "phosphor-react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { CloseButton } from "../CloseButton";
import { Minicart } from "./Minicart";

import style from "./style.module.scss";

import logo from "../../assets/svgs/logo.svg";
import ifood from "../../assets/svgs/ifood.svg";

const optionsNavigationLink = {
   home: {
      name: "Home",
      link: "/"
   },

   about: {
      name: "Sobre",
      link: "/about-us"
   },

   menu: {
      name: "Menu",
      link: "product"
   },

   contact: {
      name: "Contato",
      link: "/contact"
   },

   dealer: {
      name: "Revendedor",
      link: "/dealer"
   },
};

export function Header() {
   const [ isActiveSubmenu, setIsActiveSubmenu ] = useState<boolean>(false);
   const [ isActiveMenuMobile, setIsActiveMenuMobile ] = useState<boolean>(false);

   const locationURL = useLocation();
   const { product } = useParams<{ product: string }>();

   const currentLocation = locationURL.pathname;

   return (
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

         <Link
            to="/"
            className={style["container-logo"]}
         >
            <img
               src={logo}
               alt="logo Dolce Cannella"
               className={style.logo}
            />

            <span className={style.slogan}>As melhores sobremesas artesanais</span>
         </Link>

         <div className={style["container-nav-link"]}>
            <nav
               className={`${style["header-nav"]} ${isActiveMenuMobile && style.open}`}
            >
               <ul className={`${style["list-container"]} ${isActiveMenuMobile && style.show}`}>
                  <CloseButton
                     event={() => setIsActiveMenuMobile(false)}
                  />

                  {Object.entries(optionsNavigationLink).map(([ key, value ]) => {
                     return <li
                        key={key}
                        className={currentLocation == value.link ?
                           `${style["list-navigation"]} ${style.active}` :
                           style["list-navigation"]}
                     >
                        { value.name === "Menu" ? (
                           <>
                              { currentLocation === "/" || currentLocation == `/produtos/${product}` ? (
                                 <LinkScroll
                                    to={value.link}
                                    smooth={true}
                                    spy={true}
                                    offset={5}
                                    duration={500}
                                    className={style["link-dropdown"]}
                                    onMouseOver={() => setIsActiveSubmenu(true)}
                                 >
                                    Menu

                                    <span
                                       className={`${style["open-submenu"]} ${isActiveSubmenu && style["rotate-arrow"]}`}
                                       onClick={() => setIsActiveSubmenu(!isActiveSubmenu)}
                                    >
                                       <CaretDown size={16} />
                                    </span>
                                 </LinkScroll>
                              ) : (
                                 <Link
                                    to="/produtos/torta-doce"
                                    className={style["link-dropdown"]}
                                    onMouseOver={() => setIsActiveSubmenu(true)}
                                 >
                                    Menu

                                    <span
                                       className={`${style["open-submenu"]} ${isActiveSubmenu && style["rotate-arrow"]}`}
                                       onClick={() => setIsActiveSubmenu(!isActiveSubmenu)}
                                    >
                                       <CaretDown size={16} />
                                    </span>
                                 </Link>
                              ) }

                              { isActiveSubmenu && (
                                 <div
                                    className={style["submenu"]}
                                 >
                                    <Link to="/produtos/torta-doce">Tortas Doces</Link>

                                    <Link to="/produtos/torta-salgada">Tortas Salgadas</Link>

                                    <Link to="/produtos/bolo">Bolos</Link>

                                    <Link to="/produtos/individual">Individuais</Link>
                                 </div>
                              )}
                           </>
                        ) : (
                           <Link
                              to={value.link}
                              className={style["link"]}
                           >
                              { value.name }
                           </Link>
                        )}
                     </li>
                  })}
               </ul>

               <div
                  className={`hidden-modal ${isActiveMenuMobile && "visibility"}`}
                  onClick={() => setIsActiveMenuMobile(false)}
               />
            </nav>

            <a
               href=""
               target="_blank"
               className={style["order-product"]}
            >
               <img
                  src={ifood}
                  alt="clique aqui para acessar nossa conta no ifood"
               />
            </a>

            <Minicart />
         </div>
      </header>
   );
};
