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