import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "assets/images/logo.png";

import "./CartMenu.scss"
import Navbar from "./Navbar";
import AvatarMenu from "components/client/header/AvatarMenu";
import CartMenu from "components/client/header/CartMenu";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));

export default function Menu() {
    const [openNavbar, setOpenNavbar] = React.useState(false);

    const handleOpenNavbar = (boolean) => {
        setOpenNavbar(boolean);
    };


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                position="static" 
                sx={{backgroundImage: `linear-gradient(to right,#ec2f4b,#009fff)`}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2, ml: '10px' }}
                            onClick={() => handleOpenNavbar(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={Logo} alt="" style={{width: '80px'}} />
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>

                            <CartMenu />{/* cart menu */}
                            <AvatarMenu /> {/* avatar menu */}

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* nav bar */}
            <Navbar openNavbar={openNavbar} closeNavbar={handleOpenNavbar} />
        </div>
    );
}