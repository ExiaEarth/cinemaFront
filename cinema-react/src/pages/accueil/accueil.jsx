// import { Drawer } from '@mui/material';
import Footer from '../../composant/footer/footer';
import Header from '../../composant/header/header';
import AfficheComp from "../../composant/affiche/affiche";
// import ProfilNavBar from '../../composant/profil-nav-bar/profil-nav-bar';

import  style  from "./accueil.module.scss";






const Accueil=()=>{
    // const[menuVisible,setMenuVisible]=useState();
  return(
        <div >
            <Header/>
            {/* <Drawer>
            </Drawer> */}
            <main className={style.maincontainer}>
                <h1>Accueil et ici la barre de recherche en bonus</h1>
                <div className={style.container}>
                <AfficheComp/>
            {/* carouselle */}
            {/* Event  bonus*/}
            {/* prochaine sortie */}
                </div>
            </main>
            {/* <ProfilNavBar/> */}

            <Footer/>
        </div>  
    );
};
export default Accueil;