import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import StorefrontIcon from '@mui/icons-material/Storefront';

import "./CartPage.scss";
import Stepper from "../components/Stepper";
import InputUpDown from "components/inputs/InputUpDown";

const baseUrl = '/client/shopping';

function CartPage()  {

    return (
      <div>
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
            <LinkBreadcrumbs underline="hover" color="inherit" href="/">
              MUI
            </LinkBreadcrumbs>
            <LinkBreadcrumbs
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              Core
            </LinkBreadcrumbs>
            <Typography color="text.primary">detai</Typography>
          </Breadcrumbs>
        </div>
        <div className="row wrapper_inner">
          <Stepper stepCart={0} />
          <div class="cart">
            <div class="cart__info table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" cart__store">
                    {/* <td >
                          <Link>
                            <img src="../assets/img1.jpg" alt="" />
                          </Link>
                        </td> */}
                    <td colspan="6">
                      <Link>
                        <StorefrontIcon />
                        <span>Coop food-Oganic</span>
                      </Link>
                    </td>
                  </tr>
                  <tr class="cart__product-item">
                    <td class="cart__product__image">
                      <Link to="/san-pham/dam-body-ca-tinh-voi-nhieu-mau-sac-hien-dai-tre-trung.html">
                        <img class="img-responsive" src="../assets/img1.jpg" alt="" />
                      </Link>
                    </td>
                    <td class="cart__product__desc">
                      <Link to="" class="ng-binding">Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung</Link>
                      <span >Đỏ</span>
                    </td>
                    <td class="cart__product__price">400,000đ</td>
                    <td class="cart__product__quanty">
                      <InputUpDown />
                    </td>
                    <td class="cart__product__amount">
                      1,200,000đ
                    </td>
                    <td class="cart__product__delete">
                      <IconButton aria-label="delete" size="small"  >
                        <DeleteIcon color="disabled" />
                      </IconButton>
                    </td>
                  </tr>
                  <tr class="cart__product-item">
                    <td class="cart__product__image">
                      <Link to="/san-pham/dam-body-ca-tinh-voi-nhieu-mau-sac-hien-dai-tre-trung.html">
                        <img class="img-responsive" src="../assets/img1.jpg" alt="" />
                      </Link>
                    </td>
                    <td class="cart__product__desc">
                      <Link to="" class="ng-binding">Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung</Link>
                      <span >Đỏ</span>
                    </td>
                    <td class="cart__product__price">400,000đ</td>
                    <td class="cart__product__quanty">
                      <InputUpDown />
                    </td>
                    <td class="cart__product__amount">
                      1,200,000đ
                    </td>
                    <td class="cart__product__delete">
                      <IconButton aria-label="delete" size="small"  >
                        <DeleteIcon color="disabled" />
                      </IconButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cart__total-price">
              <span><trong>Tổng thanh toán:</trong></span>
              <span class="pay-price">
                1,390,000đ
              </span>
            </div>
            <div className="" style={{ textAlign: 'right' }}>
              <Link to={`/client/product`}> <Button variant="contained" color="secondary" size="large" sx={{ marginRight: 1 }}>Tiep tuc mua hang</Button> </Link>
              <Link to={`${baseUrl}/checkout`}>  <Button variant="contained" color="primary" size="large">Thanh toan</Button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default CartPage;