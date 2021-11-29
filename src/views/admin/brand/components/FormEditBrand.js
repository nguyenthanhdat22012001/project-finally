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
import { brandSchema } from "validates/adminValidate";



FormEditBrand.propTypes = {
    handleUpdateBrand: PropTypes.func,
    handleEditFalse: PropTypes.func,
    brand: PropTypes.object,
}

FormEditBrand.defaultProps = {
    handleUpdateBrand: null,
    handleEditFalse: null,
    brand: null,
}

function FormEditBrand(props) {
    const { brand, handleUpdateBrand, handleEditFalse } = props;
    const [inputHide, setInputHide] = useState(brand.hide === 1 ? true : false);
    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(brandSchema) });

    const onLoginSubmit = (data) => {
        if (data.hide === "false") {
            data.hide = 0;
        } else {
            data.hide = 1;
        }
        handleUpdateBrand(brand.id, data);

    };
    /************** handle update brand ***************/
    const handleChangeHide = () => {
        setInputHide(!inputHide);
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Chỉnh sửa danh mục "{brand.name}"
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
                    defaultValue={brand.name}
                    {...register("name")}
                    helperText={errors.name && `${errors.name?.message}`}
                    error={errors.name && true}
                />
                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    margin="normal"
                    label="Mô tả"
                    multiline
                    rows={4}
                    defaultValue={ brand.description}
                    {...register("description")}
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


export default FormEditBrand;

