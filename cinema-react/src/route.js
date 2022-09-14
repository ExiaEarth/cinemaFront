import Accueil from "./pages/accueil/accueil";
import Profil from "./pages/profil/profil";
import Register from "./pages/register/register";
import Salle from "./pages/salles/salle";






export const routes= [
    {
        path:'',
        element:<Accueil/>
    },
    {
        path:'Accueil',
        element:<Accueil/>
    },
    {
        path:'Register',
        element:<Register/>
    },
    {
        path:'Pofil',
        element:<Profil/>
    },
    {
        path:'Salles',
        element:<Salle/>
    },
]