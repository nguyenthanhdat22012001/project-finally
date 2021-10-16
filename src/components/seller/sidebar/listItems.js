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
import { useHistory } from "react-router-dom";

const baseUrl = "/seller";

export default function MainListItems() {
  const history = useHistory();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sản Phẩm" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  onClick={()=> handleRedirect('/product')} >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Quản lí sản phẩm" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}  onClick={()=> handleRedirect('/product/add')} >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Thêm sản phẩm" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItem button  onClick={()=> handleRedirect('/order')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Đơn hàng" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/message')}>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="Tin nhắn" />
      </ListItem>
      <ListItem button  onClick={()=> handleRedirect('/rating')}>
        <ListItemIcon>
          <RateReviewIcon />
        </ListItemIcon>
        <ListItemText primary="Đánh Giá Sản Phẩm" />
      </ListItem>
    </List>
  );
};