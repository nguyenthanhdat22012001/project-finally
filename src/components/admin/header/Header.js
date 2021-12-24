import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import {useHistory } from 'react-router-dom';
// notify
import { useSnackbar } from 'notistack';
//redux
import { useDispatch, useSelector } from "react-redux";
import { LogOutUserRedux } from "redux/actions/AuthAction";

import Sidebar from '../sidebar/Sidebar';
import AvatarCircelShortText from "components/avatar/AvatarCircelShortText";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector(state => state.auth.user);
  const titlePage =  useSelector(state => state.titlePage.title);
  /*******state********/
  const [openSideBar, setOpenSideBar] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  /***********handle logout user**********/
  const handleLogoutUser = async () => {
    try {
      dispatch(LogOutUserRedux(enqueueSnackbar, history));

    } catch (error) {
      console.log('error', error);
    }
  };


  return (
    <Box sx={{ zIndex: '10' }}>

      <AppBar position="absolute" open={openSideBar} sx={{ backgroundColor: '#ec2f4b' }}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSideBar}
            sx={{
              marginRight: '36px',
              ...(openSideBar && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {titlePage}
          </Typography>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2, mr: 2 }}>
              <AvatarCircelShortText name={user.name} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
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
            <MenuItem onClick={handleLogoutUser}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Thoát
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Sidebar
        openSideBar={openSideBar}
        toggleSideBar={toggleSideBar}
      />
    </Box>
  );
}