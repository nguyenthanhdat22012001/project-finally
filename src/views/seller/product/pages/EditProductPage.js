import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";
// notify
import { useSnackbar } from 'notistack';
// helper
import { handleNotiDialog } from "helper/notify";
//api
import productApi from "api/productApi";
import brandApi from "api/brandApi";
import categoryApi from "api/categoryApi";

import FormEditProduct from '../components/FormEditProduct';
import ProccessDialog from "components/dialog/ProccessDialog";


export default function EditProductPage() {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  /******state******/
  const [isProccess, setIsProccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [editProduct, setEditProduct] = useState({});

  /***************load page****************/
  useEffect(() => {
    Promise.all([handleGetProductById(id), handleGetListCategory(), handleGetListBrand()]);
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
  const handleUpdateProduct = async (id, data) => {
    try {
      setIsProccess(true);

      const res = await productApi.updateProduct(id, data);
      if (res.success) {
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
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
      <FormEditProduct
        categories={categories}
        brands={brands}
        editProduct={editProduct}
        handleUpdateProduct={handleUpdateProduct}
      />
    </Grid>

  );
}