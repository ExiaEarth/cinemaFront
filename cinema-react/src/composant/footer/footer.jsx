import { Typography,Link } from "@mui/material";
import  style  from "./footer.module.scss";
import  stylelo  from "../../images/AMECINE(1).png";


const Footer=()=>{
    return(
        <div className={style.container}>
            <div className={style.divText}>
                <p>Ce projet a été crée par ©Marc Lemer. <br/>Dans le but du projet final de fin de formation de chez Interface3.Namur<br/>
                Fait du 12/09/2022 au 23/09/22.
                </p>
            </div>

            <div className={style.divInformation}>
                <ul>
                    <p>Voici deux lien vert le répositorie back/front du projet</p>
                    <a href="https://github.com/ExiaEarth/cinemaFront">Lien ver le Front du projet.</a><br/>
                    <a href="https://github.com/ExiaEarth/cinemaBackProjet">Lien vers le Back du projet.</a>

                </ul>
            </div>
        </div>
    )
};

export default Footer;