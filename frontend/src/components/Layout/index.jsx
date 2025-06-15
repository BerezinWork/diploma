import { Outlet } from "react-router";

import SideBar from "./components/SideBar";

import styles from "./Layout.module.css";

const Layout = () => {
    return(
        <div className={styles.container}>
            <SideBar></SideBar>
            <Outlet/>
        </div>
    )
}

export default Layout;