import { useState } from 'react';
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
import { formatdateYMD } from "helper/FormatDate";


FormEditCoupon.propTypes = {
    handleUpdateCoupon: PropTypes.func,
    handleEditFalse: PropTypes.func,
    coupon: PropTypes.object,
}

FormEditCoupon.defaultProps = {
    handleUpdateCoupon: null,
    handleEditFalse: null,
    coupon: null,
}

function FormEditCoupon(props) {
    const { coupon, handleUpdateCoupon, handleEditFalse } = props;
    const [inputHide, setInputHide] = useState(coupon.hide === 1 ? true : false);
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
        handleUpdateCoupon(coupon.id, data);
    };
    /************** handle update coupon ***************/
    const handleChangeHide = () => {
        setInputHide(!inputHide);
    }

    return (
        <div>
            {console.log('date',coupon.date_begin)}
            <Typography variant="h5" gutterBottom component="div">
                Chỉnh sửa danh mục "{coupon.name}"
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
                    defaultValue={coupon.name}
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
                    defaultValue={coupon.sku}
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
                    defaultValue={coupon.price}
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
                    defaultValue={coupon.description}
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
                        defaultValue={coupon.date_begin}
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
                        defaultValue={coupon.date_end}
                        {...register("date_end")}
                        helperText={errors.date_end && `${errors.date_end?.message}`}
                        error={errors.date_end && true}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={inputHide ? true : false}
                                {...register("hide")}
                                onChange={handleChangeHide}
                            />
                        }
                        label="Ẩn" />

                    <Button type="submit" variant="contained">Chỉnh sửa</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleEditFalse}
                    >Quay lại</Button>
                </Box>
            </Box>
        </div>
    )
}


export default FormEditCoupon;

