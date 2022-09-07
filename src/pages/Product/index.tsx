import { Link, useParams } from "react-router-dom";
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

            <section className={style.products}>
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
            </section>

            <section className={style["other-products"]} id="product">
               <h2 className={style["other-products-title"]}>Confira também:</h2>

               <div className={style["other-products-links"]}>
                  <Link to="/produtos/torta-doce">
                     Tortas Doces
                  </Link>

                  <Link to="/produtos/torta-salgada">
                     Tortas Salgadas
                  </Link>

                  <Link to="/produtos/bolo">
                     Bolos
                  </Link>

                  <Link to="/produtos/individual">
                     Individuais
                  </Link>
               </div>
            </section>
         </main>

         <Footer />
      </>
   );
};
