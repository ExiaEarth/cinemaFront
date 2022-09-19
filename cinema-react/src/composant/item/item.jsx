import style from './item.module.scss';

const Item=()=>{
    return (
        <>
            <div className={style.container}>
                {/* <h2>Film1</h2> */}
                <div className={style.filmOne}>
                   <button type="submit">test</button>
                </div>
            </div>

            <div className={style.container}>
                {/* <h2>Film2</h2> */}
                <div className={style.filmDeux}>
                   <button type="submit">test</button>
                </div>
            </div>

            <div className={style.container}>
                {/* <h2>Film3</h2> */}
                <div className={style.filmTrois}>
                   <button type="submit">test</button>
                </div>
            </div>

            <div className={style.container}>
                {/* <h2>Film4</h2> */}
                <div className={style.filmQuatre}>
                   <button type="submit">test</button>
                </div>
            </div>

            <div className={style.container}>
                {/* <h2>Film5</h2> */}
                <div className={style.filmCinq}>
                   <button type="submit">test</button>
                </div>
            </div>

            <div className={style.container}>
                {/* <h2>Film6</h2> */}
                <div className={style.filmSix}>
                   <button type="submit">test</button>
                </div>
            </div>
            
            <div className={style.container}>
                {/* <h2>Film7</h2> */}
                <div className={style.filmSept}>
                   <button type="submit">test</button>
                </div>
            </div>
        </>
        
    )
};

export default Item;