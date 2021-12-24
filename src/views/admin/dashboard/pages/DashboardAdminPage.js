import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//api
import doashBoardSellerApi from "api/doashBoardSellerApi";

import OrderToday from "../components/OrderToday";
import UserRegisterToday from "../components/UserRegisterToday";
import TotalRevenueToday from "../components/TotalRevenueToday";
import RevenueByMonth from "../components/RevenueByMonth";
import TotalRevenueMonth from "../components/TotalRevenueMonth";

function DashboardSellerPage() {
  /*******state*********/
  const [revenueStoresByMonth, setRevenueStoresByMonth] = useState(null);
  const [statisticsBasic, setStatisticsBasic] = useState({
    userRegisterToday: 0,
    numberOrdersConfirmed: 0,
    revenueToday: 0,
    revenueMonth: 0,
  });

  useEffect(() => {
    Promise.all([handleStatisticsGeneralOfAdmin(), hanldeStatisticsRevenueStoresByMonth()]);
  }, [])

  const handleStatisticsGeneralOfAdmin = async () => {
    try {
      const res = await doashBoardSellerApi.statisticsGeneralOfAdmin();
      if (res.success) {
        setStatisticsBasic({
          userRegisterToday: res.data.userRegisterToday,
          numberOrdersConfirmed: res.data.numberOrdersConfirmed,
          revenueToday: res.data.revenueToday,
          revenueMonth: res.data.revenueMonth,
        });
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  const hanldeStatisticsRevenueStoresByMonth = async () => {
    try {
      const res = await doashBoardSellerApi.statisticsRevenueStoresByMonth();
      if (res.success) {

        const newData = [...res.data].map(item => {
          return {
            label: item.label,
            data: item.data,
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
          }
        });
        setRevenueStoresByMonth(newData);
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={6} md={3}>
        <UserRegisterToday userRegisterToday={statisticsBasic.userRegisterToday} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <OrderToday numberOrdersConfirmed={statisticsBasic.numberOrdersConfirmed} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalRevenueToday revenueToday={statisticsBasic.revenueToday} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalRevenueMonth revenueMonth={statisticsBasic.revenueMonth}/>
      </Grid>

      <Grid item xs={12} sm={12} md={12} sx={{ margin: "15px 0" }}>
        <Typography variant="h5" gutterBottom component="div">
          Doanh Thu Từng cửa hàng
        </Typography>
        <RevenueByMonth revenueStoresByMonth={revenueStoresByMonth} />
      </Grid>

    </Grid>
  );
}

export default DashboardSellerPage;