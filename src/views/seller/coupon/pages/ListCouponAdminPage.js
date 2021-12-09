import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import FormAddCoupon from '../components/FormAddCoupon';
import FormEditCoupon from '../components/FormEditCoupon';
import TableListCoupon from '../components/TableListCoupon';
import ProccessDialog from "components/dialog/ProccessDialog";
import TableSkeleton from "components/skeleton/TableSkeleton";
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
// api
import couponApi from "api/couponApi";
//redux
import { useSelector } from "react-redux";

function ListCouponAdminPage() {
  const user = useSelector(state => state.auth.user);
  /*****state*******/
  const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
  const [listCoupon, setListCoupon] = useState([]);
  const [editCoupon, setEditCoupon] = useState({ isEdit: false, coupon: null });
  const [isProccess, setIsProccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  /*************** loading page when get list coupon ************/
  useEffect(async () => {
    await handleGetListCoupon();
  }, [])
  /************** handle get list coupon ***************/
  const handleGetListCoupon = async () => {
    try {

      if (isLoadFetchApiSuccess) {
        setIsLoadFetchApiSuccess(false);
      }

      const res = await couponApi.getCouponAll();
      if (res.success) {
        const newListCoupon = res.data.map(item => {
          return {
            ...item,
            action: { cou_id: item.id, cou_name: item.name },
          }
        });

        setListCoupon([...newListCoupon]);
        setIsLoadFetchApiSuccess(true);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  };
  /************** handle  edit coupon ***************/
  const handleEditFalse = () => {
    setEditCoupon({ ...editCoupon, isEdit: false, coupon: null })
  }

  /************** handle add coupon ***************/
  const handleAddCoupon = async (data) => {
    const newData = {
      ...data,
      store_id: user.store_id
    }
    try {
      setIsProccess(true);

      const res = await couponApi.addCoupon(newData);
      if (res.success) {
        await handleGetListCoupon();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      } else {
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  };


  /************** handle delete coupon ***************/
  const handleDeleteCoupon = async (id) => {

    try {
      setIsProccess(true);

      const res = await couponApi.deleteCoupon(id);
      if (res.success) {
        handleGetListCoupon();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /************** handle  edit coupon ***************/
  const handleEditCoupon = async (id) => {
    try {
      setIsProccess(true);

      const res = await couponApi.getCouponById(id);
      if (res.success) {
        setEditCoupon({ ...editCoupon, isEdit: true, coupon: res.data });
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  }
  /************** handle update coupon ***************/
  const handleUpdateCoupon = async (id, data) => {
    try {
      setIsProccess(true);

      const res = await couponApi.updateCoupon(id, data);
      if (res.success) {
        handleGetListCoupon();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }
      setIsProccess(false);
      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }
  };


  return (
    <Grid container spacing={3}>
      {isProccess && <ProccessDialog />} {/* proccess page */}

      <Grid item xs={12} sm={6} md={6}>
        {
          isLoadFetchApiSuccess ?
            <TableListCoupon
              listCoupon={listCoupon}
              handleDeleteCoupon={handleDeleteCoupon}
              handleEditCoupon={handleEditCoupon}
              editCoupon={editCoupon}
            />
            : <TableSkeleton />
        }

      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        {
          editCoupon.isEdit ?
            <FormEditCoupon
              key={editCoupon.coupon.id}
              coupon={editCoupon.coupon}
              handleUpdateCoupon={handleUpdateCoupon}
              handleEditFalse={handleEditFalse}
            /> :
            <FormAddCoupon handleAddCoupon={handleAddCoupon} user={user} />
        }

      </Grid>

    </Grid>
  );
}

export default ListCouponAdminPage;
