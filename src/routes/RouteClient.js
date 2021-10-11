import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../views/client/home/HomePage";
import ProductPage from "../views/client/products/ProductPage";
import ProductDetailPage from "../views/client/products/ProductDetailPage";
import CartPage from "../views/client/shopping/CartPage";
import ChekOutPage from "../views/client/shopping/ChekOutPage";
import CheckoutSuccessPage from "../views/client/shopping/CheckoutSuccessPage";
import InfoPage from "../views/client/user/InfoPage";
import EditInfoPage from "../views/client/user/EditInfoPage";
import CouponPage from "../views/client/user/CouponPage";
import HistoryOrderPage from "../views/client/user/HistoryOrderPage";
import OrderDetailPage from "../views/client/user/OrderDetailPage";
import FavoriteAndFollowPage from "../views/client/user/FavoriteAndFollowPage";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import VoucherPage from "../views/client/voucher/VoucherPage";
              // admin
import LoginAdmin from "../views/auth/LoginAdmin";
import DashboardPage from "../views/admin/dashboard/DashboardPage";
              // seller
import CreateStorePage from "../views/seller/create-store/CreateStorePage";
import DashboardStorePage from "../views/seller/dashboard/DashboardPage";
import AddProductPage from "../views/seller/product/AddProductPage";
import ListProductPage from "../views/seller/product/ListProductPage";
import EditProductPage from "../views/seller/product/EditProductPage";

class RouteClient extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/register" >
            <Register />
          </Route>
          <Route exact path="/product" >
            <ProductPage />
          </Route>
          <Route exact path="/product/:id.html" >
            <ProductDetailPage />
          </Route>
          <Route exact path="/cart" >
            <CartPage />
          </Route>
          <Route exact path="/checkout" >
            <ChekOutPage />
          </Route>
          <Route exact path="/checkout-success" >
            <CheckoutSuccessPage />
          </Route>
          <Route exact path="/info" >
            <InfoPage />
          </Route>
          <Route exact path="/edit-info" >
            <EditInfoPage />
          </Route>
          <Route exact path="/my-coupon" >
            <CouponPage />
          </Route>
          <Route exact path="/my-order" >
            <HistoryOrderPage />
          </Route>
          <Route exact path="/order-detail" >
            <OrderDetailPage />
          </Route>
          <Route exact path="/favorite-follow" >
            <FavoriteAndFollowPage />
          </Route>
          <Route exact path="/vouchers" >
            <VoucherPage />
          </Route>

          {/* seller */}
          <Route exact path="/create-store" >
            <CreateStorePage />
          </Route>
          <Route exact path="/seller" >
            <DashboardStorePage />
          </Route>
          <Route exact path="/seller/product" >
            <ListProductPage />
          </Route>
          <Route exact path="/seller/product/add" >
            <AddProductPage />
          </Route>
          <Route exact path="/seller/product/edit/:id" >
            <EditProductPage />
          </Route>

          {/* admin */}
          <Route exact path="/admin/login" >
            <LoginAdmin />
          </Route>
          <Route exact path="/admin" >
            <DashboardPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}



export default RouteClient;
