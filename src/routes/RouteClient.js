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
import DashboardAdminPage from "../views/admin/dashboard/DashboardAdminPage";
import ListOrderAdminPage from "../views/admin/order/ListOrderAdminPage";
import ListCategoryAdminPage from "../views/admin/category/ListCategoryAdminPage";
import ListBrandAdminPage from "../views/admin/brand/ListBrandAdminPage";
import ListCouponAdminPage from "../views/admin/coupon/ListCouponAdminPage";
import ListMemberAdminPage from "../views/admin/member/ListMemberAdminPage";
// seller
import CreateStorePage from "../views/seller/create-store/CreateStorePage";
import DashboardStorePage from "../views/seller/dashboard/DashboardPage";
import AddProductPage from "../views/seller/product/AddProductPage";
import ListProductPage from "../views/seller/product/ListProductPage";
import EditProductPage from "../views/seller/product/EditProductPage";
import ListOrderPage from "../views/seller/order/ListOrderPage";
import MessagePage from "../views/seller/message/MessagePage";
import ListRatingPage from "../views/seller/comment/ListRatingPage";
import CommentProductPage from "../views/seller/comment/CommentProductPage";

class RouteClient extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* client */}
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/register" >
            <Register />
          </Route>
          <Route exact path="/product" > {/* product  */}
            <ProductPage />
          </Route>
          <Route exact path="/product/:id.html" > {/* product detail */}
            <ProductDetailPage />
          </Route>
          <Route exact path="/cart" > {/* cart   */}
            <CartPage />
          </Route>
          <Route exact path="/checkout" > {/* checkout  */}
            <ChekOutPage />
          </Route>
          <Route exact path="/checkout-success" >
            <CheckoutSuccessPage />
          </Route>
          <Route exact path="/info" > {/* info  */}
            <InfoPage />
          </Route>
          <Route exact path="/edit-info" >
            <EditInfoPage />
          </Route>
          <Route exact path="/coupon" > {/* coupon  */}
            <CouponPage />
          </Route>
          <Route exact path="/order" > {/* order   */}
            <HistoryOrderPage />
          </Route>
          <Route exact path="/order-detail" >
            <OrderDetailPage />
          </Route>
          <Route exact path="/favorite-follow" > {/* product favorite   */}
            <FavoriteAndFollowPage />
          </Route>
          <Route exact path="/vouchers" > {/* vouvher   */}
            <VoucherPage />
          </Route>

          {/* seller */}
          <Route exact path="/create-store" > {/* create store   */}
            <CreateStorePage />
          </Route>
          <Route exact path="/seller" >  {/* dashboard   */}
            <DashboardStorePage />
          </Route>
          <Route exact path="/seller/product" > {/* product  */}
            <ListProductPage />
          </Route>
          <Route exact path="/seller/product/add" >
            <AddProductPage />
          </Route>
          <Route exact path="/seller/product/edit/:id" >
            <EditProductPage />
          </Route>
          <Route exact path="/seller/order" > {/* order  */}
            <ListOrderPage />
          </Route>
          <Route exact path="/seller/message" > {/* message  */}
            <MessagePage />
          </Route>
          <Route exact path="/seller/rating" > {/* rating  */}
            <ListRatingPage />
          </Route>
          <Route exact path="/seller/comments/:id" > {/* comments  */}
            <CommentProductPage />
          </Route>

          {/* admin */}
          <Route exact path="/admin/login" >
            <LoginAdmin />
          </Route>
          <Route exact path="/admin" >
            <DashboardAdminPage />
          </Route>
          <Route exact path="/admin/order" >
            <ListOrderAdminPage />
          </Route>
          <Route exact path="/admin/category" >
            <ListCategoryAdminPage />
          </Route>
          <Route exact path="/admin/brand" >
            <ListBrandAdminPage />
          </Route>
          <Route exact path="/admin/coupon" >
            <ListCouponAdminPage />
          </Route>
          <Route exact path="/admin/member" >
            <ListMemberAdminPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}



export default RouteClient;
