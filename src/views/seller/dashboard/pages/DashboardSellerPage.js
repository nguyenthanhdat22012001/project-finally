import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import OrderToday from "../components/OrderToday";
import Followers from "../components/Followers";
import Visitors from "../components/Visitors";
import TotalRevenueToday from "../components/TotalRevenueToday";
import RevenueByMonth from "../components/RevenueByMonth";
import ProductHotTrend from "../components/ProductHotTrend";

function DashboardSellerPage() {

  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={6} md={3}>
        <Followers />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Visitors />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <OrderToday />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalRevenueToday />
      </Grid>

      <Grid item xs={12} sm={12} md={12} sx={{margin: "15px 0"}}>
        <Typography variant="h5" gutterBottom component="div">
          Doanh Thu Theo Tháng
        </Typography>
        <RevenueByMonth />
      </Grid>

      <Grid item xs={12} sm={12} md={12} sx={{margin: "15px 0"}}>
        <Typography variant="h5" gutterBottom component="div">
          Sản Phẩm Hot Trend
        </Typography>
        <ProductHotTrend />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        
      </Grid>

    </Grid>
  );
}

export default DashboardSellerPage;