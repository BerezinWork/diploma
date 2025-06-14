import { createBrowserRouter, RouterProvider } from "react-router";

//Loaders
import { hotelsLoader } from "./loaders/hotelsLoader.js";

//Pages
import Hotels from "./pages/hotels";
import AboutUs from "./pages/about-us";
import MaterialPage from "./pages/material-page";
import AntPage from "./pages/ant-page";
import TailWind from "./pages/tailwind-page";

//Components
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: "hotels",
                element: <Hotels />,
                loader: hotelsLoader,
            },
            {
                path: "about-us",
                element: <AboutUs />,
                loader: () => {console.log("Loading data"); return "My Data!"}
            },
            {
                path: "*",
                element: <div>404 page</div>
            }
        ],
    },
    {
        path: "/material-page",
        element: <MaterialPage />,
    },
    {
        path: "/ant-page",
        element: <AntPage />,
    },
    {
        path: "/tailwind-page",
        element: <TailWind />,
    },
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App;