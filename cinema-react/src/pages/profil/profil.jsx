import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import style from './profil.module.scss'

const Profil=()=>{
    return( 
        <div>
            <Header/>
            <main className={style.maincontainer}>
            <h1>Profil Prés</h1>
            </main>
            <Footer/>
            
        </div>
    )
};

export default Profil;