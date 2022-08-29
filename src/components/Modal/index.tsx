import style from "./style.module.scss";

interface ModalProps {
   children: React.ReactNode;
   isActive: boolean;
   event: () => void;
};

export function Modal({ children, isActive, event }: ModalProps) {
   return (
      <div
         className={`${style.modal} ${isActive && style.show}`}
      >
         { children }

         <div className={`hidden-modal ${isActive && "visibility"}`} onClick={event}></div>
      </div>
   );
};
