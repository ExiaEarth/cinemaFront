
import { Drawer } from '@mui/material';
import{useState} from 'react'
import './App.scss';
import Header from './containers/header/header';



function App() {

  const[menuVisible,setMenuVisible]=useState();

  return(
    <> 
        <Header/>
    </>


  );
}

export default App;
