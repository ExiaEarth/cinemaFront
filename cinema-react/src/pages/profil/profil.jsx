// import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './profil.module.scss'

const Profil=()=>{
    const pseudo=useSelector(state=>state.auth.pseudo);
    const prenom=useSelector(state=>state.auth.prenom);
    const nom=useSelector(state=>state.auth.nom);
    const email=useSelector(state=>state.auth.email);
    const avatar=useSelector(state=>state.auth.avatar)

    return( 
        <div>
            <main className={style.maincontainer}>
                <h1>profil</h1>
                <div className={style.container}>

                    <form>
                        <div className={style.avatar}>
                            <label htmlFor=""> Avatar:</label>
                            <img src={avatar}/>
                        </div>
                        
                        <div className={style.infoContainer}>

                            <div className={style.info}>
                                <label htmlFor=""> Pseudo :</label>
                                {(pseudo)?<p>{pseudo}</p>:<p></p>}
                            </div>

                            <div className={style.info}>

                                <label htmlFor=""> Prénom:</label>
                                {(pseudo)?<p>{prenom}</p>:<p></p>}
                            </div>
                            <div className={style.info}>
                                <label htmlFor=""> Nom :</label>
                                {(pseudo)?<p>{nom}</p>:<p></p>}
                            </div>

                            <div className={style.info}>
                                <label htmlFor=""> @mail:</label>
                                {(pseudo)?<p>{email}</p>:<p></p>}
                            </div>





                        </div> 
                    </form>
                    <Link to='/Profil/Update'><button>Modifier</button></Link>
                </div>
            </main>
        </div>
    )
};

export default Profil;