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

   email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email válido"),

   companyName: yup.string(),

   city: yup.boolean(),
   state: yup.boolean(),

   message: yup
      .string()
      .required("Messagem obrigatória")
      .min(5, "conte um pouco mais sobre você")
});
