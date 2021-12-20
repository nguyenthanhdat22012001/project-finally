import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
//api
import shoppingApi from 'api/shoppingApi';
//helper
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from 'helper/FormatNumber';

import "./DetailOrderPage.scss";
import ButtonStatus from "../components/ButtonStatus";

function DetailOrderPage() {
  const { id } = useParams();
  /******state*******/
  const [order, setOrder] = useState(null);

  useEffect(async () => {
    await getOrderById(id);
  }, [id])

  /**********get order by id*********/
  const getOrderById = async (id) => {
    try {
      const res = await shoppingApi.getOrderById(id);
      if (res.success) {
        const newData = {
          ...res.data,
          statusObj: {
            id: res.data.id,
            status: res.data.status,
          }
        }
        console.log('newData', newData)
        setOrder(newData);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container justifyContent="space-between">
          <Typography variant='subtitle2'>
            Ngày đặt {order ? formatdateDMY(order.created_at) : ''}
          </Typography>
          <ButtonStatus statusObj={order ? order.statusObj : null} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <div className="table-order">
          <div className="header">Mã đơn #{order ? order.id : ''}</div>
          <table cellSpacing="0">
            <tr>
              <th>Hình ảnh</th>
              <th >Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>thành tiền</th>
            </tr>
            {
              order && [...order.product].length > 0 ?
                [...order.product].map(prd => {
                  return (
                    <tr key={prd.id}>
                      <td><img src={prd.product_img} alt="" /></td>
                      <td>
                        <p>{prd.product_name}</p>
                        <p style={{ color: "gray" }}>x {prd.attribute_name}</p>
                      </td>
                      <td>{fCurrencyVN(prd.product_price)}</td>
                      <td>{prd.amount}</td>
                      <td>{fCurrencyVN(prd.product_price * prd.amount)} </td>
                    </tr>
                  );
                }) : ""
            }
            <tfoot>
              {
                order && order.coupon_sku ?
                  <tr>
                    <td colSpan={2}></td>
                    <td colSpan={2}>Voucher {order.coupon_sku}</td>
                    <td>{fCurrencyVN(order.coupon_price)}</td>
                  </tr>
                  : ""
              }
              <tr>
                <td colSpan={2}></td>
                <td colSpan={2}>Tổng số lượng</td>
                <td>{order ? order.totalQuantity : 0}</td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td colSpan={2}>Tổng tiền</td>
                <td>{fCurrencyVN(order ? order.totalprice : 0)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Grid>

    </Grid>
  );
}

export default DetailOrderPage;
