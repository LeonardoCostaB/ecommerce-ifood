import { X } from "phosphor-react";

import style from "./style.module.scss";

interface CloseButtonProps {
   event: () => void;
};

export function CloseButton({ event }: CloseButtonProps) {
   return (
      <button
         type="button"
         className={style["close-menu"]}
         onClick={event}
      >
         <X size={24} color="#000000"/>
      </button>
   );
};
