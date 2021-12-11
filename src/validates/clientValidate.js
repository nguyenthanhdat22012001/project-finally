import * as yup from "yup";

export const postSchema = yup.object().shape({
  name: yup
    .string()
    .required("Vui lòng nhập tiêu đề")
    .min(16, "tiêu đề ít nhất 16 ký tự"),
});
