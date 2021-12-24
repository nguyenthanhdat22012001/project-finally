import * as yup from "yup";

export const postSchema = yup.object().shape({
  name: yup
    .string()
    .required("Vui lòng nhập tiêu đề")
    .min(16, "tiêu đề ít nhất 16 ký tự"),
});


export const checkOutSchema = yup.object().shape({
  name: yup
    .string()
    .max(255, 'Tối đa 255 kí tự')
    .trim()
    .required("Không được để trống"),
  phone: yup
    .string()
    .required("Không được để trống")
    .max(10,'Tối đa 10 kí tự')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'không đúng định dạng'),
  address: yup
    .string()
    .max(255, 'Tối đa 255 kí tự')
    .trim()
    .required("Không được để trống"),
  note: yup
    .string()
    .max(255, 'Tối đa 255 kí tự')
    .trim(),
  payment_id: yup
    .number()
    .min(1, "Bạn chưa chọn"),
});

export const infoSchema = yup.object().shape({
  name: yup
    .string()
    .max(255, 'Tối đa 255 kí tự')
    .trim()
    .required("Không được để trống"),
  phone: yup
    .string()
    .required("Không được để trống")
    .max(10,'Tối đa 10 kí tự')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'không đúng định dạng'),
  address: yup
    .string()
    .max(255, 'Tối đa 255 kí tự')
    .trim()
    .required("Không được để trống"),
    email: yup
    .string()
    .required("Vui lòng nhập email")
    .min(16, "email ít nhất 16 ký tự")
    .email('Không đúng định dang email'),
});