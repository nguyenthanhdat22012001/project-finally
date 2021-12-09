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
import StorefrontIcon from '@mui/icons-material/Storefront';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
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
            console.log('getDerivedStateFromProps navbar')
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
                    <ListItem button key="Trang Chủ">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trang Chủ" />
                    </ListItem>
                </Link>
                <Link  to="/client/product">
                    <ListItem button key="Sản Phẩm">
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sản Phẩm" />
                    </ListItem>
                </Link>
                <Link  to="/client/vouchers">
                    <ListItem button key="Sưu Tập Voucher">
                        <ListItemIcon>
                            <CardGiftcardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sưu Tập Voucher" />
                    </ListItem>
                </Link>
                <Link  to="/client/posts">
                    <ListItem button key="Bài viết">
                        <ListItemIcon>
                            <WysiwygIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bài viết" />
                    </ListItem>
                </Link>
                <Link  to="/seller">
                    <ListItem button key="Bán Hàng">
                        <ListItemIcon>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bán Hàng" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
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