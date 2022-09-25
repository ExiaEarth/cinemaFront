import  style  from "./adminLogin.module.scss"
import{Link} from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser} from "../../store/action/identificationAction";



const LoginAdmin=()=>{
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    // const errorMsg = useSelector(state => state.auth.errorMsg);
    const isConnected = useSelector(state => state.auth.isConnected);
    // on regarde constamment la valeur dans le store et dès que la valeur change, cela déclenche le useEffect


    const navigate = useNavigate();

    const onLogin = (data) => {
        // console.log('login');
        dispatch(loginUser(data));
        reset();
    }

    useEffect(() => {
        if (isConnected) {
            navigate('/Accueil');
        }
    }, [isConnected, navigate]);
    return(

        
    <div className={style.containertotal}>
        <form onSubmit={handleSubmit(onLogin)}>
            <h1>Connexion Administrateur</h1>
            <div className={style.logo}></div>
            <div className={style.login}>
            <div className={style.identifiant}>
                    <label htmlFor=""> Nom d'utilisateur ou adresse mail </label>
                    <input id="identifiant" type="text" placeholder=" Identifiant/@mail" {...register('identifiant')}/>
                </div>
    
                <div className={style.password}>
                    <label htmlFor=""> Mot de passe </label>
                    <input id="password" type="text" placeholder=" Password" {...register('password')} />
                </div>

                <div className={style.butlink}>
                    <button type="submit">Se connecter</button>
                    <Link to='Error'><button className={style.btpass}>mot de passe oubliée</button></Link>
                </div>
            </div>

        </form>
    </div>
        


        //     <div className={style.logo}></div>

        //    <div className={style.login}>


            // </div>
        // </div>
    )
}


export default LoginAdmin;