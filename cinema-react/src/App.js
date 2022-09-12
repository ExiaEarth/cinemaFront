
import { Drawer } from '@mui/material';
// import{useState} from 'react'
import './App.scss';
import Header from './composant/header/header';
import ProfilNavBar from './composant/profil-nav-bar/profil-nav-bar';



function App() {

  // const[menuVisible,setMenuVisible]=useState();

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


// function App() {

//   const element = useRoutes(routes);

//   return (

//     <div className="App">
//       {element}
//     </div>
    
//   );
// }

// export default App;

