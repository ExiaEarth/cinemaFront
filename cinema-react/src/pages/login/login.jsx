import Header from "../../composant/header/header";
import style from './login.module.scss'
import Footer from "../../composant/footer/footer";
import{Link} from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from "../../store/action/identificationAction";

const Login=()=>{
    const { register, handleSubmit, reset } = useForm();

    // const dispatch = useDispatch();

    // const errorMsg = useSelector(state => state.identifiant.errorMsg);
    // const isConnected = useSelector(state => state.identifiant.isConnected);

    const navigate=useNavigate();

    // const onLogin=(data)=>{
    //     dispatch(userLogin(data))
    //     ;reset();
    // }
    // useEffect(() => {
    //     if (isConnected) {
    //         navigate('/Accueil');
    //     }
    // }, [isConnected, navigate]);

    return(
        <div>
            <Header/>

            <main className={style.maincontainer}>

                <form onSubmit={handleSubmit(/*onLogin*/)}>

                    // <h1>connexion</h1>

                    <div className={style.logindiv}>

                        <div className={style.identifiant}>
                            <label htmlFor="">Rentrée votre identifiant : </label>
                            <input id="identifiant" type="text" placeholder="Identifiant" {...register('identifiant')}/>
                        </div>
  
                        <div className={style.password}>
                            <label htmlFor="">Password : </label>
                            <input id="password" type="text" placeholder="Entrée votre Password" {...register('password')} />
                        </div>

                        <div className={style.butlink}>
                            <button type="submit">Connexion</button>
                            <Link to='Error'><button className={style.btpass}>Password oubliée</button></Link>
                            <Link to='/Register'><button>S'enregistrer</button></Link>
                        </div>

                        {/* {errorMsg && (
                        <p>{errorMsg}</p>
                    )} */}

                    </div>
                    
                </form>

            </main>
            <Footer/>
        </div>
       

    );
};
export default Login;