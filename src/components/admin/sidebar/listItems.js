import React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentIcon from '@mui/icons-material/Payment';
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import {setTitlePageAction} from "redux/actions/titleAction";

const baseUrl = "/admin";

export default function MainListItems() {
  const dispatch = useDispatch();

  const handleChangeTitlepage = (title) =>{
    dispatch(setTitlePageAction(title));
  }

  return (
    <List>
      <NavLink to={`${baseUrl}`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Tổng quan')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Tổng quan" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/category`} exact activeClassName="nav-active">
        <ListItem onClick={() => handleChangeTitlepage('Danh mục')}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Danh mục" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/brand`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Thương hiệu')}>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Thương hiệu" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/payment`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Thanh toán')}>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Thanh toán" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/order`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Đơn hàng')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Đơn hàng" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/coupon`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Khuyến mãi')}>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Khuyến mãi" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/users`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Khách hàng')}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Khách hàng" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/stores`} exact activeClassName="nav-active">
        <ListItem  onClick={() => handleChangeTitlepage('Danh sách cửa hàng')}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Cửa hàng" />
        </ListItem>
      </NavLink>
    </List>
  );
};