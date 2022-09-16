import {  Typography ,Avatar} from '@mui/material';
// import IconMenu from  '@mui/icons-material/PersonSearchTwoTone';
// import { , IconButton, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import{Link} from 'react-router-dom';


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
                        <li><Link to ='/Accueil'><button>Accueil</button></Link></li>
                        <li><Link to ='/Salle'><button>Salle</button></Link></li>
                        <li><Link to ='/Film'><button>Film</button></Link></li>
                        <li><Link to ='/Error'><button>Pas d'idée</button></Link></li>
                    </ul>
                </div>
                <div className={style.profilContainer}>
                <Avatar/>
                <div className={style.button}>
                    <button type="submit"><Link to ='/Login'>connection</Link></button>
                    <button type="submit"><Link to ='/Register'>inscription</Link></button>
                    <button type="submit"><Link to ='./*'>déconnection</Link></button>
                </div>
                <div>
                <Link to ='/Profil'><button>Profil</button></Link>

                </div>

                </div>
        </div>
    </header>
)};

export default Header ;