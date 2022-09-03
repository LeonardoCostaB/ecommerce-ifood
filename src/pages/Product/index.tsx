import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import { Header } from "../../components/Header";
import { ProductApresentation } from "../../components/ProductApresentation";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

import torta from "../../assets/imgs/torta-africana.jpg";

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

export function Product () {
   const { product } = useParams<{ product: string }>();
   const { data, loading } = useQuery<GetProductBySlugResponse>(GET_PRODUCT_BY_CATEGORY_QUERY, {
      variables: {
         category: product
      }
   });

   if(data?.produtos.length === 0) {
      return (
         <div>Produto não disponivel</div>
      );
   };

   console.log(data);

   return (
      <>
         <Header />

         <main className={style.main}>
            <h1 className={style.title}>
               Sessão { product?.replace("-", " ") }
            </h1>

            <div className={style.container}>
               { loading && ( <div>Carregando...</div> ) }

               { data?.produtos.map((value, index) => {
                  return <ProductApresentation
                     key={index}
                     image={value.image.url}
                     name={value.name}
                     size={value.size}
                     description={value.description}
                     price={value.price}
                  />
               })
               }
            </div>
         </main>

         <Footer />
      </>
   );
};
