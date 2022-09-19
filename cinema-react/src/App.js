
import { useRoutes } from 'react-router-dom'
import { routes } from './route';
import './App.scss';
import Header from './composant/header/header';
import Footer from './composant/footer/footer';
import { Drawer } from '@mui/material';
import ProfilNavBar from './composant/profil-nav-bar/profil-nav-bar';
import { useState } from 'react';




function App() {

  const [menuVisible, setMenuVisible] = useState(true);

  const element = useRoutes(routes);

  return (

    <div className="App">

      <Header onOpenMenu={()=>setMenuVisible(true)}/>
        <Drawer anchor='right'
        open={menuVisible}
        onClose={()=>setMenuVisible(false)}>
        <ProfilNavBar onSelectedMenu={()=>setMenuVisible(true)}/>

        </Drawer>

      <main>
        {element}
      </main>

      <Footer/>

    </div>
    
  );
}

export default App;

