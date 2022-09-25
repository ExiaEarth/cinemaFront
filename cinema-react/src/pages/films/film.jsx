
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './film.module.scss'

const Film=()=>{
    const[films,setFilms]=useState([]);

    useEffect(()=>{axios.get('http://localhost:8100/api/film').then((res)=>{console.log(res.data);
        setFilms(res.data);
    })
    },[])
        return(
            <main className={style.maincontainer}>
                <h1>Actuellement dans les Salles</h1>
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