import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import style from './error404.module.scss';

const Error404=()=>{
    return(
        <div className={style.maincontainer}>
            <Header/>
            <main className={style.maincontainer}>
                
<p>Salut Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur repellendus, illo dicta repellat aliquid corrupti harum eveniet animi qui laborum libero, quia nisi similique amet id assumenda quo omnis! Dolor assumenda voluptates adipisci quas a expedita odit, magnam porro culpa, voluptate pariatur quidem! Odit, quam!</p>
            </main>
            <Footer/>

        </div>
    )
};
export default Error404;