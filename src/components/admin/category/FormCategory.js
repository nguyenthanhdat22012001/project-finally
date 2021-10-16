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

//validate
const schema = yup.object().shape({
    cate_name: yup
      .string()
      .required("Không được để trống")
  
  });

function FormCategory(props) {
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
                    label="Tên thương hiệu"
                    margin="normal"
                    {...register("cate_name")}
                    helperText={errors.cate_name && `${errors.cate_name?.message}`}
                    error={errors.cate_name && true}
                />
                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    margin="normal"
                    label="Mô tả"
                    multiline
                    rows={4}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ẩn" />
                    <Button type="submit" variant="contained">Thêm danh mục</Button>
                </Box>
            </Box>
        </div>
    )
}

FormCategory.propTypes = {

}

export default FormCategory

