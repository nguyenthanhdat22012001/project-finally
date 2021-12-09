import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ProccessDialog from "components/dialog/ProccessDialog";
//noti
import { useSnackbar } from 'notistack';
//api 
import couponApi from "api/couponApi";
//redux
import { useSelector } from "react-redux";
//helper
import { handleNotiDialog } from "helper/notify";
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from "helper/FormatNumber";

import "../user.scss";
import Sidebar from "../components/Sidebar";
import ConfirmDialog from 'components/dialog/ConfirmDialog';


function CouponPage() {
    const { enqueueSnackbar } = useSnackbar();
    const user = useSelector(state => state.auth.user);
    /*******state********/
    const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false, idDelete: null });
    const [isProccess, setIsProccess] = useState(false);
    const [pages, setPages] = useState({
        limit: 2,
        currentPage: 1,
    });
    const [coupons, setCoupon] = useState([]);

    useEffect(async () => {
        await getCouponUserCollection();
    }, [])

    /*************get all product**************/
    const handleChangePage = (event, value) => {

        setPages({
            ...pages,
            currentPage: value,
        });
    };

    /******display product by page******/
    const displayCoupon = [...coupons].slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
        return (
            <tr key={item.id} class="">
                <td>{item.coupon.sku} </td>
                <td> {formatdateDMY(item.coupon.date_begin)} </td>
                <td> {formatdateDMY(item.coupon.date_end)} </td>
                <td> {fCurrencyVN(item.coupon.price)}</td>
                <td>
                    <IconButton
                        aria-label="delete"
                        onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa Voucher: "${item.coupon.sku}" ?`,item.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </td>
            </tr>
        )
    })


    /******* get all coupon********/
    const getCouponUserCollection = async () => {
        try {
            const res = await couponApi.getCouponUserCollection(user.id);
            if (res.success) {
                setCoupon(res.data);

            }

        } catch (error) {
            console.log('error', error);
        }
    }


    /************** handle delete coupon ***************/
    const handleDeleteCoupon = async (id) => {

        try {
            setIsProccess(true);

            const res = await couponApi.deleteCouponUserCollection(id);
            if (res.success) {
                getCouponUserCollection();
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            }
            setIsProccess(false);

        } catch (error) {
            console.log('error: ' + error);
        }
    };

    /************** handle report delete dialogDelete ***************/
    const hanldeReportDeleteDialog = (openDialog, message = '', id = null) => {
        setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message, idDelete: id });
    }
    /************** handle accept delete dialogDelete ***************/
    const hanldeAcceptDelete = () => {
        hanldeReportDeleteDialog(false);
        handleDeleteCoupon(dialogDelete.idDelete);
    }


    return (
        <div className="wrapper_inner">
            {isProccess && <ProccessDialog />} {/* proccess page */}
            <div className="user__wrapper">
                <div className="user__col-left">
                    <Sidebar />
                </div>
                <div className="user__col-right">
                    <h2 className="user__title-page">Mã giảm giá</h2>
                    <div className="user__coupon">
                        <table class="table">
                            <thead>
                                <tr>
                                    {/* <th>Lượt sử dụng</th> */}
                                    <th>Mã</th>
                                    <th>Hiệu lực từ</th>
                                    <th>Hiệu lực đến</th>
                                    <th>Giá trị</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [...coupons].length > 0 ?
                                        displayCoupon
                                        :
                                        <td colSpan={5}>Bạn không có voucher nào</td>
                                }
                            </tbody>
                        </table>
                        <div className="pagin-right">
                            <Stack spacing={2}>
                                <Pagination
                                    count={Math.ceil([...coupons].length / pages.limit)}
                                    page={pages.currentPage}
                                    variant="outlined"
                                    shape="rounded"
                                    onChange={handleChangePage}
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                dialogDelete={dialogDelete}
                hanldeReportDeleteDialog={hanldeReportDeleteDialog}
                hanldeAcceptDelete={hanldeAcceptDelete}
            />
        </div>
    )
}

export default CouponPage;