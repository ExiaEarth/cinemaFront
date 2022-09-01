import Style from "./nav-bar.module.scss";
import {Stack,ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import { NavLink,Link } from "react-router-dom";

// const NavBarMenu =({to,text,icon,onSelected})=>{
//     return(
//         <ListItemButton component={NavLink}to={to}onClick={onSelected}>
//             <ListItemIcon>
//                 {icon}
//             </ListItemIcon>

//             <ListItemText>
//                 {text}
//             </ListItemText>
//         </ListItemButton>
//     )
// }


const NavBar=({onSelected})=>{
    return (
        <nav className={Style.navContainer}>
            <ul>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;