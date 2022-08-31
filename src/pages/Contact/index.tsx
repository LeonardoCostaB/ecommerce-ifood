import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

export function Contact() {
   return (
      <>
         <Header />

         <main className={style.contact}>
            Hello word
         </main>

         <Footer />
      </>
   );
};
