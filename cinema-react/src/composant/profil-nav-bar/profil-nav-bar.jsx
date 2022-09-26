
import { Avatar, List, ListItemButton, ListItemText, Stack} from '@mui/material';
import { profilRoute } from './nav-router';
import style from './profil-nav-bar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/action/identificationAction';

const NavBarMenuItem = ({ to, text, onSelected }) => {
    return (
        <ListItemButton component={NavLink} to={to} onClick={onSelected}>
            <ListItemText>
                {text}
            </ListItemText>
        </ListItemButton>
    );
};

const ProfilNavBar=({onSelectedMenu})=>{

    const pseudo=useSelector(state=>state.auth.pseudo)
    const avatar=useSelector(state=>state.auth.avatar)

                

    // Me permet de me déconnecter du conte  utiliser
    const dispatch=useDispatch();

    const deconnexion=()=>{
        dispatch(logoutUser())
    }

    return(
            <nav className={style.container}>

                <Stack >
                {(pseudo)?
                    <Avatar className={style.avatar}><img src={avatar} alt="" srcset="" /></Avatar>:
                    <Avatar className={style.avatar}/>
                }
                    {(pseudo)?<span>{pseudo}</span>:<span>Visiteur</span>}
                </Stack>
                {(!pseudo)?
                    <div className={style.reLog}>
                        <li><Link to ='/Register'><button>Inscription</button></Link></li>
                        <li><Link to ='/Login'><button>Connexion</button></Link></li>
                    </div>
                        : <span></span>}
                {(pseudo)?
                <List>
                    {profilRoute.map((element,index)=>(<NavBarMenuItem {...element} onSelected={onSelectedMenu} key={index}/>))}
                </List>
                :<span></span>
                }
                {/* Button pour la déconnection */}
                {(pseudo)?<button onClick={deconnexion} className={style.deconn}>Déconnexion</button>:<span></span>}
            </nav>
    );
};

export default ProfilNavBar;