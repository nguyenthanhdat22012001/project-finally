import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createStoreSchema } from "validates/sellerValidate";

import "./FormCreateStore.scss";
import AvatarEpty from "assets/images/store-empty.png"

FormCreateStore.propTypes = {
    handleCreateStore: PropTypes.func,
}

function FormCreateStore(props) {
    const [image, setImage] = useState(null);

    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(createStoreSchema) });

    const onLoginSubmit = (data) => {
        const newData = { ...data, img: image };
        props.handleCreateStore(newData);
    };

    const handleChangeImage = (e) => {
        let fileImage = e.target.files[0];
        createImage(fileImage);
    }

    const createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <Box component="form" enctype="multipart/form-data" onSubmit={handleSubmit(onLoginSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="store-image">
                        <label className="label">
                            <input
                                type="file"
                                name="img"
                                onChange={handleChangeImage}
                            />
                            <figure className="store-figure">
                                <img src={image ? image : AvatarEpty} className="store-avatar" alt="avatar" />
                                <figcaption className="store-figcaption">
                                    <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="" />
                                </figcaption>
                            </figure>
                        </label>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="name"
                        label="Tên cửa hàng"
                        name="name"
                        autoComplete="name"
                        {...register("name")}
                        helperText={errors.name && `${errors.name?.message}`}
                        error={errors.name && true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="address"
                        label="Địa chỉ cửa hàng"
                        name="address"
                        autoComplete="address"
                        {...register("address")}
                        helperText={errors.address && `${errors.address?.message}`}
                        error={errors.address && true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="phone"
                        label="Số điện thoại"
                        name="phone"
                        autoComplete="phone"
                        {...register("phone")}
                        helperText={errors.phone && `${errors.phone?.message}`}
                        error={errors.phone && true}
                    />
                </Grid>

            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Đăng Kí cửa hàng
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
        </Box>
    )
}

export default FormCreateStore

