// import { Drawer } from '@mui/material';
import Footer from '../../composant/footer/footer';
import Header from '../../composant/header/header';
// import ProfilNavBar from '../../composant/profil-nav-bar/profil-nav-bar';

import  style  from "./accueil.module.scss";






const Accueil=()=>{
    // const[menuVisible,setMenuVisible]=useState();
  return(
        <div className={style.container}>
            <Header/>
            {/* <Drawer>
            </Drawer> */}
            <main className={style.maincontainer}>
                <h1>Accueil Present</h1>
            </main>
            {/* <ProfilNavBar/> */}

            <Footer/>
        </div>  
    );
};
export default Accueil;