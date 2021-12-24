import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
//api
import productApi from "api/productApi";
//redux
import { useSelector } from "react-redux";

import TableSkeleton from "components/skeleton/TableSkeleton";

const rows = [
  { id: 1, pr_avatar: '../assets/img1.jpg', pr_name: 'cây lược', pr_rating: 5, pr_comment: '35 Lượt', action: 1 },
];

function ListRatingPage() {
  const user = useSelector(state => state.auth.user);
  /******state******/
  const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    Promise.all([getProductStoreId()])
  }, [])

  const columns = [
    // { field: 'id', hide: true  ,headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: '',
      width: 150,
      renderCell: (params) => (<div><Avatar variant="square" sx={{ width: 56, height: 56 }} alt="" src={params.value} /></div>)
    },
    {
      field: 'name',
      headerName: 'Sản phẩm',
      width: 150,
    },
    {
      field: 'totalRating',
      headerName: 'Tổng sao',
      width: 150,
      renderCell: (params) => (<Rating size="small" name="read-only" value={params.value} readOnly />)
    },
    {
      field: 'totalComment',
      headerName: 'Số bình luận',
      width: 150,
    },
    {
      field: 'id', headerName: '', width: 200,
      renderCell: (params) => (
        <Link to={`/seller/comment/rating/${params.value}`}>
          <Button variant="outlined" startIcon={<CommentIcon />} >
            Xem bình luận
          </Button>
        </Link>
      ),
    },
  ];

  const getProductStoreId = async () => {
    try {
      if (isLoadFetchApiSuccess) {
        setIsLoadFetchApiSuccess(false);
      }

      const res = await productApi.getProductByBrandOrCateOrStore('store', user.store_id);
      if (res.success) {
        setProduct(res.data);
      }
      setIsLoadFetchApiSuccess(true);

    } catch (error) {
      console.log('error', error);
    }

  }



  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={12} md={12}>
        <div style={{ height: 500, width: '100%' }}>
          {
            isLoadFetchApiSuccess ?
              <DataGrid
                rows={products}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
              />
              :
              <TableSkeleton />
          }

        </div>
      </Grid>

    </Grid>
  );
}

export default ListRatingPage;
