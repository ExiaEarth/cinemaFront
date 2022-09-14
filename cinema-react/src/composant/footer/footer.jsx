import  style  from "./footer.module.scss";



const Footer=()=>{
    return(
        <div className={style.container}>
            <div className={style.divText}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet aliquam pariatur porro. Voluptas nihil voluptatem optio est culpa blanditiis quam delectus minus praesentium, vel numquam asperiores ea amet aut adipisci alias nam libero rem, deleniti quisquam perspiciatis harum debitis?</p>
            </div>
            <div className={style.divInformation}>
                <ul>
                    <li><p>Dieu</p></li>
                    <li><a href="http://">test lien</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;