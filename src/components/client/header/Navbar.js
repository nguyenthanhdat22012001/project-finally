import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNavbar: false
        }
    };

    static getDerivedStateFromProps(props, state) {
        if (state.openNavbar !== props.openNavbar) {
            return { openNavbar: props.openNavbar }
        };
    };

    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ [anchor]: open });
        this.props.closeNavbar(open);
    };

    list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={this.toggleDrawer(anchor, false)}
            onKeyDown={this.toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/">
                    <ListItem button key="Trang Chu">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trang Chu" />
                    </ListItem>
                </Link>
                <Link  to="/product">
                    <ListItem button key="Danh Muc">
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Danh Muc" />
                    </ListItem>
                </Link>
                <Link  to="/vouchers">
                    <ListItem button key="Suu Tap Voucher">
                        <ListItemIcon>
                            <CardGiftcardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Suu Tap Voucher" />
                    </ListItem>
                </Link>
                <Link  to="/seller">
                    <ListItem button key="Ban Hang">
                        <ListItemIcon>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ban Hang" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link  to="/login">
                    <ListItem button key="Dang Nhap">
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dang Nhap" />
                    </ListItem>
                </Link>
                <Link  to="/register">
                    <ListItem button key="Dang Ki">
                        <ListItemIcon>
                            <AppRegistrationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dang Ki" />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    render() {
        return (
            <div>
                <React.Fragment key={'left'}>
                    <SwipeableDrawer
                        anchor={'left'}
                        open={this.state.openNavbar}
                        onClose={this.toggleDrawer('opentNavbar', false)}
                        onOpen={this.toggleDrawer('opentNavbar', true)}
                    >
                        {this.list("left")}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
        );
    }
}

export default Navbar;