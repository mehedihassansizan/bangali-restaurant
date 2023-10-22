import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/blog/blog";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Chef_Recipes from "../pages/chef_recipes/Chef_Recipes";
import Page404 from "../pages/404page/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('https://bangali-restaurant-server-kdfvx8j9l.vercel.app/chefDetails')
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chef_recipes/:id',
        element: <Chef_Recipes></Chef_Recipes>,
        loader: ({params}) => fetch(`https://bangali-restaurant-server-kdfvx8j9l.vercel.app/chefDetails/${params.id}`)
      },
      {
        path: '*',
        element: <Page404></Page404>
      }
    ],
  }
]);

export default router;
