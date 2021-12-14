import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
// api
import productApi from "api/productApi";
//redux
import { useSelector } from "react-redux";

import TableListProduct from '../components/TableListProduct';
import ProccessDialog from "components/dialog/ProccessDialog";
import TableSkeleton from "components/skeleton/TableSkeleton";


function ListProductPage() {
  const user = useSelector(state => state.auth.user);
  /*****state*******/
  const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const [isProccess, setIsProccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  
  /*************** loading page when get list Product ************/
  useEffect(async () => {
    await handleGetListProduct();
  }, [])
  /************** handle get list Product ***************/
  const handleGetListProduct = async () => {
    try {

      if (isLoadFetchApiSuccess) {
        setIsLoadFetchApiSuccess(false);
      }

      const res = await productApi.getProductByBrandOrCateOrStore('store',user.store_id);

      if (res.success) {
        const newListProduct = res.data.map(item => {
          return {
            ...item,
            action: { pro_id: item.id, pro_name: item.name },
          }
        });

        setListProduct([...newListProduct]);
        setIsLoadFetchApiSuccess(true);
      }

    } catch (error) {
      console.log('error: ' + error);
    }
  };
  
  /************** handle delete Product ***************/
  const handleDeleteProduct = async (id) => {

    try {
      setIsProccess(true);

      const res = await productApi.deleteProduct(id);
      if (res.success) {
        handleGetListProduct();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }
      setIsProccess(false);

    } catch (error) {
      console.log('error: ' + error);
    }
  };

  return (
    <Grid container spacing={3}>
         {isProccess && <ProccessDialog />} {/* proccess page */}
     {
          isLoadFetchApiSuccess ?
            <TableListProduct
              listProduct={listProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
            : <TableSkeleton />
        }

    </Grid>
  );
}

export default ListProductPage;
