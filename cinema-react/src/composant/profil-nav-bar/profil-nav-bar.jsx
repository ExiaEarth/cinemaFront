
import { Avatar, Divider, List, ListItemButton, ListItemText, Stack} from '@mui/material';
import { profilRoute } from './nav-router';
import style from './profil-nav-bar.module.scss';
import { NavLink } from 'react-router-dom';


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
    return(
            <nav className={style.container}>
                <Stack >
                    <Avatar className={style.logo} />
                    <span>Pseudo1</span>
                </Stack>
                {/* <div className={style.button}>
                    <button type="submit"><Link to ='/Login'>connection</Link></button>
                     <button type="submit"><Link to ='/Register'>inscription</Link></button>
                     <button type="submit"><Link to ='./*'>déconnection</Link></button>
                    </div>
                    <div>
                     <Link to ='/Profil'><button>Profil</button></Link>
                </div> */}

                <List>
                    {profilRoute.map((element,index)=>(<NavBarMenuItem {...element} onSelected={onSelectedMenu} key={index}/>))}
                </List>
            </nav>
    );
};

export default ProfilNavBar;