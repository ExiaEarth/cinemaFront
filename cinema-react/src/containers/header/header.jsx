import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import IconMenu from  '@mui/icons-material/PersonSearchTwoTone';

import Style  from "./header.module.scss";
const Header = ({ onOpenMenu }) => (
    <header>
        <AppBar className={Style.container}>
            <Toolbar>
  
                <Typography
                    component='div'
                    variant='h5'
                    sx={{ flexGrow: 1 }}>
                logo
                </Typography>
                <IconButton
                    onClick={() => onOpenMenu()}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}>
                        test
                </IconButton>

            </Toolbar>
        </AppBar>
    </header>
);

export default Header ;