import { useCallback, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";

import { Modal } from "../../Modal";
import { CloseButton } from "../../CloseButton";
import { RootStore } from "../../../store";

import style from "./style.module.scss";


export function Minicart() {
   const [ isActiveMinicart, setIsActiveMinicart ] = useState<boolean>(false);
   const productMinicart = useSelector((store: RootStore) => store.productReduce);

   const isToggleMinicart = useCallback(() => {
      setIsActiveMinicart(!isActiveMinicart)

      document.body.classList.toggle("no-scroll")
   }, [isActiveMinicart])

   return (
      <>
         <button
            type="button"
            onClick={isToggleMinicart}
            className={style["button-minicart"]}
         >
            <ShoppingCart
               size={30}
            />

            <span className={style["count-minicart"]}>{ productMinicart.length == 1 ? (
               <>0</>
            ) : ((productMinicart.length) - 1 ) }</span>
         </button>

         <Modal
            isActive={isActiveMinicart}
            event={isToggleMinicart}
         >
            <div className={`${style.minicart} ${isActiveMinicart && style.show}`}>
               <div className={style["minicart-container"]}>
                  <header className={style["minicart-header"]}>
                     <span>Seu carrinho</span>

                     <CloseButton event={isToggleMinicart} />
                  </header>

                  <div className={style["minicart-product"]}>
                     { productMinicart.length == 1 ? (
                        <div className={style["no-product"]}>No momento sua sacola está fazia</div>
                     ) : (
                        productMinicart.map((value, key) => {
                           return (
                              <div
                                 key={key}
                                 className={style.product}
                              >
                                 <div className={style["product-image"]}>
                                    <img src={value.image} alt="" />
                                 </div>
                                 <span>{ value.name }</span>
                              </div>
                           );
                        })
                     )}
                  </div>

                  <footer className={style["minicart-footer"]}>
                     <button
                        type="button"
                        className={style["finish-purchase"]}
                     >
                        Finalizar compra via whatsapp
                     </button>

                     <button
                        type="button"
                        className={style["finish-purchase"]}
                     >
                        Pagar e retirar no local
                     </button>
                  </footer>
               </div>
            </div>
         </Modal>
      </>
   );
};
