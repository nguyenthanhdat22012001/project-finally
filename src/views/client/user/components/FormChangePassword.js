import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "validates/authValidate";

import "../user.scss";

FormChangePassword.propTypes = {
    handleChangePasswordSubmit: PropTypes.func,
}

function FormChangePassword(props) {
    const { handleChangePasswordSubmit } = props;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(changePasswordSchema) });

    return (
        <FormControl component="form" onSubmit={handleSubmit(handleChangePasswordSubmit)}>
            <div className="user__info">
                <div className="user__col-2">
                    <TextField
                        type="password"
                        label="Mật khẩu cũ"
                        name="old_password"
                        margin="normal"
                        variant="outlined"
                        id="old_password"
                        {...register("old_password")}
                        helperText={errors.old_password && `${errors.old_password?.message}`}
                        error={errors.old_password && true}
                    />
                </div>
                <div className="user__col-2">
                    <TextField
                        type="password"
                        label="Mật khẩu mới"
                        name="password"
                        margin="normal"
                        variant="outlined"
                        id="password"
                        {...register("password")}
                        helperText={errors.password && `${errors.password?.message}`}
                        error={errors.password && true}
                    />
                </div>
                <div className="user__col-2">
                   
                </div>
                <div className="user__col-2">
                    <TextField
                        type="password"
                        label="Xác nhận mật khẩu"
                        name="password_confirmation"
                        margin="normal"
                        variant="outlined"
                        id="password_confirmation"
                        {...register("password_confirmation")}
                        helperText={errors.password_confirmation && `${errors.password_confirmation?.message}`}
                        error={errors.password_confirmation && true}
                    />
                </div>
                <div className="group-btn-cart mt-2rem" style={{ width: '100%' }}>
                    <Button type="submit" variant="contained" color="primary" size="medium">Chỉnh sửa</Button>
                </div>
            </div>
        </FormControl>
    )
}



export default FormChangePassword

