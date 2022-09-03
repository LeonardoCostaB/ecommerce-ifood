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
                           <span
                              key={index}
                              className={style["product-size"]}
                           >
                              { value }
                           </span>
                        );
                     })}
                  </div>

                  <div className={style["product-price"]}>
                     { price.map((value, index) => {
                        return(
                           <strong
                              key={index}
                              className={style.price}
                           >
                              R$ { value.toFixed(2).replace(".", ",") }
                           </strong>
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
            >
               Adicionar ao carrinho
            </button>
         </div>
      </div>
   );
};
