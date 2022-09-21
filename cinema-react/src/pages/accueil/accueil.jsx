// import { Drawer } from '@mui/material';
import AfficheComp from "../../composant/affiche/affiche";
// import ProfilNavBar from '../../composant/profil-nav-bar/profil-nav-bar';

import  style  from "./accueil.module.scss";
import VideComponent from '../../composant/spe/spe';






const Accueil=()=>{
    // const[menuVisible,setMenuVisible]=useState();
  return(
            <div className={style.container}>
                    
                <h2>À l'affiche au cinéma</h2>
                <AfficheComp/>

                <h2>Avant-premières et préventes </h2>
                <VideComponent/>

                <h2>Prochaine sortie</h2>
                <VideComponent/>

             </div>
    );
};
export default Accueil;