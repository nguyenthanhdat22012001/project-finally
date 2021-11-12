import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .min(16, "email ít nhất 18 ký tự")
    .email('Không đúng định dang email'),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự")
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Nhập ít nhất 8 ký tự")
    .max(50, "Nhập tối đa 50 ký tự")
    .required("Vui lòng nhập họ tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .min(16, "email ít nhất 16 ký tự")
    .email('Không đúng định dang email'),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự"),
  confirm_password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")],
        "Xác mật khẩu không khớp"
      ),
    })
});

export const changePasswordSchema = yup.object().shape({
  old_password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự"),
  password_confirmation: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự")
    .when("new_password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("new_password")],
        "Xác mật khẩu không khớp"
      ),
    })
});


export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .min(16, "email ít nhất 16 ký tự")
    .email('Không đúng định dang email'),
});