import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import "./user.scss";

class Sidebar extends React.Component {

    style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        fontSize: 12,
    };

    render() {
        return (
            <div className="user__sidebar">
                <h4 className="user__sidebar__title">Quan li tai khoan</h4>
                <div className="user__sidebar__sub">
                    <List sx={this.style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <Link to="/info">
                                <ListItemText primary="Thong tin ca nhan" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="/coupon">
                                <ListItemText primary="Ma giam gia" />
                            </Link>
                        </ListItem>
                    </List>
                </div>
                <ListItem sx={{paddingLeft: 0}}>
                    <Link to="/order">
                        <h4 className="user__sidebar__title">Don hang cua toi</h4>
                    </Link>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                    <Link to="/favorite-follow">
                        <h4 className="user__sidebar__title">San pham & cua hang yeu thich</h4>
                    </Link>
                </ListItem>
                <ListItem  sx={{paddingLeft: 0}}>
                    <Link to="/seller">
                        <h4 className="user__sidebar__title">Ban hang tren tadaha</h4>
                    </Link>
                </ListItem>
            </div>
        )
    }
}

export default Sidebar;