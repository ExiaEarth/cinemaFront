import Footer from "../../composant/footer/footer";
import Header from "../../composant/header/header";
import  style  from "./updateprofil.module.scss";

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/action/identificationAction';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Updated=()=>{

    const {register,handleSubmit,reset}=useForm();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isConnected=useSelector(s=>s.auth.isConnected);
    const errorMsg = useSelector(state => state.auth.errorMsg);


    useEffect(()=>{
        if (isConnected) {
            navigate('/Accueil');
        }
    },[isConnected,navigate])

    const onRegister=(data)=>{
        dispatch(registerUser(data));
        reset();
    }

    return(
        <div >
            <Header/>
            <main className={style.maincontainer}>
                <h1> modification profil</h1>
            <div className={style.registerdiv}>

                <form onSubmit={handleSubmit(onRegister)}>
                <div className={style.identifiant}>
                    <label htmlFor="">Rentrée votre pseudo: </label>
                    <input id="pseudo" type="text" placeholder="pseudo" {...register('pseudo')} />
                </div>

                <div className={style.identifiant}>
                    <label htmlFor="">Rentrée prenom : </label>
                    <input id="prenom" type="text" placeholder=" prenom " {...register('prenom')} />
                </div>

                <div className={style.identifiant}>
                    <label htmlFor="">Rentrée votre nom : </label>
                    <input id="nom" type="text" placeholder=" nom"{...register('nom')}  />
                </div>

                <div className={style.identifiant}>
                    <label htmlFor="">Rentrée votre mot de passe: </label>
                    <input id="password" type="text" placeholder=" mot de passe" {...register('password')}  />
                </div>

                <div className={style.identifiant}>
                    <label htmlFor="">Rentrée votre @mail : </label>
                    <input id="email" type="text" placeholder=" @mail" {...register('email')} />
                </div>
                <button type="submit">Valider</button>
                </form>
                {errorMsg && (
                        <p className={style.error}>{errorMsg}</p>
                    )}

            </div>
            </main>
            <Footer/>

        </div>
        
    )
};
export default Updated;