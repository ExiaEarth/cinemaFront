import {  Typography ,Avatar} from '@mui/material';
import { IconButton} from "@mui/material";
import{Link} from 'react-router-dom';


import style  from "./header.module.scss";
const Header = ({onOpenMenu}) => {
    return(
    <header>
        <div className={style.container}>
            <Typography>
                <Link to ='/Accueil'> <div className={style.logo}></div></Link>
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
                <IconButton onClick={() => onOpenMenu()}>
                    <Avatar className={style.avatar} />
                    <span>pseudo</span>
                </IconButton>
            </div>

        </div>
    </header>
)};

export default Header ;