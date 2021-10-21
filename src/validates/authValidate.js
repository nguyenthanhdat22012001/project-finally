import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .min(18, "mật khẩu ít nhất 18 ký tự")
      .email('Không đúng định dang email'),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "mật khẩu tối đa 8 ký tự")
  });