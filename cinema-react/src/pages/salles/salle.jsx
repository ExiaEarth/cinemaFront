import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import style from  './salle.module.scss';

const Salle=()=>{
    return(
        <div>
            <Header/>
            <main className={style.maincontainer}>
            <h1>Salle présent</h1>
            </main>
            <Footer/>
        </div>
    )
};
export default Salle;