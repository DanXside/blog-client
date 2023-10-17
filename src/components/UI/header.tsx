import { AppBar, Toolbar, Button, IconButton, Box, Menu, MenuItem, Drawer } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/context";
import UserInfo from "../UserInfo";


const Header = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDrawer = () => {
        setAnchorEl(null);
        setOpenDrawer(true);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        setAuth(false);
        localStorage.removeItem('token');
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{
            background: '#0D0D0D',
            margin: '0 auto',
            marginTop: '2rem',
            width: '150rem'
        }}>
            <Toolbar sx={{
                justifyContent: 'space-between'
            }}>
                <Box className="header-mainLinks">
                    <Link to="/">
                        Главная
                    </Link>
                    <Link to="/create-post">
                        Создать пост
                    </Link>
                </Box>
                {
                    isAuth 
                    ?
                    <>
                        <IconButton onClick={handleMenu} aria-controls="menu-appbar">
                            <AccountCircleIcon sx={{width: '3rem', height: '3rem', color: '#ffffff'}} />
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleDrawer}>Профиль</MenuItem>
                            <MenuItem sx={{fontSize: '1.4rem'}} onClick={logout}>Выйти</MenuItem>
                        </Menu>
                        <Drawer 
                            anchor="right"
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                            sx={{
                                '& .MuiDrawer-paperAnchorRight': {
                                    backgroundColor: '#202020'
                                }
                            }}
                        >
                            <UserInfo />
                        </Drawer>
                    </>
                    :
                    <div className="header-buttonGroup">
                        <Link to="/login" >
                            <Button 
                                variant="contained"
                                sx={{
                                    backgroundColor: '#3137C9',
                                    fontWeight: 400,
                                    fontSize: '1.2rem',
                                    'a': {
                                        textDecoration: 'none',
                                        color: '#ffffff'
                                    }
                                }}
                            >
                                Войти
                            </Button>
                        </Link>
                        <Link to="/registration" >
                            <Button variant="outlined" sx={{
                                borderColor: '#3137C9',
                                fontWeight: 400,
                                fontSize: '1.2rem'
                            }}>
                                Зарегистрироваться
                            </Button>
                        </Link>
                    </div>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;