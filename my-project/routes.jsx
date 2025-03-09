import { createBrowserRouter } from "react-router-dom";
import Main from "./src/component/Main";
import Home from "./src/component/Home";
import Login from "./src/component/Login";
import Register from "./src/component/Register";

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
        }
      ]
    },
  ]);

  export default router;