import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import { Header } from "../../components/Header";
import { BreadCrump } from "../../components/BreadCrump";
import { ProductApresentation } from "../../components/ProductApresentation";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

const GET_PRODUCT_BY_CATEGORY_QUERY = gql`
   query GetProductByCategory ($category: String) {
      produtos(where: {category: $category}) {
         image { id, url }
         name,
         size,
         description,
         price
      }
   }
`

interface GetProductBySlugResponse {
   produtos: {
      image: {
         id: string;
         url: string;
      };
      name: string;
      size: [string];
      description: string;
      price: [number]
   }[]
}

let titleSection: string;

export function Product () {
   const { product } = useParams<{ product: string }>();
   const { data, loading } = useQuery<GetProductBySlugResponse>(GET_PRODUCT_BY_CATEGORY_QUERY, {
      variables: {
         category: product
      }
   });

   if(product == "torta-doce") {
      titleSection = "Tortas Doces"
   } else if(product == "torta-salgada") {
      titleSection = "Tortas Salgadas"
   } else if(product == "bolo") {
      titleSection = "Bolos"
   } else if(product == "individual") {
      titleSection = "Individuais"
   }

   return (
      <>
         <Header />

         <BreadCrump
            pageName={titleSection}
         />

         <main className={style.main}>
            <h1 className={style.title}>
               { titleSection }
            </h1>

            <div className={style.container}>
               { loading && ( <div className={style.loading}>Carregando...</div> ) }

               { data?.produtos.length === 0 ? (
                  <div className={style["no-product"]}>
                     <h5>Não encontramos esse produto em nosso estoque</h5>
                  </div>
               ) : (
                  data?.produtos.map((value, index) => {
                     return <ProductApresentation
                        key={index}
                        image={value.image.url}
                        name={value.name}
                        size={value.size}
                        description={value.description}
                        price={value.price}
                     />
                  })
               )}
            </div>
         </main>

         <Footer />
      </>
   );
};
