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

   const total = productMinicart.reduce((index, value) => index + value.price, 0);

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
                        <div className={style["no-product"]}>No momento sua sacola está vazia</div>
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

                                 <div className={style["product-description"]}>
                                    <span className={style["product-description-name"]}>
                                       { value.name }
                                    </span>

                                    <strong className={style["product-description-price"]}>
                                       R$ { Number(value.price).toFixed(2).replace(".", ",") }
                                    </strong>
                                 </div>
                              </div>
                           );
                        })
                     )}
                  </div>

                  { productMinicart.length > 1 && (
                     <footer className={style["minicart-footer"]}>
                        <div className={style.total}>
                           <span className={style["total-buy"]}>
                              Total
                           </span>

                           <strong className={style["total-amount"]}>
                              R$ { total.toFixed(2).replace(".", ",")}
                           </strong>
                        </div>

                        <div className={style.finish}>
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
                        </div>
                     </footer>
                  )}
               </div>
            </div>
         </Modal>
      </>
   );
};
