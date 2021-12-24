import { useState } from 'react';
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
import { Link, useHistory } from 'react-router-dom';
// notify
import { useSnackbar } from 'notistack';
//redux
import { useDispatch, useSelector } from "react-redux";
import { LogOutUserRedux } from "redux/actions/AuthAction";

import AvatarCircelShortText from "components/avatar/AvatarCircelShortText";
import ProccessDialog from "components/dialog/ProccessDialog";

const baseUrl = '/client/user';

function AvatarMenu(props) {
    /******state*******/
    const [isProccess, setIsProccess] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const history = useHistory();
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    /***********handle logout user**********/
    const handleLogoutUser = async () => {
        try {
            setIsProccess(true); 

            dispatch(LogOutUserRedux(enqueueSnackbar, history));

            setIsProccess(false); 

        } catch (error) {
            console.log('error', error);
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
            {isProccess && <ProccessDialog />} {/* proccess page */}
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
                            Thông tin cá nhân
                        </MenuItem>
                    </Link>
                    <Link to={`${baseUrl}/order`}>
                        <MenuItem>
                            <ListItemIcon>
                                <ShoppingBasketIcon fontSize="small" />
                            </ListItemIcon>
                            Đơn hàng của bạn
                        </MenuItem>
                    </Link>
                    <Link to={`${baseUrl}/favorite-follow`}>
                        <MenuItem>
                            <ListItemIcon>
                                <FavoriteBorderIcon fontSize="small" />
                            </ListItemIcon>
                            Sản phẩm yêu thích
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogoutUser}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Thoát
                    </MenuItem>
                </Menu>
            }
        </div>
    )
}

export default AvatarMenu

