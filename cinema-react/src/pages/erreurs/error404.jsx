import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import style from './error404.module.scss';

const Error404=()=>{
    return(
        <div className={style.maincontainer}>
            <Header/>
            <main className={style.maincontainer}>
            </main>
            <Footer/>

        </div>
    )
};
export default Error404;