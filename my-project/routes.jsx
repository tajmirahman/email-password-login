import { createBrowserRouter } from "react-router-dom";
import Main from "./src/component/Main";
import Home from "./src/component/Home";
import Login from "./src/component/Login";
import Register from "./src/component/Register";
import SignUp from "./src/component/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
            path:'/signUp',
            element:<SignUp />
        }
      ]
    },
  ]);

  export default router;