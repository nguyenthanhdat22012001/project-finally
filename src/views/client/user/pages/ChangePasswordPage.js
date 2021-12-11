import {useState} from "react";
// api
import userApi from "api/userApi";
// notify
import { useSnackbar } from 'notistack';

import "../user.scss";
import Sidebar from "../components/Sidebar";
import FormChangePassword from '../components/FormChangePassword';
import ProccessDialog from "components/dialog/ProccessDialog";

function ChangePasswordPage() {
    const [isProccess, setIsProccess] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    /*************** handle change password ************/
    const handleChangePasswordSubmit = async (data) => {
        try {
            setIsProccess(true);
            const res = await userApi.changePassword(data);

            if (res.success) {
                setIsProccess(false);
                handleNotiDialog(res.message,'success');
            }else{
                setIsProccess(false);
                handleNotiDialog(res.message,'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    }
    /************** handle noti dialog***************/
    const handleNotiDialog = (message, status) => {
        enqueueSnackbar(message, {
            variant: status,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
        });
    };

    return (
        <div className="wrapper_inner">
               {isProccess && <ProccessDialog />} {/* proccess page */}
            <div className="user__wrapper">
                <div className="user__col-left">
                    <Sidebar />
                </div>
                <div className="user__col-right">
                    <h2 className="user__title-page">Thay đổi mật khẩu</h2>
                    <FormChangePassword handleChangePasswordSubmit={handleChangePasswordSubmit} />
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordPage

