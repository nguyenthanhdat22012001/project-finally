import * as yup from "yup";


export const createStoreSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Không được để trống"),
    address: yup
        .string()
        .trim()
        .required("Không được để trống"),
    phone: yup
        .string()
        .trim()
        .required("Không được để trống"),
});

const yesterday = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24);
export const couponSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Không được để trống"),
    sku: yup
        .string()
        .trim()
        .required("Không được để trống"),
    description: yup
        .string()
        .trim(),
    price: yup
        .number()
        .min(0, "không được nhỏ hơn 0")
        .typeError('Phải là số')
        .required("Không được để trống"),
    date_begin: yup
        .date()
        .required("Không được để trống")
        .min(yesterday, 'không được nhỏ hơn ngày hôm nay'),
    hide: yup
        .string(),
    date_end: yup
        .date()
        .required("Không được để trống")
        .min(
            yup.ref('date_begin'),
            "phải lớn hơn ngày bắt đầu"
        )
});