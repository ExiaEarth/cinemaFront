import { Avatar, IconButton, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from './profil-nav-bar.module.scss';

// const NavBarMenuItem = ({ to, text, icon, onSelected }) => {
//     return (
//         <ListItemButton component={NavLink} to={to} onClick={onSelected}>
//             <ListItemIcon>
//                 {icon}
//             </ListItemIcon>
//             <ListItemText>
//                 {text}
//             </ListItemText>
//         </ListItemButton>
//     );
// };


const ProfilNavBar=({onSelectedMenu})=>{
    return(
        <div>
            profilNav
            {/* <IconButton
                className={style.profil}
                // onClick={() => onOpenMenu()}
                // <IconMenu/>
                >
    </IconButton>
        <nav className={style.profilNav}>
            <Stack>
                <Avatar src=""/>
            </Stack>
        </nav> */}
        </div>
        
    );
};

export default ProfilNavBar;