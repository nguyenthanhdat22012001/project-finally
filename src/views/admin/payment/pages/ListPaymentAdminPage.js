import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';


import FormAddPayment from '../components/FormAddPayment';
import FormEditPayment from '../components/FormEditPayment';
import TableListPayment from '../components/TableListPayment';
import ProccessDialog from "components/dialog/ProccessDialog";
import TableSkeleton from "components/skeleton/TableSkeleton";
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
// api
import paymentApi from "api/paymentApi";

function ListPaymentAdminPage() {
  const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
  const [listPayment, setListPayment] = useState([]);
  const [editPayment, setEditPayment] = useState({ isEdit: false, payment: null });
  const [isProccess, setIsProccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  /*************** loading page when get list payment ************/
  useEffect(async () => {
    await handleGetListPayment();
  }, [])
  /************** handle get list payment ***************/
  const handleGetListPayment = async () => {
    try {

      if (isLoadFetchApiSuccess) {
        setIsLoadFetchApiSuccess(false);
      }

      const res = await paymentApi.getPaymentAll();
      if (res.success) {
        const newListPayment = res.data.map(item => {
          return {
            ...item,
            action: { pay_id: item.id, pay_name: item.name },
          }
        });

        setListPayment([...newListPayment]);
        setIsLoadFetchApiSuccess(true);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  };
  /************** handle  edit payment ***************/
  const handleEditFalse = () => {
    setEditPayment({ ...editPayment, isEdit: false, payment: null })
  }

  /************** handle add payment ***************/
  const handleAddPayment = async (data) => {
    try {
      setIsProccess(true);

      const res = await paymentApi.addPayment(data);
      if (res.success) {
        await handleGetListPayment();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }else{
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  };


  /************** handle delete payment ***************/
  const handleDeletePayment = async (id) => {

    try {
      setIsProccess(true);

      const res = await paymentApi.deletePayment(id);
      if (res.success) {
        handleGetListPayment();
        handleNotiDialog(enqueueSnackbar, 'xóa thành công', 'success');
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /************** handle  edit payment ***************/
  const handleEditPayment = async (id) => {
    try {
      setIsProccess(true);

      const res = await paymentApi.getPaymentById(id);
      if (res.success) {
        setEditPayment({ ...editPayment, isEdit: true, payment: res.data });
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  }
  /************** handle update payment ***************/
  const handleUpdatePayment = async (id, data) => {

    try {
      setIsProccess(true);

      const res = await paymentApi.updatePayment(id, data);
      if (res.success) {
        handleGetListPayment();
        handleNotiDialog(enqueueSnackbar, 'cập nhật thành công', 'success');
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
            <TableListPayment
              listPayment={listPayment}
              handleDeletePayment={handleDeletePayment}
              handleEditPayment={handleEditPayment}
            />
            : <TableSkeleton />
        }

      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        {
          editPayment.isEdit ?
            <FormEditPayment
              key={editPayment.payment.id}
              payment={editPayment.payment}
              handleUpdatePayment={handleUpdatePayment}
              handleEditFalse={handleEditFalse}
            /> :
            <FormAddPayment handleAddPayment={handleAddPayment} />
        }

      </Grid>

    </Grid>
  );
}

export default ListPaymentAdminPage;
