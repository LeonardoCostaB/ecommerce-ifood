import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../../store/module/product-minicart";

import style from "./style.module.scss";

interface ProductProps {
   image: string;
   name: string;
   size: [string];
   description: string;
   price: [number];
}

export function ProductApresentation({
   image,
   name,
   size,
   description,
   price
}: ProductProps) {
   const [ valuePrice, setValuePrice ] = useState<number>();
   const [ isCheckPrice, setIsCheckPrice ] = useState<boolean>(false);
   const dispatch = useDispatch();

   const isChecked = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setValuePrice(Number(event.target.value));

      setIsCheckPrice(!isCheckPrice);
   }, [isCheckPrice]);

   const saveStorage = useCallback((event: React.MouseEvent<HTMLElement>) => {
      const datasetImage = event.currentTarget.dataset.image;
      const datasetName = event.currentTarget.dataset.name;
      const datasetPrice = event.currentTarget.dataset.price;

      dispatch(
         setProduct({
            image: datasetImage,
            name: datasetName,
            price: Number(datasetPrice)
         })
      );
   }, []);

   return (
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
               </p>

               <div className={style.sku}>
                  <strong>Tamanhos e preços disponível</strong>

                  <div className={style["sku-container"]}>
                     {size.map((value, index) => {
                        return (
                           <span key={index} className={style["product-size"]}>
                              { value }
                           </span>
                        );
                     })}
                  </div>

                  <div className={style["product-price"]}>
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
                                 onChange={(event) => isChecked(event)}
                              />

                              <label
                                 key={index}
                                 htmlFor={`${name}-${value}`}
                                 className={style.price}
                              >
                                 R$ { value.toFixed(2).replace(".", ",") }
                              </label>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>

         <div className={style["container-button"]}>
            <button
               type="submit"
               className={style["add-cart"]}
               data-image={image}
               data-name={name}
               data-size={size}
               data-price={valuePrice}
               onClick={(e) => saveStorage(e)}
               disabled={isCheckPrice == false}
            >
               Adicionar ao carrinho
            </button>
         </div>
      </div>
   );
};
