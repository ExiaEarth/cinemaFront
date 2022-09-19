
    import style from './affiche.module.scss'
    import Item from '../item/item';

const AfficheComp=()=>{
    return(
        <div className={style.container}>
            <Item/>
        </div> 
    )
}
{/* <link rel="stylesheet" href="./carousel.js" /> */}
export default AfficheComp;
