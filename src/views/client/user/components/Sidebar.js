import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

import "../user.scss";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    fontSize: 12,
};

const baseUrl = '/client/user';

function Sidebar(props) {

    return (
        <div className="user__sidebar">
            <h4 className="user__sidebar__title">Quản lí tài khoản</h4>
            <div className="user__sidebar__sub">
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <NavLink to={`${baseUrl}`} exact={`${baseUrl}`} activeClassName="nav-active">
                        <ListItem >
                            <ListItemText  
                            primaryTypographyProps={{fontSize: '14px'}} 
                            primary="Thông tin cá nhân" />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${baseUrl}/coupon`} exact={`${baseUrl}/coupon`} activeClassName="nav-active">
                        <ListItem >
                            <ListItemText  
                            primaryTypographyProps={{fontSize: '14px'}} 
                            primary="Mã giảm giá" />
                        </ListItem>
                    </NavLink>
                </List>
            </div>
            <NavLink to={`${baseUrl}/order`} exact={`${baseUrl}/order`} activeClassName="nav-active">
                <ListItem sx={{ paddingLeft: 0 }}>
                    <h4 className="user__sidebar__title">Dơn hàng của tôi</h4>
                </ListItem>
            </NavLink>
            <NavLink to={`${baseUrl}/favorite-follow`} exact={`${baseUrl}/favorite-follow`} activeClassName="nav-active">
                <ListItem sx={{ paddingLeft: 0 }}>
                    <h4 className="user__sidebar__title">Sản phẩm & cửa hàng yêu thích</h4>
                </ListItem>
            </NavLink>
            <NavLink to="/seller" exact={`${baseUrl}/seller`} activeClassName="nav-active">
                <ListItem sx={{ paddingLeft: 0 }}>
                    <h4 className="user__sidebar__title">Bán hàng trên tadaha</h4>
                </ListItem>
            </NavLink>
        </div>
    )
}

export default Sidebar

