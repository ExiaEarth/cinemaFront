
import { Avatar, Divider, List, ListItemButton, ListItemText, Stack} from '@mui/material';
import { profilRoute } from './nav-router';
import style from './profil-nav-bar.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
    // Me permet de me déconnecter du cont  utiliser
    const dispatch=useDispatch();

    const deconex=()=>{
        dispatch(logoutUser())
    }

    return(
            <nav className={style.container}>
                <Stack >
                    <Avatar className={style.logo} />
                    <span>Pseudo1</span>
                </Stack>

                <List>
                    {profilRoute.map((element,index)=>(<NavBarMenuItem {...element} onSelected={onSelectedMenu} key={index}/>))}
                </List>
                {/* Button pour la déconnection */}
                <button onClick={deconex}>deco</button>
            </nav>
    );
};

export default ProfilNavBar;