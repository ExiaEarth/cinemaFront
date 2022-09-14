import { Link, Typography ,Avatar} from '@mui/material';
// import IconMenu from  '@mui/icons-material/PersonSearchTwoTone';
// import { , IconButton, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";


import style  from "./header.module.scss";
const Header = ({ /*onOpenMenu*/ }) => {
    return(
    <header>
        <div className={style.container}>

                <Typography>
                     <Link to ='./*'> <div className={style.logo}></div></Link>
                </Typography>
                <div className={style.naviBar}>
                    <ul>
                        <li><a href="*">tets1</a></li>
                        <li><a href="*">tets1</a></li>
                        <li><a href="*">tets1</a></li>
                        <li><a href="*">tets1</a></li>
                    </ul>
                </div>
                <div className={style.profilContainer}>
                <Avatar/>
                <div className={style.button}>
                    <button type="submit"><Link to ='./*'>connection</Link></button>
                    <button type="submit"><Link to ='./*'>inscription</Link></button>
                    <button type="submit"><Link to ='./*'>déconnection</Link></button>
                    <input type="submit" value="azert" />
                    <Link to ='./*'><button>test1</button></Link>
                
                </div>
                

                </div>
        </div>
    </header>
)};

export default Header ;