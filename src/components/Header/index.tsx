import style from "./style.module.scss";

import logo from "../../assets/svgs/logo.svg";

const optionsNavigationLink = {
   home: {
      name: "Início",
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
   }
};

export function Header() {
   return (
      <header className={style["header-container"]}>
         <div className={style["header-row-top"]}>
            <img src={logo} alt="" />

            <h2>Seja bem vindo(a) a <span className="dolce-cannella">Dolce Cannella</span></h2>

            <div className={style["search-product"]}>
               <label htmlFor=""></label>
               <input type="text" placeholder="Pesquisar produto" />
            </div>
         </div>

         <nav>
            <ul className={style["list-container"]}>
               {Object.entries(optionsNavigationLink).map(([ key, value ]) => {
                  return <li
                     key={key}
                     className={style["list-navigation"]}
                  >
                     <a
                        href={value.link}
                        className={style["link-navigation"]}
                     >
                        { value.name }
                     </a>
                  </li>
               })}
            </ul>
         </nav>
      </header>
   );
};
