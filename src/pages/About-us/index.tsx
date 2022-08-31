import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

export function AboutUs() {
   return (
      <>
         <Header />

         <main className={style.main}>
            <h1 className={style.title}>Quem somos nós?</h1>

            <p className={style.description}>
               Em 1999 duas irmãs começavam a fazer mini tortinhas nos fundos de sua casa, e ali surgia a Casa das Tortas. O tempo foi passando e começaram a fazer tortas e a aceitação foi tão grande que a demanda aumentou, o espaço ficou pequeno e tiveram que mudar pra um galpão.
            </p>

            <p className={style.description}>
               Durante 20 anos, a Casa das Tortas, atendeu com excelência todo o estado de São Paulo e com a qualidade do produto intacta. E agora estamos passando por um processo de modernização da nossa marca. De "Casa das Tortas" para "Dolce Cannella", nomes diferentes, mas a qualidade continua sempre a mesma!
            </p>
         </main>

         <Footer />
      </>
   );
};
