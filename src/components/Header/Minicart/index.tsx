import { useState } from "react";
import { ShoppingCart } from "phosphor-react";

import style from "./style.module.scss";
import { Modal } from "../../Modal";
import { CloseButton } from "../../CloseButton";

export function Minicart() {
   const [ isActiveMinicart, setIsActiveMinicart ] = useState<boolean>(false);

   return (
      <>
         <button
            type="button"
            onClick={() => setIsActiveMinicart(true)}
         >
            <ShoppingCart
               size={24}
            />
         </button>

         <Modal
            isActive={isActiveMinicart}
            event={() => setIsActiveMinicart(false)}
         >
            <div
               className={`${style.minicart} ${isActiveMinicart && style.show}`}
            >
               <CloseButton
                  event={() => setIsActiveMinicart(false)}
               />

               <span>Minicart</span>
            </div>
         </Modal>
      </>
   );
};
