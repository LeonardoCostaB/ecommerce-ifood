import style from "./style.module.scss";

interface MinicartProps {
   showMinicart: boolean;
}

export function Minicart({ showMinicart }: MinicartProps) {
   return (
      <div
         className={`${style.minicart} ${showMinicart && style.show}`}
      >
         <span>Minicart</span>
      </div>
   );
};
