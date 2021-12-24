import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//validate
import { postSchema } from "validates/clientValidate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextAreaFroala from "../components/TextAreaFroala";

function FormAddPost(props) {
    const [description, setDescription] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(postSchema) });

    const handleOnSubmit = (data) => {
        const obj = {
            ...data,
            description: description,
        }
        props.handleAddPost(obj);
    }
    /*********handle change description***********/
    const handleOnChangeDescription = (text) => {
        setDescription(text);
    }

    return (
        <Box component="form" noValidate onSubmit={handleSubmit(handleOnSubmit)}>
            <Typography variant="subtitle1" gutterBottom component="div">
                Tiêu đề bài viết
            </Typography>
            <TextField
                fullWidth
                margin="normal"
                label="Tiêu đề bài viết"
                variant="outlined"
                {...register("name")}
                helperText={errors.name && `${errors.name?.message}`}
                error={errors.name && true}
            />
            <Typography variant="subtitle1" gutterBottom component="div">
                Mô tả bài viết
            </Typography>
            <TextAreaFroala handleOnChangeDescription={handleOnChangeDescription} description={description} />
            <Button type="submit" variant="contained" color="primary" size="medium" sx={{ margin: "30px 25px" }}>
                Đăng bài viết
            </Button>
        </Box>
    )
}

export default FormAddPost

