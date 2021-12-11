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
import { categorySchema } from "validates/adminValidate";


FormCategory.propTypes = {
    handleAddCategory: PropTypes.func,
} 

function FormCategory(props) {
    const { handleAddCategory } = props;
    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(categorySchema) });

    const onLoginSubmit = (data) => {
        if (data.hide === "false") {
            data.hide = 0;
        } else {
            data.hide = 1;
        }
        handleAddCategory(data);

    };

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Thêm danh mục sản phẩm
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
                    label="Tên danh mục"
                    margin="normal"
                    {...register("name")}
                    helperText={errors.name && `${errors.name?.message}`}
                    error={errors.name && true}
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Slug"
                    margin="normal"
                    {...register("slug")}
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
                    <Button type="submit" variant="contained">Thêm danh mục</Button>
                </Box>
            </Box>
        </div>
    )
}


export default FormCategory

