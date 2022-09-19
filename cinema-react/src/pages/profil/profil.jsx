import { Link } from "react-router-dom";
import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import style from './profil.module.scss'

const Profil=()=>{
    return( 
        <div>
            <Header/>
            <main className={style.maincontainer}>
            <h1>profil</h1>
            <div className={style.container}>
            <Link to='/Profil/Update'><button>Modifier</button></Link>
            </div>
            </main>
            <Footer/>
            
        </div>
    )
};

export default Profil;