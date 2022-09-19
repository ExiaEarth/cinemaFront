import { Link } from "react-router-dom";

import style from './profil.module.scss'

const Profil=()=>{
    return( 
        <div>
            <main className={style.maincontainer}>
            <h1>profil</h1>
            <div className={style.container}>
            <Link to='/Profil/Update'><button>Modifier</button></Link>
            </div>
            </main>
            
        </div>
    )
};

export default Profil;