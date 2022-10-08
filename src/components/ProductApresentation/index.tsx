import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setProduct } from "../../store/module/product-minicart";

import style from "./style.module.scss";

interface ProductProps {
   image: string;
   name: string;
   size: [string];
   description: string;
   productAvailable: boolean;
   glutem: boolean;
   price: [number];
}

export function ProductApresentation({
   image,
   name,
   size,
   description,
   productAvailable,
   glutem,
   price
}: ProductProps) {
   const [ valuePrice, setValuePrice ] = useState<number>();
   const [ isCheckPrice, setIsCheckPrice ] = useState<boolean>(false);
   const [ addCart, setAddCart ] = useState<boolean>(false);
   const dispatch = useDispatch();

   const location = useLocation();
   const productName = location.pathname;
   const urlSaltPieCake = productName == "/produtos/torta-salgada" || productName == "/produtos/bolo";
   const urlIndividual = productName == "/produtos/individual";

   const isChecked = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setValuePrice(Number(event.target.value));

      setIsCheckPrice(!isCheckPrice);
   }, [isCheckPrice]);

   const setInformations = useCallback((event: React.MouseEvent<HTMLElement>) => {
      const id = event.currentTarget.dataset.id;
      const image = event.currentTarget.dataset.image;
      const name = event.currentTarget.dataset.name;
      const price = event.currentTarget.dataset.price;

      dispatch(
         setProduct({
            id,
            image,
            name,
            price: Number(price)
         })
      );

      setIsCheckPrice(false);

      setAddCart(true);
   }, []);

   useEffect(() => {
      setInterval(() => {
         setAddCart(false);
      }, 10000);
   }, [addCart])

   return (
      <>
         <div className={style.product}>
            <div className={style["product-image"]}>
               <img
                  src={image}
                  alt={name}
                  className={style.image}
               />
            </div>

            <div className={style["product-title"]}>
               <div className={style["product-name"]}>
                  <h4 className={style.name}>
                     { name }
                  </h4>
               </div>

               <div className={style["product-description-price"]}>
                  <p className={style.description}>
                     { description }

                     { glutem && <span className={style.glutem}>contém glúten</span>}
                  </p>

                  { productAvailable && (
                     <div className={style.sku}>
                        <strong>Tamanhos e preços disponíveis</strong>

                        <div className={`${style["sku-container"]} ${urlSaltPieCake && style["salt-pie-cake"]} ${urlIndividual && style.individual}`}>
                           { size.map((value, index) => {
                              return (
                                 <span key={index} className={style["product-size"]}>
                                    { value }
                                 </span>
                              );
                           })}
                        </div>

                        <div className={`${style["product-price"]} ${ urlSaltPieCake && style["salt-pie-cake"]} ${urlIndividual && style.individual}`}>
                           { price.map((value, index) => {
                              return(
                                 <div
                                    key={index}
                                    className={style["input-wrapper"]}
                                 >
                                    <input
                                       type="checkbox"
                                       id={`${name}-${value}`}
                                       value={value}
                                       defaultChecked={isCheckPrice}
                                       disabled={isCheckPrice && valuePrice != value}
                                       checked={isCheckPrice && valuePrice == value}
                                       onChange={(event) => isChecked(event)}
                                       className={style.checkbox}
                                    />

                                    <label
                                       key={index}
                                       htmlFor={`${name}-${value}`}
                                       className={`${style.price} ${isCheckPrice && valuePrice != value && style.disabled}`}
                                    >
                                       R$ { value.toFixed(2).replace(".", ",") }
                                    </label>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  )}
               </div>
            </div>

            { productAvailable && (
               <div className={style["container-button"]}>
                  <button
                     type="submit"
                     className={style["add-cart"]}
                     data-id={`${name}-${valuePrice}`}
                     data-image={image}
                     data-name={name}
                     data-size={size}
                     data-price={valuePrice}
                     onClick={(e) => setInformations(e)}
                     disabled={isCheckPrice == false}
                  >
                     Adicionar ao carrinho
                  </button>
               </div>
            )}
         </div>

         { addCart && (
            <div className={style["message-cart"]}>
               Produto adicionado com sucesso
            </div>
         )}
      </>
   );
};
