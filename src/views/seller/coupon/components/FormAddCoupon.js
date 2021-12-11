import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { couponSchema } from "validates/sellerValidate";
//helper
import {formatdateYMD} from "helper/FormatDate";


const dateInput = formatdateYMD();

FormAddCoupon.propTypes = {
    handleAddCoupon: PropTypes.func,
}


function FormAddCoupon(props) {
    const { handleAddCoupon } = props;
    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(couponSchema) });

    const onLoginSubmit = (data) => {
        if (data.hide === "false") {
            data.hide = 0;
        } else {
            data.hide = 1;
        }
        data.date_begin = formatdateYMD(data.date_begin);
        data.date_end = formatdateYMD(data.date_end);
        // console.log('data',data);
        handleAddCoupon(data);

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
                    {...register("name")}
                    helperText={errors.name && `${errors.name?.message}`}
                    error={errors.name && true}
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Mã khuyến mãi"
                    margin="normal"
                    {...register("sku")}
                    helperText={errors.sku && `${errors.sku?.message}`}
                    error={errors.sku && true}
                />
                <TextField
                    required
                    fullWidth
                    type="number"
                    id="outlined-required"
                    label="Giá khuyến mãi"
                    margin="normal"
                    {...register("price")}
                    helperText={errors.price && `${errors.price?.message}`}
                    error={errors.price && true}
                />
                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    margin="normal"
                    label="Mô tả"
                    multiline
                    rows={4}
                    {...register("description")}
                    helperText={errors.description && `${errors.description?.message}`}
                    error={errors.description && true}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        required
                        type='date'
                        id="outlined-required"
                        label="Ngay bat dau"
                        margin="normal"
                        defaultValue={dateInput}
                        {...register("date_begin")}
                        helperText={errors.date_begin && `${errors.date_begin?.message}`}
                        error={errors.date_begin && true}
                    />
                    <TextField
                        required
                        type='date'
                        id="outlined-required"
                        label="ngay ket thuc"
                        margin="normal"
                        defaultValue={dateInput}
                        {...register("date_end")}
                        helperText={errors.date_end && `${errors.date_end?.message}`}
                        error={errors.date_end && true}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel control={<Checkbox {...register("hide")}  />} label="Ẩn" />
                    <Button type="submit" variant="contained">Thêm danh mục</Button>
                </Box>
            </Box>
        </div>
    )
}


export default FormAddCoupon

