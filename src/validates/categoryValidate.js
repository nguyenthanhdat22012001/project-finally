import * as yup from "yup";

export const categorySchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("Không được để trống"),
    slug: yup
    .string()
    .trim(),
    description: yup
    .string()
    .trim(),
    hide: yup
    .string()
    
  });