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
import { paymentSchema } from "validates/adminValidate";



FormEditPayment.propTypes = {
    handleUpdatePayment: PropTypes.func,
    handleEditFalse: PropTypes.func,
    payment: PropTypes.object,
}

FormEditPayment.defaultProps = {
    handleUpdatePayment: null,
    handleEditFalse: null,
    payment: null,
}

function FormEditPayment(props) {
    const { payment, handleUpdatePayment, handleEditFalse } = props;
    const [inputHide, setInputHide] = useState(payment.hide === 1 ? true : false);
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
        handleUpdatePayment(payment.id, data);

    };
    /************** handle update payment ***************/
    const handleChangeHide = () => {
        setInputHide(!inputHide);
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Chỉnh sửa danh mục "{payment.name}"
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
                    defaultValue={payment.name}
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
                    defaultValue={payment.fee_shipping}
                    {...register("fee_shipping")}
                    helperText={errors.fee_shipping && `${errors.fee_shipping?.message}`}
                    error={errors.fee_shipping && true}
                />
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


export default FormEditPayment;

