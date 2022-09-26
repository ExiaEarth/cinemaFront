
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './film.module.scss'

const Film=(onOpenMenu)=>{
    const role=useSelector(state=>state.auth.role)
    const admin='Admin';

    const[films,setFilms]=useState([]);

    useEffect(()=>{axios.get('http://localhost:8100/api/film').then((res)=>{console.log(res.data);
        setFilms(res.data);
    })
    },[])
        return(
            <main className={style.maincontainer}>
                <h1>Actuellement dans les Salles</h1>
                {
                ({role}!={admin})?
                    <div> 
                        <button className={style.update}  onClick={() => onOpenMenu()}> + </button>
                    </div>
                    :<span><button>test</button></span>
            }
                <div className={style.container}>
                    {films.map(film=>
                        <div className={style.containerFilm}>
                            <div className={style.image} >
                                <img src={film.image} className={style.image}/>
                            </div>
                            <div className={style.desc}>
                                <p> {film.nom}  <br></br> {film.information}</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
    )
};
export default Film;