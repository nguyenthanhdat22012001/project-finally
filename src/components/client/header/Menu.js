import * as React from 'react';
import { useHistory } from "react-router-dom";
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(1)})`,
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));

export default function Menu() {
    const history = useHistory();
    /******state*****/
    const [openNavbar, setOpenNavbar] = React.useState(false);
    const [search, setSearch] = React.useState(false);

    const handleOpenNavbar = (boolean) => {
        setOpenNavbar(boolean);
    };

    const handleOnSearch = () =>{
        if(search === ""){
            return;
        }
       history.push(`/client/product/search/${search}`)
    }

    const handleChangeInput = (e) =>{
        const value = e.target.value;
        setSearch(value);
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{ backgroundImage: `linear-gradient(to right,#ec2f4b,#009fff)` }}>
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
                        <img src={Logo} alt="" style={{ width: '80px' }} />
                        <Search >
                            <StyledInputBase
                                placeholder="Tìm kiếm"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChangeInput}
                            />
                            <IconButton
                                type="submit"
                                color="inherit"
                                // sx={{ mr: 2, ml: '10px' }}
                                onClick={handleOnSearch}
                            >
                                <SearchIcon />
                            </IconButton>
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