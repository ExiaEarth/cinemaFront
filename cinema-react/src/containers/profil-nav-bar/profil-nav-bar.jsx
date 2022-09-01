import { Avatar, Divider, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from './profil-nav-bar.scss';

const NavBarMenuItem = ({ to, text, icon, onSelected }) => {
    return (
        <ListItemButton component={NavLink} to={to} onClick={onSelected}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText>
                {text}
            </ListItemText>
        </ListItemButton>
    );
};


const ProfilNavBar=({onSelectedMenu})=>{
    return(
        <nav className={style.profilNav}>
            <Stack
                classeName={style.stackStyle}
                direction='column'
                divider={<Divider orientation='horizontal' />}
                spacing={2}>
                <Avatar src=""/>
            </Stack>
        </nav>
    );
};

export default ProfilNavBar;