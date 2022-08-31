import { useCallback, useState } from "react";
import {
   Form,
   Field,
   Formik,
   ErrorMessage,
   FormikHelpers
} from "formik";

import schema from "../../schema/dealerForm";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import style from "./style.module.scss";

interface FormikDealerValues {
   name: string;
   lastName: string;
   companyName: string;
   city: boolean;
   state: boolean;
   email: string;
};

const initialValuesFormik = {
   name: "",
   lastName: "",
   companyName: "",
   city: false,
   state: false,
   email: ""
};

export function Dealer() {
   const handleSubmitForm = useCallback((
      value: FormikDealerValues,
      { resetForm }: FormikHelpers<FormikDealerValues>
    ) => {
      console.log(value)

      resetForm();
   }, [])

   return (
      <>
         <Header />

         <main className={style.dealer}>
            <div className={style["container"]}>
               <h1 className={style.title}>Área de revendedor</h1>

               <p className={style.description}>
                  Caso tenha interesse em trabalhar com a revenda dos nossos produtos, conseguimos lhes ajudar com a nossa tabela de preços personalizada para lhes atender da melhor maneira possível!
               </p>

               <p className={style.description}>
                  Seria necessário somente preencher rapidamente o formulário abaixo para que possamos analisar e entrar em contato para iniciarmos a nossa parceria!
               </p>
            </div>

            <div className={style["container-form"]}>
               <Formik
                  onSubmit={handleSubmitForm}
                  initialValues={initialValuesFormik}
                  validationSchema={schema}
               >
                  { ({ errors, touched, isValid, dirty, values }) => (
                     <Form className={style['form-dealer']}>
                        <fieldset className={style["name-lastName"]}>
                           <div className={style["input-wrapper"]}>
                              <label htmlFor="name">
                                 Nome <span>*</span>
                              </label>

                              <Field
                                 type="text"
                                 name="name"
                                 id="name"
                                 className={errors.name && touched.name && style['error-input']}
                              />

                              <ErrorMessage
                                 component="span"
                                 name="name"
                                 className={ style['error-message'] }
                              />
                           </div>

                           <div className={style["input-wrapper"]}>
                              <label htmlFor="lastName">
                                 Sobrenome <span>*</span>
                              </label>

                              <Field
                                 type="text"
                                 name="lastName"
                                 id="lastName"
                                 className={errors.lastName && touched.lastName && style['error-input']}
                              />

                              <ErrorMessage
                                 component="span"
                                 name="lastName"
                                 className={ style['error-message'] }
                              />
                           </div>
                        </fieldset>

                        <div className={style["input-wrapper"]}>
                           <label htmlFor="companyName">
                              Nome da sua empresa ou estabelecimento
                           </label>

                           <Field
                              type="text"
                              name="companyName"
                              id="companyName"
                              className={errors.companyName && touched.companyName && style['error-input']}
                           />

                           <ErrorMessage
                              component="span"
                              name="companyName"
                              className={ style['error-message'] }
                           />
                        </div>

                        <div className={style["input-wrapper"]}>
                           <label htmlFor="">
                              Localização do seu négocio <span>*</span>
                           </label>

                           <div className={style["checkbox"]}>
                              <Field
                                 type="checkbox"
                                 id="city"
                                 name="city"
                                 className={style["input-checkbox"]}
                                 disabled={values.state == true}
                              />

                              <label htmlFor="city">Campinas</label>

                              <ErrorMessage
                                 component="span"
                                 name="state"
                                 className={ style['error-message'] }
                              />
                           </div>

                           <div className={style["checkbox"]}>
                              <Field
                                 type="checkbox"
                                 id="state"
                                 name="state"
                                 // value="sao paulo"
                                 className={style["input-checkbox"]}
                                 disabled={values.city == true}
                              />

                              <label htmlFor="state">São Paulo</label>

                              <ErrorMessage
                                 component="span"
                                 name="state"
                                 className={ style['error-message'] }
                              />
                           </div>
                        </div>

                        <div className={style["input-wrapper"]}>
                           <label htmlFor="email">
                              E-mail <span>*</span>
                           </label>

                           <Field
                              type="email"
                              name="email"
                              id="email"
                              className={errors.email && touched.email && style['error-input']}
                           />

                           <ErrorMessage
                              component="span"
                              name="email"
                              className={ style['error-message'] }
                           />
                        </div>

                        <div className={style["container-button"]}>
                           <button
                              type="submit"
                              className={style["submit-form"]}
                              disabled={ !(dirty && isValid && values.city == true || values.state == true) }
                           >
                              Enviar
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
            </div>
         </main>

         <Footer />
      </>
   );
};
