import { createBrowserRouter, RouterProvider } from "react-router";

//Loaders
import { hotelsLoader } from "./loaders/hotelsLoader.js";

//Pages
import Hotels from "./pages/hotels";
import AboutUs from "./pages/about-us";
import Resume from "./pages/resume/index.jsx";

//Components
import Layout from "./components/Layout";
import BookingLayout from "./components/BookingLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Resume/>,
            },
            {
                path: "/booking",
                element: <BookingLayout/>,
                children: [
                    {
                        index: true,
                        element: <div>Booking Home</div>,
                    },
                    {
                        path: "hotels",
                        element: <Hotels />,
                        loader: hotelsLoader,
                    },
                    {
                        path: "about-us",
                        element: <AboutUs />
                    },
                    {
                        path: "*",
                        element: <div>404 page</div>
                    }
                ]
            },
            {
                path: "*",
                element: <div>404 page</div>
            },
        ]
    },
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App;