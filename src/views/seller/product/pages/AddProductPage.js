import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
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


export default function AddProductPage() {
  const user = useSelector(state => state.auth.user);
  const { enqueueSnackbar } = useSnackbar();
  /******state******/
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
      const res = await productApi.addProduct(newData);
      console.log('res', res);
      if (res.success) {
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }else{
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Grid container >
      <FormAddProduct
        categories={categories}
        brands={brands}
        handleAddProduct={handleAddProduct}
      />
    </Grid>

  );
}