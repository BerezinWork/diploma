import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./BookingLayout.module.css";

const BookingLayout = () => {
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.outlet}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default BookingLayout;