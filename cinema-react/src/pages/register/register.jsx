import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import  style  from "./register.module.scss";

const Register=()=>{
    return(
        <div >
            <Header/>
            <main className={style.maincontainer}>
            <h1>Register présent</h1>
            </main>
            <Footer/>

        </div>
        
    )
};
export default Register;