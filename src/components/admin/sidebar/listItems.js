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
import { useHistory } from "react-router-dom";

const baseUrl = "/admin";

export default function MainListItems() {
  const history = useHistory();

  const handleRedirect = (url) =>{
    history.push(baseUrl + url)
  }

  return (
    <List>
      <ListItem button onClick={()=> handleRedirect('/')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Tổng quan" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/category')}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Danh mục" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/brand')}>
        <ListItemIcon>
          <LocalOfferIcon />
        </ListItemIcon>
        <ListItemText primary="Thương hiệu" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/order')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Đơn hàng" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/coupon')}>
        <ListItemIcon>
          <CardGiftcardIcon />
        </ListItemIcon>
        <ListItemText primary="Khuyến mãi" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/member')}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Thành viên" />
      </ListItem>
    </List>
  );
};