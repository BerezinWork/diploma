import { ConfigProvider } from "antd";
import bookingTheme from "../../styles/bookingTheme.js";

import { Outlet } from "react-router";


import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./BookingLayout.module.css";
import '../../styles/booking-vars.css';
import '../../styles/antd-overrides.css';

const BookingLayout = () => {
    return(
        <ConfigProvider theme={bookingTheme}>
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