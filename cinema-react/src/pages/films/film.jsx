import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import style from './film.module.scss'

const Film=()=>{
    return(
        <div >
            <Header/>
            <main className={style.maincontainer}>
                <h1>film</h1>
            <div className={style.container}>

            </div>
            </main>
            <Footer/>

        </div>
    )
};
export default Film;