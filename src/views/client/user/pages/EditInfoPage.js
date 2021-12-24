import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
//redux
import { useDispatch, useSelector } from "react-redux";
import { updateUserRedux } from 'redux/actions/AuthAction';
//api 
import userApi from "api/userApi";
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { infoSchema } from "validates/clientValidate";

import "../user.scss";
import Sidebar from "../components/Sidebar";
import ProccessDialog from "components/dialog/ProccessDialog";


function EditInfoPage() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    /*******state*******/
    const [isProccess, setIsProccess] = useState(false);

    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(infoSchema) });

    /**********update user****************/
    const handleUpdateUser = async (data) => {
        try {
            setIsProccess(true);
            const res = await userApi.updateUser(user.id, data);
            if (res.success) {
                dispatch(updateUserRedux());
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            }else{
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
            setIsProccess(false);

        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div className="wrapper_inner">
            {isProccess && <ProccessDialog />} {/* proccess page */}
            <div className="user__wrapper">
                <div className="user__col-left">
                    <Sidebar />
                </div>
                <div className="user__col-right">
                    <h2 className="user__title-page">Chỉnh sửa thông tin tài khoản</h2>
                    <FormControl component="form" onSubmit={handleSubmit(handleUpdateUser)}>
                        <div className="user__info">
                            <div className="user__col-2">
                                <TextField
                                    id="outlined-basic"
                                    margin="normal"
                                    label="Họ tên"
                                    defaultValue={user.name}
                                    variant="outlined"
                                    {...register("name")}
                                    helperText={errors.name && `${errors.name?.message}`}
                                    error={errors.name && true}
                                />
                            </div>
                            <div className="user__col-2">
                                <TextField
                                    id="outlined-basic"
                                    margin="normal"
                                    label="Số điện thoại"
                                    defaultValue={user.phone}
                                    variant="outlined"
                                    {...register("phone")}
                                    helperText={errors.phone && `${errors.phone?.message}`}
                                    error={errors.phone && true}
                                />
                            </div>
                            <div className="user__col-2">
                                <TextField
                                    id="outlined-basic"
                                    margin="normal"
                                    label="Địa chỉ"
                                    defaultValue={user.address}
                                    variant="outlined"
                                    {...register("address")}
                                    helperText={errors.address && `${errors.address?.message}`}
                                    error={errors.address && true}
                                />
                            </div>
                            <div className="user__col-2">
                                <TextField
                                    id="outlined-basic"
                                    margin="normal"
                                    label="Email"
                                    read
                                    value={user.email}
                                    variant="outlined"
                                    {...register("email")}
                                    helperText={errors.email && `${errors.email?.message}`}
                                    error={errors.email && true}
                                />
                            </div>
                            <div className="group-btn-cart mt-5rem" style={{ width: '100%' }}>
                                <Button type='submit' variant="contained" color="primary" size="large">Chỉnh sửa</Button>
                            </div>
                        </div>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default EditInfoPage;