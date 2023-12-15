import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { MainApp } from "./MainApp";
import { HomePage } from "./HomePage";  
import { LoginPage } from "./LoginPage";
// import { ErrorPage } from "./ErrorPage";
 
 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            }
        ]
    }
]);