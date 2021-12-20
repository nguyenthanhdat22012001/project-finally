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
import { paymentSchema } from "validates/adminValidate";



FormPayment.propTypes = {
    handleAddPayment: PropTypes.func,
}

function FormPayment(props) {
    const { handleAddPayment } = props;
    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(paymentSchema) });

    const onLoginSubmit = (data) => {
        if (data.hide === "false") {
            data.hide = 0;
        } else {
            data.hide = 1;
        }
        handleAddPayment(data);

    };

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Thêm phương thức thanh toán
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
                    label="Tên phương thức thanh toán"
                    margin="normal"
                    {...register("name")}
                    helperText={errors.name && `${errors.name?.message}`}
                    error={errors.name && true}
                />
                <TextField
                   required
                    fullWidth
                    type="number"
                    label="Phí ship"
                    name="fee_shipping"
                    {...register("fee_shipping")}
                    helperText={errors.fee_shipping && `${errors.fee_shipping?.message}`}
                    error={errors.fee_shipping && true}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel control={<Checkbox  {...register("hide")} />} label="Ẩn" />
                    <Button type="submit" variant="contained">Thêm</Button>
                </Box>
            </Box>
        </div>
    )
}


export default FormPayment

