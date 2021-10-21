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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/product" component={ProductPage} /> {/* product  */}
          <Route exact path="/product/:id.html" component={ProductDetailPage} /> {/* product detail */}

          <Route exact path="/cart" component={CartPage} /> {/* cart   */}

          <Route exact path="/checkout" component={ChekOutPage} /> {/* checkout  */}

          <Route exact path="/checkout-success" component={CheckoutSuccessPage} />

          <Route exact path="/info" component={InfoPage} /> {/* info  */}

          <Route exact path="/edit-info" component={EditInfoPage} />

          <Route exact path="/coupon" component={CouponPage} /> {/* coupon  */}

          <Route exact path="/order" component={HistoryOrderPage} /> {/* order   */}

          <Route exact path="/order-detail" component={OrderDetailPage} />

          <Route exact path="/favorite-follow" component={FavoriteAndFollowPage} /> {/* product favorite   */}

          <Route exact path="/vouchers" component={VoucherPage} /> {/* vouvher   */}


          {/* seller */}
          <Route exact path="/create-store" component={CreateStorePage} /> {/* create store   */}

          <Route exact path="/seller" component={DashboardStorePage} />  {/* dashboard   */}

          <Route exact path="/seller/product" component={ListProductPage} /> {/* product  */}

          <Route exact path="/seller/product/add" component={AddProductPage} />

          <Route exact path="/seller/product/edit/:id" component={EditProductPage} />

          <Route exact path="/seller/order" component={ListOrderPage} /> {/* order  */}

          <Route exact path="/seller/message" component={MessagePage} /> {/* message  */}

          <Route exact path="/seller/rating" component={ListRatingPage} /> {/* rating  */}

          <Route exact path="/seller/comments/:id" component={CommentProductPage} /> {/* comments  */}


          {/* admin */}
          <Route exact path="/admin/login" component={LoginAdmin} />
          <Route exact path="/admin" component={DashboardAdminPage} />

          <Route exact path="/admin/order" component={ListOrderAdminPage} />

          <Route exact path="/admin/category" component={ListCategoryAdminPage} />

          <Route exact path="/admin/brand" component={ListBrandAdminPage} />

          <Route exact path="/admin/coupon" component={ListCouponAdminPage} />

          <Route exact path="/admin/member" component={ListMemberAdminPage} />

        </Switch>
      </Router>
    );
  }
}



export default RouteClient;
