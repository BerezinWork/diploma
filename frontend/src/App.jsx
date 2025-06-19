import { createBrowserRouter, RouterProvider } from "react-router";

//Loaders
import { hotelsLoader, hotelLoader } from "./loaders/hotelsLoader.js";

//Pages
import BookingHome from "./pages/bookingHome";
import Hotels from "./pages/hotels";
import Hotel from "./pages/hotel";
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