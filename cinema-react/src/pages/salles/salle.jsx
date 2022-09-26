import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from  './salle.module.scss';




const Salle=({onOpenMenu})=>{

    const role=useSelector(state=>state.auth.role)
    const [salles,setSalles]=useState([]);
    const admin='Admin';

    useEffect(()=>{
        axios.get('http://localhost:8100/api/salle').then((res)=>{console.log(res.data.Salle);
        setSalles(res.data.Salle);
    })

    },[])

    return(
        <main className={style.maincontainer}>
            <h1>Salles</h1>
            {
                ({role}!={admin})?
                    <div> 
                        <button className={style.update}  onClick={() => onOpenMenu()}> + </button>
                    </div>
                    :<span><button>test</button></span>
            }
            <div className={style.container}>
                {salles.map(salle=>
                    <div className={style.containerFilm}>
                        <div className={style.image} ><img src={salle.image} className={style.image} /></div>
                        <div className={style.desc}><p> La {salle.nom}  <br></br> est composée de {salle.place} places assise et {salle.information}</p></div>
                    </div>
                )}
            </div>
        </main>
    )
};
export default Salle;