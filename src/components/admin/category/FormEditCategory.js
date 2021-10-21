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
import { categorySchema } from "../../../validates/categoryValidate";



FormEditCategory.propTypes = {
    handleUpdateCategory: PropTypes.func,
    handleEditFalse: PropTypes.func,
    category: PropTypes.object,
}

FormEditCategory.defaultProps = {
    handleUpdateCategory: null,
    handleEditFalse: null,
    category: null,
}

function FormEditCategory(props) {
    const { category, handleUpdateCategory,handleEditFalse } = props;

    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(categorySchema) });

    const onLoginSubmit = (data) => {
        if (data.hide === "false") {
            data.hide = 0;
        } else {
            data.hide = 1;
        }
        handleUpdateCategory(category.id, data);

    };

    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Chỉnh sửa danh mục "{category && category.name}"
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
                    defaultValue={category && category.name}
                    {...register("name")}
                    helperText={errors.name && `${errors.name?.message}`}
                    error={errors.name && true}
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Slug"
                    margin="normal"
                    defaultValue={category && category.slug}
                    {...register("slug")}
                />
                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    margin="normal"
                    label="Mô tả"
                    multiline
                    rows={4}
                    defaultValue={category && category.description}
                    {...register("description")}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FormControlLabel control={<Checkbox checked={category && category.hide === 1 ? true : false} {...register("hide")} />} label="Ẩn" />
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


export default FormEditCategory;

