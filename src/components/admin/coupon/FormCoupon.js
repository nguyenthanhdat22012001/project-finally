import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//helper
import {formatdateYMD} from "../../../helper/FormatDate";

const  yesterday =  new Date((new Date()).valueOf() - 1000*60*60*24);
const dateInput = formatdateYMD();
//validate
const schema = yup.object().shape({
    cou_name: yup
        .string()
        .trim()
        .required("Không được để trống"),
    cou_sku: yup
        .string()
        .trim()
        .required("Không được để trống"),
    cou_beginDay: yup
        .date()
        .required("Không được để trống")
        .min(yesterday, 'khong duoc nho hon ngay hom nay'),
    cou_endDay: yup
        .date()
        .required("Không được để trống")
        .min(
            yup.ref('cou_beginDay'),
            "ngay ket thuc phai sau ngay bat dau"
          )
});


function FormCoupon(props) {

    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const onLoginSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Thêm khuyến mãi
            </Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onLoginSubmit)}
            >
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Tiêu đề"
                    margin="normal"
                    {...register("cou_name")}
                    helperText={errors.cou_name && `${errors.cou_name?.message}`}
                    error={errors.cou_name && true}
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Mã khuyến mãi"
                    margin="normal"
                    {...register("cou_sku")}
                    helperText={errors.cou_sku && `${errors.cou_sku?.message}`}
                    error={errors.cou_sku && true}
                />
                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    margin="normal"
                    label="Mô tả"
                    multiline
                    rows={4}
                />
                   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    required
                    type='date'
                    id="outlined-required"
                    label="Ngay bat dau"
                    margin="normal"
                    defaultValue={dateInput}
                    {...register("cou_beginDay")}
                    helperText={errors.cou_beginDay && `${errors.cou_beginDay?.message}`}
                    error={errors.cou_beginDay && true}
                />
                <TextField
                    required
                    type='date'
                    id="outlined-required"
                    label="ngay ket thuc"
                    margin="normal"
                    defaultValue={dateInput}
                    {...register("cou_endDay")}
                    helperText={errors.cou_endDay && `${errors.cou_endDay?.message}`}
                    error={errors.cou_endDay && true}
                />
                   </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ẩn" />
                    <Button type="submit" variant="contained">Thêm danh mục</Button>
                </Box>
            </Box>
        </div>
    )
}

FormCoupon.propTypes = {

}

export default FormCoupon

