
import { Drawer } from '@mui/material';
import{useState} from 'react'
import './App.scss';
import Header from './containers/header/header';
import ProfilNavBar from './containers/profil-nav-bar/profil-nav-bar';



function App() {

  const[menuVisible,setMenuVisible]=useState();

  return(
    <> 
        <Header/>
        <Drawer>
          <ProfilNavBar/>
        </Drawer>
    </>


  );
}

export default App;
