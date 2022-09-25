import style from './item.module.scss';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Item=()=>{
    const[films,setFilms]=useState([]);

    useEffect(()=>{axios.get('http://localhost:8100/api/film').then((res)=>{console.log(res.data);
        setFilms(res.data);
    })
    },[])
    return (
        <main className={style.maincontainer}>
        <div className={style.container}>
            {films.map(film=>
                <div className={style.containerFilm}>
                    <div className={style.image} >
                        <img src={film.image} className={style.image}/>
                    </div>
                </div>
            )}
        </div>
    </main>
        
    )
};

export default Item;





// import { Paper } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import style from './item.module.scss';

// const ItemExample=(props)=>{

//     const items=[
//         {name:'film N°1',},
//         {name:'film N°2',},
//         {name:'film N°3',},

//     ]

//     return (
//             <Carousel>
//                 {items.map((item,i)=><Item key={i} item={item}/>)
//                 }
//             </Carousel>
//     )
// };

// const Item=(props)=>{
//     return(
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>
//             <button>
//                 check
//             </button>
//         </Paper>
//     )
// }

// export default Item;