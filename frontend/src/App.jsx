import { createBrowserRouter, RouterProvider } from "react-router";

//Loaders
import { hotelsLoader, hotelLoader } from "./loaders/hotelsLoader.js";

//Pages
import BookingHome from "./pages/bookingHome";
import Hotels from "./pages/hotels";
import Hotel from "./pages/hotel";
import AboutUs from "./pages/about-us";
import Resume from "./pages/resume";
import PageNotFound from "./pages/404";

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
                        element: <BookingHome />,
                        loader: hotelsLoader,
                    },
                    {
                        path: "hotels",
                        element: <Hotels />,
                        loader: hotelsLoader,
                    },
                    {
                        path: "hotels/:id",
                        element: <Hotel/>,
                        loader: hotelLoader,
                        errorElement: <PageNotFound />,
                    },
                    {
                        path: "about-us",
                        element: <AboutUs />
                    },
                    {
                        path: "*",
                        element: <PageNotFound />
                    }
                ]
            },
            {
                path: "*",
                element: <PageNotFound />
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />
    },
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App;