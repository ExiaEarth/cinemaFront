import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import style from  './salle.module.scss';




const Salle=()=>{

    const [salles,setSalles]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8100/api/salle').then((res)=>{console.log(res.data.Salle);
        setSalles(res.data.Salle);
    })

    },[])

    return(
        <main className={style.maincontainer}>
            <h1>Salles</h1>
            <div className={style.container}>
                {salles.map(salle=>
                    <div className={style.containerFilm}>
                        <div className={style.image} ><img src={salle.image} className={style.image} /></div>
                        <div className={style.desc}><p> La {salle.nom}  <br></br> est composée de {salle.place} place assise et {salle.information}</p></div>
                    </div>
                )}
            </div>
        </main>
    )
};
export default Salle;