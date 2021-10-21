import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//redux
import { useSelector} from "react-redux";

import AvatarCircelShortText from "../../../components/avatar/AvatarCircelShortText";

function AvatarMenu(props) {
    const user = useSelector(state => state.auth.user);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{ marginRight: '25px' }}
            >
                {Object.keys(user).length === 0 ? <AccountCircleIcon />  : <AvatarCircelShortText name={user.name} /> }
                
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Thong tin ca nhan
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ShoppingBasketIcon fontSize="small" />
                    </ListItemIcon>
                    Don hang cua ban
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon fontSize="small" />
                    </ListItemIcon>
                    San pham yeu thich
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Thoat
                </MenuItem>
            </Menu>
        </div>
    )
}

export default AvatarMenu

