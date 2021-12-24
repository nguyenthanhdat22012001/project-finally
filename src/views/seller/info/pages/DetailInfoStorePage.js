import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createStoreSchema } from "validates/sellerValidate";
//api
import storeApi from "api/storeApi";
//redux
import { useSelector } from "react-redux";
// notify
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";


import "./DetailInfoStorePage.scss";
import AvatarEpty from "assets/images/store-empty.png";
import ProccessDialog from "components/dialog/ProccessDialog";

function DetailInfoStorePage(props) {
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    /*********state**********/
    const [isProccess, setIsProccess] = useState(false);
    const [image, setImage] = useState(null);
    const [store, setStore] = useState(null);
    //validate
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(createStoreSchema) });

    useEffect(async () => {
        await handleGetStoreByIdUser();
    }, [])

    useEffect(async () => {
        if (store) {
            setValue('name', store.name, { shouldDirty: true });
            setValue('phone', store.phone, { shouldDirty: true });
            setValue('address', store.address, { shouldDirty: true });
            setImage(store.img);
        }
    }, [store])

    /***********handle change image*************/
    const handleGetStoreByIdUser = async () => {
        try {
            const res = await storeApi.getStoreByIdUser(user.id);
            if (res.success) {
                setStore(res.data);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /***********handle update store*************/
    const onLoginSubmit = async (data) => {
        try {
            const newData = {
                ...data,
                img: image,
            };
            setIsProccess(true);

            const res = await storeApi.updateStore(store.id, newData);
            if (res.success) {
                setStore(res.data);
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
            setIsProccess(false);
        } catch (error) {
            console.log('error', error);
        }
    };

    /***********handle change image*************/
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
        <Box component="form" fullWidth noValidate onSubmit={handleSubmit(onLoginSubmit)} >
            {isProccess && <ProccessDialog />} {/* proccess page */}
            <Grid container >
                <Grid item xs={12} sx={{ pb: 4 }}>
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

                <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Tên cửa hàng
                    </Typography>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        autoComplete="name"
                        {...register("name")}
                        helperText={errors.name && `${errors.name?.message}`}
                        error={errors.name && true}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Địa chỉ cửa hàng
                    </Typography>
                    <TextField
                        fullWidth
                        id="address"
                        name="address"
                        autoComplete="address"
                        {...register("address")}
                        helperText={errors.address && `${errors.address?.message}`}
                        error={errors.address && true}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Số điện thoại
                    </Typography>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        autoComplete="phone"
                        {...register("phone")}
                        helperText={errors.phone && `${errors.phone?.message}`}
                        error={errors.phone && true}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4, display: 'flex', alignItems: 'flex-end' }}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cập nhật
                    </Button>
                </Grid>
            </Grid>
        </Box>

    )
}

export default DetailInfoStorePage

