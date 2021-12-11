import React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { NavLink } from "react-router-dom";

const baseUrl = "/seller";

export default function MainListItems({handleChangeTitlepage}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <NavLink to={`${baseUrl}`} exact activeClassName="nav-active">
        <ListItem onClick={() => handleChangeTitlepage('Tổng quan')} >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Tổng quan" />
        </ListItem>
      </NavLink>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sản Phẩm" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink to={`${baseUrl}/product`} exact activeClassName="nav-active">
            <ListItemButton sx={{ pl: 4 }}  onClick={() => handleChangeTitlepage('Quản lí sản phẩm')} >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Quản lí sản phẩm" />
            </ListItemButton>
          </NavLink>
          <NavLink to={`${baseUrl}/product/add`} exact activeClassName="nav-active">
            <ListItemButton sx={{ pl: 4 }}  onClick={() => handleChangeTitlepage('Thêm sản phẩm')} >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Thêm sản phẩm" />
            </ListItemButton>
          </NavLink>
        </List>
      </Collapse>
      <NavLink to={`${baseUrl}/order`} exact activeClassName="nav-active">
        <ListItem onClick={() => handleChangeTitlepage('Đơn hàng')} >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Đơn hàng" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/coupon`} exact activeClassName="nav-active">
        <ListItem onClick={() => handleChangeTitlepage('Khuyến mãi')} >
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Khuyến mãi" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/message`} exact activeClassName="nav-active">
        <ListItem onClick={() => handleChangeTitlepage('Tin nhắn')} >
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary="Tin nhắn" />
        </ListItem>
      </NavLink>
      <NavLink to={`${baseUrl}/comment`} exact activeClassName="nav-active">
        <ListItem onClick={() => handleChangeTitlepage('Đánh Giá Sản Phẩm')} >
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <ListItemText primary="Đánh Giá Sản Phẩm" />
        </ListItem>
      </NavLink>
    </List>
  );
};