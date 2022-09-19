import style from './item.module.scss';

const Item=()=>{
    return (
        <>
            <div className={style.container}>
                <h2>Film1</h2>
            </div>

            <div className={style.container}>
            <h2>Film2</h2>
            </div>

            <div className={style.container}>
            <h2>Film3</h2>
            </div>

            <div className={style.container}>
            <h2>Film4</h2>
            </div>

            <div className={style.container}>
            <h2>Film5</h2>
            </div>

            <div className={style.container}>
            <h2>Film6</h2>
            </div>
            
            <div className={style.container}>
            <h2>Film7</h2>
            </div>
        </>
        
    )
};

export default Item;