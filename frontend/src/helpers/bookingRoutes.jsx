import HomeIcon from "../assets/icons/home.svg?react";
import HotelsIcon from "../assets/icons/hotels.svg?react";
import AboutIcon from "../assets/icons/about.svg?react";

export const bookingRoutes = [
    {label: "Home", path: "/booking", icon: <HomeIcon />},
    {label: "Hotels", path: "/booking/hotels", icon: <HotelsIcon />},
    {label: "About", path: "/booking/about-us", icon: <AboutIcon />},
]