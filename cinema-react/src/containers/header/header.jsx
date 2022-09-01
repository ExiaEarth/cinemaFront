import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';


import style from "./header.module.scss"

const Header = ({ onOpenMenu }) => (
    <header>
        <AppBar className={style.headerApp}>
            <Toolbar>
                <IconButton
                    onClick={() => onOpenMenu()}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}>
                </IconButton>
                <Typography
                    component='div'
                    variant='h5'
                    sx={{ flexGrow: 1 }}>
                    test
                </Typography>

            </Toolbar>
        </AppBar>
    </header>
);

export default Header ;