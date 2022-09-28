import { useCallback, useEffect, useState } from "react";
import { ShoppingCart, Trash } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from "../../Modal";
import { CloseButton } from "../../CloseButton";
import { RootStore } from "../../../store";
import {
   incrementQuantity,
   decrementQuantity,
   removeProduct
} from "../../../store/module/product-minicart";

import style from "./style.module.scss";

import ifood from "../../../assets/svgs/ifood.svg";

export function Minicart() {
   const [ isActiveMinicart, setIsActiveMinicart ] = useState<boolean>(false);
   const [ orderCompletionRequest, setOrderCompletionRequest ] = useState<string>();

   let productMinicart = useSelector((store: RootStore) => store.productReduce);
   const dispatch = useDispatch();

   const isToggleMinicart = useCallback(() => {
      setIsActiveMinicart(!isActiveMinicart)

      document.body.classList.toggle("no-scroll")
   }, [isActiveMinicart])
   const deleteRedux = useCallback((id: string) => {
      dispatch(
         removeProduct({ id })
      )
   } , [])
   const updateQuantity = useCallback((id: string, name: string) => {
      if(name === "increment") {
         dispatch(
            incrementQuantity({ id })
         )
      } else if(name === "decrement") {
         dispatch(
            decrementQuantity({ id })
         )
      }
   }, [])

   const total = productMinicart.reduce((index, value) => index + (value.price * value.quantity), 0);

   useEffect(() => {
      if(productMinicart.length > 1) {
         const removeFirstState = productMinicart.slice(1, 100);
         const request = removeFirstState.map(value => {
            return `%0Anome: ${value.name} %0Aquantidade: ${value.quantity} %0Avalor: R$ ${(value.price * value.quantity).toFixed(2).replace(".", ",")}.%0A`
         })

         const id = Math.random().toFixed(9).replace(".", "");

         const apiURL = `https://api.whatsapp.com/send?phone=5522988724559&text=Olá casa das tortas, pedido finalizado: ${request}%0A Total: R$ ${total.toFixed(2).replace(".", ",")}%0A numero do pedido: ${id}`

         setOrderCompletionRequest(apiURL);
      }
   }, [productMinicart])

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

            <span className={style["count-minicart"]}>
               { productMinicart.length == 1 ? (
                  0
               ) : (productMinicart.length) - 1 }
            </span>
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
                                    <div className={style["product-description-container"]}>
                                       <span className={style["product-description-name"]}>
                                          { value.name }
                                       </span>

                                       <Trash
                                          size={15}
                                          className={style["product-description-trash"]}
                                          onClick={() => deleteRedux(value.id)}
                                       />

                                    </div>

                                    <strong className={style["product-description-price"]}>
                                       R$ { Number(value.price * value.quantity).toFixed(2).replace(".", ",") }
                                    </strong>

                                    <span className={style["product-description-quantity"]}>
                                       <button
                                          type="button"
                                          className={style.increment}
                                          onClick={() => updateQuantity(value.id, "increment")}
                                       >
                                          +
                                       </button>

                                       <strong className={style.value}>{ value.quantity }</strong>

                                       <button
                                          type="button"
                                          className={style.decrement}
                                          onClick={() => updateQuantity(value.id , "decrement")}
                                       >
                                          -
                                       </button>
                                    </span>
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
                           <a
                              type="button"
                              href={orderCompletionRequest}
                              target="_blank"
                              className={style["finish-purchase"]}
                           >
                              Finalizar compra via whatsapp
                           </a>

                           <span className={style["finish-options-ifood"]}>
                              Ou em caso de entrega, por favor finalize pelo ifood
                           </span>

                           <a
                              href="https://ifood.com.br/delivery/campinas-sp/casa-das-tortas---ouro-verde-vila-aeroporto/33e4d52d-bad5-4b17-aace-82b9b86f1af0"
                              target="_blank"
                              className={style["finish-ifood"]}
                           >
                              Finalizar compra via ifood
                           </a>
                        </div>
                     </footer>
                  )}
               </div>
            </div>
         </Modal>
      </>
   );
};
