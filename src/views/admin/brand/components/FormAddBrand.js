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
import { brandSchema } from "validates/adminValidate";



FormBrand.propTypes = {
    handleAddBrand: PropTypes.func,
} 

function FormBrand(props) {
    const { handleAddBrand } = props;
    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(brandSchema) });

    const onLoginSubmit = (data) => {
        if (data.hide === "false") {
            data.hide = 0;
        } else {
            data.hide = 1;
        }
        handleAddBrand(data);

    };

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Thêm thương hiệu
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
                    label="Tên thương hiệu"
                    margin="normal"
                    {...register("name")}
                    helperText={errors.name && `${errors.name?.message}`}
                    error={errors.name && true}
                />
                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    margin="normal"
                    label="Mô tả"
                    multiline
                    rows={4}
                    {...register("description")}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel control={<Checkbox  {...register("hide")} />} label="Ẩn" />
                    <Button type="submit" variant="contained">Thêm</Button>
                </Box>
            </Box>
        </div>
    )
}


export default FormBrand

