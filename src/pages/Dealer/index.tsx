import { useCallback, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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
   email: string;
   companyName: string;
   city: boolean;
   state: boolean;
   message: string;
};

const initialValuesFormik = {
   name: "",
   lastName: "",
   email: "",
   companyName: "",
   city: false,
   state: false,
   message: ""
};

const CREATE_DISTRIBUTOR_MUTATION = gql`
   mutation CreateDistributor (
      $name: String!,
      $lastName: String!,
      $email:String!,
      $companyName: String,
      $businessLocation: String!,
      $dealerHistory: String!
      ) {
      createDistributor(data: {
         name: $name,
         lastName: $lastName,
         email: $email,
         companyName: $companyName,
         businessLocation: $businessLocation,
         dealerHistory: $dealerHistory,
         }) { name }
   }
`

export function Dealer() {
   const [ createDistributor, { loading, error } ] = useMutation(CREATE_DISTRIBUTOR_MUTATION);
   const [ feedbackRegister, setFeedbackRegister ] = useState<"success" | "error" | "initial">("initial");

   const handleSubmitForm = useCallback(async (
      value: FormikDealerValues,
      { resetForm }: FormikHelpers<FormikDealerValues>
    ) => {
      try {
         await createDistributor({
            variables: {
               name: value.name,
               lastName: value.lastName,
               email: value.email,
               companyName: value.companyName,
               businessLocation: "São Paulo",
               dealerHistory: value.message
            }
         })
         setFeedbackRegister("success");

         resetForm();

         setInterval(() => {
            setFeedbackRegister("initial");
         }, 7000)
      } catch (error) {
         setFeedbackRegister("error");

         setInterval(() => {
            setFeedbackRegister("initial");
         }, 7000)
      }
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
                              <label
                                 htmlFor="name"
                                 className={style.label}
                              >
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
                              <label
                                 htmlFor="lastName"
                                 className={style.label}
                              >
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
                           <label
                              htmlFor="email"
                              className={style.label}
                           >
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

                        <div className={style["input-wrapper"]}>
                           <label
                              htmlFor="companyName"
                              className={style.label}
                           >
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
                           <legend className={style.label}>
                              Localização do seu négocio <span>*</span>
                           </legend>

                           <div className={style["checkbox"]}>
                              <Field
                                 type="checkbox"
                                 id="city"
                                 name="city"
                                 className={style["input-checkbox"]}
                                 disabled={values.state == true}
                              />

                              <label
                                 htmlFor="city"
                                 className={style.label}
                              >
                                 Campinas
                              </label>

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
                                 className={style["input-checkbox"]}
                                 disabled={values.city == true}
                              />

                              <label
                                 htmlFor="state"
                                 className={style.label}
                              >
                                 São Paulo
                              </label>

                              <ErrorMessage
                                 component="span"
                                 name="state"
                                 className={ style['error-message'] }
                              />
                           </div>
                        </div>

                        <div className={style["input-wrapper"]}>
                           <label
                              htmlFor="message"
                              className={style.label}
                           >
                              Conte um pouco da sua história <span>*</span>
                           </label>

                           <Field
                              as="textarea"
                              name="message"
                              id={style.message}
                              className={errors.message && touched.message && style['error-input']}
                           />

                           <ErrorMessage
                              component="span"
                              name="message"
                              className={ style['error-message'] }
                           />
                        </div>

                        <div className={style["container-button"]}>
                           <button
                              type="submit"
                              className={style["submit-form"]}
                              disabled={ !(dirty && isValid && (values.city == true || values.state == true)) }
                           >
                              { loading ? (
                                 <div className={style["lds-dual-ring"]} />
                              ) : (
                                 <>Enviar</>
                              )}
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
            </div>
         </main>

         { feedbackRegister == "success" && (
            <div className={style["submit-success"]}>
               Agradecemos seu interesse, logo mais nossa equipe entrara em contato.
            </div>
         ) || feedbackRegister == "error" && (
            <div className={style["submit-error"]}>
               Infelizmente não conseguimos concluir o seu cadastro, tente novamente.
            </div>
         ) }

         <Footer />
      </>
   );
};
