import { Outlet } from "react-router";
import { ConfigProvider } from "antd";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./BookingLayout.module.css";
import '../../styles/booking-vars.css';

import bookingTheme from "../../styles/bookingTheme.js";

const BookingLayout = () => {
    return(
        <ConfigProvider config={bookingTheme}>
            <div className={`booking-project-wrapper ${styles.container}`}>
                <Header />
                <div className={styles.outlet}>
                    <Outlet />
                </div>
                <Footer/>
            </div>
        </ConfigProvider>
    )
}

export default BookingLayout;