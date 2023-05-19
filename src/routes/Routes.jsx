import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewDetailsToys from "../pages/ViewDetailsToys/ViewDetailsToys";
import PrivetRoute from "./PrivetRoute";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateMyToy from "../pages/UpdateMyToy/UpdateMyToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
 {
    path: '/',
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
   path: 'login',
   element: <Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path: 'allToys',
            element: <AllToys></AllToys>,
        },
        {
            path: 'addToy',
            element: <PrivetRoute><AddAToy></AddAToy></PrivetRoute>,
        },
        {
            path: 'myToys',
            element:<PrivetRoute><MyToys></MyToys></PrivetRoute>,
        },
        {
    path: 'updateToys/:id',
    element:<PrivetRoute><UpdateMyToy></UpdateMyToy></PrivetRoute>,
    loader: ({params})=> fetch(`http://localhost:5000/allToy/${params.id}`)
        },
        {
    path: 'singleToy/:id',
    element:<PrivetRoute> <ViewDetailsToys></ViewDetailsToys></PrivetRoute>,
    loader: ({params})=> fetch(`http://localhost:5000/allToy/${params.id}`)
        },
       
        
    ]
 },
 {
    path:'*',
    element: <ErrorPage></ErrorPage>
 }


])
export default router;