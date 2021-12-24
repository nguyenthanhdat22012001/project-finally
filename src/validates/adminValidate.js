import * as yup from "yup";

export const categorySchema = yup.object().shape({
    name: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .trim()
        .required("Không được để trống"),
    description: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .trim(),
    hide: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
});

export const brandSchema = yup.object().shape({
    name: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .trim()
        .required("Không được để trống"),
    description: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .trim(),
    hide: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
});

export const productSchema = yup.object().shape({
    name: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .trim()
        .required("Không được để trống"),
    price: yup
        .number()
        .typeError('Phải là số')
        .min(1, 'phải lớn hơn 0')
        .required("Không được để trống"),
    discount: yup
        .number()
        .typeError('Phải là số')
        .max(100, 'không được lớn hơn 100')
        .min(0, 'không được nhỏ hơn 0'),
    cate_id: yup
        .number()
        .min(1, "Bạn chưa chọn")
        .required("Không được để trống"),
    brand_id: yup
        .number()
        .min(1, "Bạn chưa chọn")
        .required("Không được để trống"),
    shortdescription: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .trim(),
    hide: yup
        .string()
        .max(255, 'Tối đa 255 kí tự'),
    attributes: yup.array().of(
        yup.object().shape({
            id: yup
                .number(),
            name: yup
                .string()
                .max(255, 'Tối đa 255 kí tự')
                .trim()
                .required('Không được để trống'),
            quantity: yup.number()
                .typeError('Phải là số')
                .min(1, 'phải lớn hơn 0')
                .required('Không được để trống'),
        })
            .required('Không được để trống'),
    )
});


export const paymentSchema = yup.object().shape({
    name: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
        .max(255, 'Tối đa 255 kí tự')
        .trim()
        .required("Không được để trống"),
    fee_shipping: yup
        .number()
        .typeError('Phải là số')
        .min(1, 'phải lớn hơn 0')
        .required("Không được để trống"),
    hide: yup
        .string()
        .max(255, 'Tối đa 255 kí tự')
});