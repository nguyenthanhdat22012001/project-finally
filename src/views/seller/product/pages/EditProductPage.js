import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {  useParams} from "react-router-dom";
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


import FormEditProduct from '../components/FormEditProduct';


export default function EditProductPage() {
  const  { id } = useParams();
  const user = useSelector(state => state.auth.user);
  const { enqueueSnackbar } = useSnackbar();
  /******state******/
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [editProduct, setEditProduct] = useState({});

  /***************load page****************/
  useEffect(() => {
    Promise.all([handleGetProductById(id),handleGetListCategory(), handleGetListBrand()]);
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
  /*************handle get product by id***************/
  const handleGetProductById = async (id) => {
    try {
      const res = await productApi.getById(id);
      console.log('res', res);
      if (res.success) {
        setEditProduct(res.data);
      } else {
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  /*************handle update product***************/
  const handleUpdateProduct = async (id,data) => {
    try {
      const res = await productApi.updateProduct(id,data);
      console.log('res', res);
      if (res.success) {
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      } else {
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Grid container >
      <FormEditProduct
        categories={categories}
        brands={brands}
        editProduct={editProduct}
        handleUpdateProduct={handleUpdateProduct}
      />
    </Grid>

  );
}