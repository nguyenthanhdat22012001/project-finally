import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//validate
import { postSchema } from "validates/clientValidate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextAreaFroala from "../components/TextAreaFroala";

FormEditPost.propTypes = {
    post: PropTypes.object,
    handleUpdatePost: PropTypes.func,
}
FormEditPost.defaultProps = {
    post: null,
    handleUpdatePost: null,
}

function FormEditPost(props) {
    const { post, handleUpdatePost } = props;
    /******state*****/
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setDescription(post?.description);
        setName(post?.name);
    }, [post])

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
        handleUpdatePost(post.id,obj);
    }
    /*********handle change description***********/
    const handleOnChangeDescription = (text) => {
        setDescription(text);
    }
    /*********handle change input name***********/
    const handleOnChangeInput = (e) => {
        setName(e.target.value);
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
                autoFocus
                value={name}
                {...register("name")}
                helperText={errors.name && `${errors.name?.message}`}
                error={errors.name && true}
                onChange={handleOnChangeInput}
            />
            <Typography variant="subtitle1" gutterBottom component="div">
                Mô tả bài viết
            </Typography>
            <TextAreaFroala
                handleOnChangeDescription={handleOnChangeDescription}
                description={description}
            />
            <Button type="submit" variant="contained" color="primary" size="medium" sx={{ margin: "30px 25px" }}>
                Cập nhật bài viết
            </Button>
        </Box>
    )
}

export default FormEditPost

