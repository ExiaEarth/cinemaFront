import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import style from './profil.module.scss'

const Profil=()=>{
    return( 
        <div>
            <main className={style.maincontainer}>
            <h1>profil</h1>
            <div className={style.container}>
                <form>
                <Avatar/>
                <div className={style.identifiant}>
                    <label htmlFor=""> identifiant : </label>
                    <label htmlFor="">Prénon : </label>
                    <label htmlFor="">nom: </label>
                    <label htmlFor="">@mail : </label>
                </div>  
                </form>
            <Link to='/Profil/Update'><button>Modifier</button></Link>
            </div>
            </main>
            
        </div>
    )
};

export default Profil;