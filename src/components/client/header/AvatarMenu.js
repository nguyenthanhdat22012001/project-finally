import { useEffect, useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link,useHistory } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from "react-redux";
import { ProfileAction,updateProfileUser} from "redux/actions/AuthAction";
// api
import userApi from "api/userApi";

import AvatarCircelShortText from "components/avatar/AvatarCircelShortText";

const baseUrl = '/user';

function AvatarMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const history = useHistory();
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    /***********handle logout user**********/
    const handleLogoutUser = async () => {
       try {
        const res = await userApi.LogoutUser();

        if (res.success) {
            // remove localstorage token
            localStorage.removeItem('token');

            const result = {
                user: {}
            };

            const action = ProfileAction(result);
            dispatch(action);
            
            history.push('/');
        }

        console.log(res);
       } catch (error) {
           
       }
    };
   /***********handle toggle sub menu**********/
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
                {!user ? <AccountCircleIcon /> : <AvatarCircelShortText name={user.name} />}

            </IconButton>
            {!user ? <Menu
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
                <Link to={`/login`}>
                    <MenuItem>
                        <ListItemIcon>
                            <LoginIcon fontSize="small" />
                        </ListItemIcon>
                        Đăng nhập
                    </MenuItem>
                </Link>
                <Link to={`/register`}>
                    <MenuItem>
                        <ListItemIcon>
                            <AppRegistrationIcon fontSize="small" />
                        </ListItemIcon>
                        Đăng kí
                    </MenuItem>
                </Link>
            </Menu> :
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
                    <Link to={`${baseUrl}`}>
                        <MenuItem>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            Thong tin ca nhan
                        </MenuItem>
                    </Link>
                    <Link to={`${baseUrl}/order`}>
                        <MenuItem>
                            <ListItemIcon>
                                <ShoppingBasketIcon fontSize="small" />
                            </ListItemIcon>
                            Don hang cua ban
                        </MenuItem>
                    </Link>
                    <Link to={`${baseUrl}/favorite-follow`}>
                        <MenuItem>
                            <ListItemIcon>
                                <FavoriteBorderIcon fontSize="small" />
                            </ListItemIcon>
                            San pham yeu thich
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogoutUser}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Thoat
                    </MenuItem>
                </Menu>
            }
        </div>
    )
}

export default AvatarMenu

