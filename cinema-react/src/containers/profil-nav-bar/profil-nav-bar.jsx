import { Avatar, Divider, Stack } from "@mui/material";
import style from '';



const ProfilNavBar=({onSelectedMenu})=>{
    return(
        <nav className={style.profilNav}>
            <Stack
                classeName={style.stackStyle}
                direction='column'
                divider={<Divider orientation='horizontal' />}
                spacing={2}>
                <Avatar src=""/>
            </Stack>
        </nav>
    );
}

export default ProfilNavBar;