import style from './login.module.scss'
import{Link} from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser} from "../../store/action/identificationAction";

const Login=()=>{
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
        <div>
            <main className={style.maincontainer}>

                <form onSubmit={handleSubmit(onLogin)}>

                     <h1>connexion</h1>

                    <div className={style.logindiv}>

                        <div className={style.identifiant}>
                            <label htmlFor=""> identifiant : </label>
                            <input id="identifiant" type="text" placeholder="Identifiant" {...register('identifiant')}/>
                        </div>
  
                        <div className={style.password}>
                            <label htmlFor="">Password : </label>
                            <input id="password" type="text" placeholder="Entrée votre Password" {...register('password')} />
                        </div>

                        <div className={style.butlink}>
                            <button type="submit">Connexion</button>
                            <Link to='Error'><button className={style.btpass}>mot de passe oubliée</button></Link>
                            <Link to='/Register'><button>S'enregistrer</button></Link>
                        </div>


                    </div>
                    
                </form>

            </main>
        </div>
    );
};
export default Login;