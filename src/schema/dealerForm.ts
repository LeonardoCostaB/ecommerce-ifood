import * as yup from "yup";

export default yup.object().shape({
   name: yup
      .string()
      .required("Nome é obrigatório")
      .min(3, "Nome inválido"),

   lastName: yup
      .string()
      .required("Sobrenome é obrigatório")
      .min(3, "Sobrenome inválido"),

   companyName: yup.string(),

   city: yup
      .boolean(),

   state: yup
      .boolean(),

   email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email válido")
});
