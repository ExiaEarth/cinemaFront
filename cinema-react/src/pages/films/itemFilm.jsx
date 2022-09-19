import axios from 'axios';
import style from './itemFilm.module.scss';
import { Link } from 'react-router-dom';


const Film=({nom,image,information,_id})=>{

    const onDelet=()=>{
        axios.delete(`http://localhost:8100/api/film/${_id}`).then().catch
    }
    
    return(
        <article>
            <Link to={`/film/${_id}`}>
                <img src={image} alt={nom}/>
                <div className={style.description}>
                <p>{nom}</p>
                <p>{information}</p>
                </div>

            </Link>
        </article>
    );
};
export default Film;