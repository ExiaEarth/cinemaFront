import {  Typography ,Avatar} from '@mui/material';
import { IconButton} from "@mui/material";
import { useSelector } from 'react-redux';
import{Link} from 'react-router-dom';


import style  from "./header.module.scss";

const Header = ({onOpenMenu}) => {
    const pseudo=useSelector(state=>state.auth.pseudo);
    const avatar=useSelector(state=>state.auth.avatar);

    return(
    <header>
        <div className={style.container}>
            <Typography>
                <Link to ='/Accueil'> 
                    <div className={style.logo}></div>
                </Link>
            </Typography>

            <div className={style.naviBar}>
                    <ul>
                        <li><Link to ='/Accueil'><button>Accueil</button></Link></li>
                        <li><Link to ='/Salle'><button>Salle</button></Link></li>
                        <li><Link to ='/Film'><button>Film</button></Link></li>
                        {/* <li><Link to ='/Error'><button>Bon</button></Link></li> */}
                    </ul>
            </div>
            <div className={style.profilContainer}>
                <IconButton onClick={() => onOpenMenu()}>
                    {(pseudo)?
                    <Avatar className={style.avatar}><img src={avatar} alt="Avatar User" srcset="Avatar User" /></Avatar>:
                    <Avatar className={style.avatar}/>
                }
                    {/* <Avatar className={style.avatar}> <img src="http://localhost:8100/Avatars/Arturia.png" /></Avatar>  */}
                    {(pseudo)?<span >{pseudo}</span>:<span >connexion</span>}

                </IconButton>
            </div>

        </div>
    </header>
)};

export default Header ;