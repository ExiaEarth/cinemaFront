import Header from '../../composant/header/header';
import ProfilNavBar from '../../composant/profil-nav-bar/profil-nav-bar';
import { Drawer} from "@mui/material";





const Accueil=()=>{
    // const[menuVisible,setMenuVisible]=useState();

  return(
        <div>
            <Header/>
            <Drawer>
                <ProfilNavBar/>
             </Drawer>
            <div>
                azertyuiop
            </div>
        </div>


    

  );
};
export default Accueil