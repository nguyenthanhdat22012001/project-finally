import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
// notify
import { useSnackbar } from 'notistack';
//redux
import { useSelector } from "react-redux";
// helper
import { handleNotiDialog } from "helper/notify";
//api
import productApi from "api/productApi";
import brandApi from "api/brandApi";
import categoryApi from "api/categoryApi";


import FormAddProduct from '../components/FormAddProduct';
import ProccessDialog from "components/dialog/ProccessDialog";

const baseUrl = '/seller/product';

export default function AddProductPage() {
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const { enqueueSnackbar } = useSnackbar();
  /******state******/
  const [isProccess, setIsProccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  /***************load page****************/
  useEffect(() => {
    Promise.all([handleGetListCategory(), handleGetListBrand()]);
  }, [])

  /*************handle get list category***************/
  const handleGetListCategory = async () => {
    try {
      const res = await categoryApi.getCategoryAll();
      if (res.success) {
        setCategories(res.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  /*************handle get list brand***************/
  const handleGetListBrand = async () => {
    try {
      const res = await brandApi.getBrandAll();
      if (res.success) {
        setBrands(res.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  /*************handle add product***************/
  const handleAddProduct = async (data) => {
    const newData = {
      ...data,
      store_id: user.store_id,
    }
    try {
      setIsProccess(true);
      const res = await productApi.addProduct(newData);

      if (res.success) {
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
        history.push(`${baseUrl}`);
      } else {
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
      setIsProccess(false);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Grid container >
      {isProccess && <ProccessDialog />} {/* proccess page */}
      <FormAddProduct
        categories={categories}
        brands={brands}
        handleAddProduct={handleAddProduct}
      />
    </Grid>

  );
}