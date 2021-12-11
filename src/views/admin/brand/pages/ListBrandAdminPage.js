import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';


import FormAddBrand from '../components/FormAddBrand';
import FormEditBrand from '../components/FormEditBrand';
import TableListBrand from '../components/TableListBrand';
import ProccessDialog from "components/dialog/ProccessDialog";
import TableSkeleton from "components/skeleton/TableSkeleton";
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
// api
import brandApi from "api/brandApi";

function ListBrandAdminPage() {
  const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
  const [listBrand, setListBrand] = useState([]);
  const [editBrand, setEditBrand] = useState({ isEdit: false, brand: null });
  const [isProccess, setIsProccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  /*************** loading page when get list brand ************/
  useEffect(async () => {
    await handleGetListBrand();
  }, [])
  /************** handle get list brand ***************/
  const handleGetListBrand = async () => {
    try {

      if (isLoadFetchApiSuccess) {
        setIsLoadFetchApiSuccess(false);
      }

      const res = await brandApi.getBrandAll();
      if (res.success) {
        const newListBrand = res.data.map(item => {
          return {
            ...item,
            action: { br_id: item.id, br_name: item.name },
          }
        });

        setListBrand([...newListBrand]);
        setIsLoadFetchApiSuccess(true);
        console.log(res.data);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  };
  /************** handle  edit brand ***************/
  const handleEditFalse = () => {
    setEditBrand({ ...editBrand, isEdit: false, brand: null })
  }

  /************** handle add brand ***************/
  const handleAddBrand = async (data) => {
    try {
      setIsProccess(true);

      const res = await brandApi.addBrand(data);
      if (res.success) {
        await handleGetListBrand();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }else{
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  };


  /************** handle delete brand ***************/
  const handleDeleteBrand = async (id) => {

    try {
      setIsProccess(true);

      const res = await brandApi.deleteBrand(id);
      if (res.success) {
        handleGetListBrand();
        setIsProccess(false);
        handleNotiDialog(enqueueSnackbar, 'xóa thương hiệu thành công', 'success');
      }


    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /************** handle  edit brand ***************/
  const handleEditBrand = async (id) => {
    try {
      setIsProccess(true);

      const res = await brandApi.getBrandById(id);
      if (res.success) {
        setEditBrand({ ...editBrand, isEdit: true, brand: res.data });
        setIsProccess(false);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  }
  /************** handle update brand ***************/
  const handleUpdateBrand = async (id, data) => {

    try {
      setIsProccess(true);

      const res = await brandApi.updateBrand(id, data);
      if (res.success) {
        handleGetListBrand();
        setIsProccess(false);
        handleNotiDialog(enqueueSnackbar, 'cập nhật thương hiệu thành công', 'success');
      }

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
            <TableListBrand
              listBrand={listBrand}
              handleDeleteBrand={handleDeleteBrand}
              handleEditBrand={handleEditBrand}
            />
            : <TableSkeleton />
        }

      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        {
          editBrand.isEdit ?
            <FormEditBrand
              key={editBrand.brand.id}
              brand={editBrand.brand}
              handleUpdateBrand={handleUpdateBrand}
              handleEditFalse={handleEditFalse}
            /> :
            <FormAddBrand handleAddBrand={handleAddBrand} />
        }

      </Grid>

    </Grid>
  );
}

export default ListBrandAdminPage;
