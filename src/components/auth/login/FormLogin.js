import React from 'react';
import PropTypes from 'prop-types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {loginSchema} from "validates/authValidate";

FormLogin.propTypes = {
    onHandleLogin: PropTypes.func,
}

function FormLogin(props) {
    const {onHandleLogin } = props;

    const [values, setValues] = React.useState({
        weightRange: '',
        showPassword: false,
      });

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({ resolver: yupResolver(loginSchema) });
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
    return (
        <Box component="form" noValidate onSubmit={handleSubmit(onHandleLogin)} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email")}
                helperText={errors.email && `${errors.email?.message}`}
                error={errors.email && true}
            />
            <FormControl fullWidth variant="outlined" sx={{ marginTop: '16px' }}>
                <InputLabel htmlFor="outlined-adornment-password" color={errors.password && 'error'}>Mật khẩu</InputLabel>
                <OutlinedInput
                    {...register("password")}
                    he
                    error={errors.password && true}
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
                {errors.password && <FormHelperText sx={{ color: 'red' }} id="outlined-weight-helper-text">{errors.password?.message}</FormHelperText>}
            </FormControl>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Đăng Nhập
            </Button>

            <Grid container>
                <Grid item xs>
                    <Link to="/forgot-password" variant="body2">
                        Quên Mật Khẩu?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/register" variant="body2" color="primary">
                        {"Chưa có tài khoản? Đăng Kí"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormLogin

