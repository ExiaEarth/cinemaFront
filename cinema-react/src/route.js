import Accueil from "./pages/accueil/accueil";
import Error404 from "./pages/erreurs/error404";
import Film from "./pages/films/film";
import Login from "./pages/login/login";
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
        path:'Profil',
        element:<Profil/>
    },
    {
        path:'Salle',
        element:<Salle/>
    },
    {
        path:'Film',
        element:<Film/>
    },
    {
        path:'Login',
        element:<Login/>
    },
    {
        path:'Error',
        element:<Error404/>
    },
    {
        path:'Login/Error',
        element:<Error404/>
    },
    {
        path:'*',
        element:<Error404/>
    },
    // if (!path) {
    //     {
    //         path:'Error',
    //         element:<Error404/>
    //     },
    // },
]

// if (!path) {
//     {
//         path:'Error',
//         element:<Error404/>
//     },
// }