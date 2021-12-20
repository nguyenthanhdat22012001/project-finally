import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//api
import doashBoardSellerApi from "api/doashBoardSellerApi";
//redux
import { useSelector } from "react-redux";

import OrderToday from "../components/OrderToday";
import Followers from "../components/Followers";
import RankStore from "../components/RankStore";
import TotalRevenueToday from "../components/TotalRevenueToday";
import RevenueByMonth from "../components/RevenueByMonth";
import ProductHotTrend from "../components/ProductHotTrend";

function DashboardSellerPage() {
  const user = useSelector(state => state.auth.user);
  /*******state*********/
  const [revenueProductHotTrend, setRevenueProductHotTrend] = useState(null);
  const [revenueByMonth, setRevenueByMonth] = useState(null);
  const [statisticsBasic, setStatisticsBasic] = useState({
    numberFollow: 0,
    numberOrdersToday: 0,
    revenueToday: 0,
    rankStore: 0,
  });

  useEffect(() => {
    Promise.all([handleStatisticsGeneral(), handleStatisticsRevenueMonth(), hanldeStatisticsProductHotTrendMonth()]);
  }, [])

  const handleStatisticsGeneral = async () => {
    try {
      const res = await doashBoardSellerApi.statisticsGeneralOfStore(user.store_id);
      if (res.success) {
        setStatisticsBasic({
          numberFollow: res.data.numberFollow,
          numberOrdersToday: res.data.numberOrdersToday,
          revenueToday: res.data.revenueToday,
          rankStore: res.data.rankStore,
        });
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  const handleStatisticsRevenueMonth = async () => {
    try {
      const res = await doashBoardSellerApi.statisticsRevenueMonthOfStore(user.store_id);
      if (res.success) {
        let labels = Array();
        let datasets = Array();

        [...res.data].map(item => {
          labels.push(item.month_name);
          datasets.push(item.revenue);
        });
        setRevenueByMonth({
          labels: labels,
          datasets: datasets,
        });
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  const hanldeStatisticsProductHotTrendMonth = async () => {
    try {
      const res = await doashBoardSellerApi.statisticsProductHotTrendByMonth(user.store_id);
      if (res.success) {

        const newData = [...res.data].map(item => {
          return {
            label: item.label,
            data: item.data,
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
          }
        });
        setRevenueProductHotTrend(newData);
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Grid container spacing={3}>
      {console.log('revenueProductHotTrend', revenueProductHotTrend)}
      <Grid item xs={12} sm={6} md={3}>
        <Followers numberFollow={statisticsBasic.numberFollow} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RankStore rankStore={statisticsBasic.rankStore} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <OrderToday numberOrdersToday={statisticsBasic.numberOrdersToday} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalRevenueToday revenueToday={statisticsBasic.revenueToday} />
      </Grid>

      <Grid item xs={12} sm={12} md={12} sx={{ margin: "15px 0" }}>
        <Typography variant="h5" gutterBottom component="div">
          Doanh Thu Theo Tháng
        </Typography>
        <RevenueByMonth revenueByMonth={revenueByMonth} />
      </Grid>

      <Grid item xs={12} sm={12} md={12} sx={{ margin: "15px 0" }}>
        <Typography variant="h5" gutterBottom component="div">
          Sản Phẩm Hot Trend
        </Typography>
        <ProductHotTrend revenueProductHotTrend={revenueProductHotTrend} />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>

      </Grid>
      <Grid item xs={12} sm={6} md={6}>

      </Grid>

    </Grid>
  );
}

export default DashboardSellerPage;