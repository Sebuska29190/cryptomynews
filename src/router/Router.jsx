import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Homemain from "../Layout/Homemain";
import Categorynews from "../Layout/Categorynews";
import Authlayout from "../Layout/Authlayout";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import Newsdetails from "../Components/Newscard/Newsdetails";
import Privateroute from "../PrivateRoute/Privateroute";
import Loading from "../Layout/Loading";
import Forgetpasswor from "../Components/User/Forgetpasswor";
import { getAllArticles, getArticlesByCategory, getArticleBySlug } from "../lib/queries";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                path: "",
                element: <Homemain></Homemain>,
                loader: async () => await getAllArticles()
            },
            {
                path: '/category/:id',
                element: <Categorynews></Categorynews>,
                loader: async ({ params }) => await getArticlesByCategory(params.id),
                // for optimization
                hydrateFallbackElement: <Loading></Loading>
            },

        ],

    },
    {
        path: '/auth',
        element: <Authlayout></Authlayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,

            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/passwordreset',
                element: <Forgetpasswor></Forgetpasswor>
            }
        ]

    },
    {
        path: '/newsdetails/:id',
        element: <Privateroute>
            <Newsdetails></Newsdetails>
        </Privateroute>,
        loader: async ({ params }) => await getArticleBySlug(params.id),
        // for optimization
        hydrateFallbackElement: <Loading></Loading>
    }
])
export default router;