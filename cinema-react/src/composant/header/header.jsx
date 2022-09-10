import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
// import IconMenu from  '@mui/icons-material/PersonSearchTwoTone';

import Style  from "./header.module.scss";
const Header = ({ onOpenMenu }) => (
    <header>
        <AppBar className={Style.container}>
            <Toolbar>
                <Typography>
                     <Link to ='./*'> <p className={Style.logo}></p></Link>
                </Typography>
                <div className={Style.naviBar}>
                    <ul>
                        <li><a href="">tets1</a></li>
                        <li><a href="">tets1</a></li>
                        <li><a href="">tets1</a></li>
                        <li><a href="">tets1</a></li>
                    </ul>
                </div>
                <IconButton
                    className={Style.profil}
                    onClick={() => onOpenMenu()}>
                    
                </IconButton>

            </Toolbar>
        </AppBar>
    </header>
);

export default Header ;