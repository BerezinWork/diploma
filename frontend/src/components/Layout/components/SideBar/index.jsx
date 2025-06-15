import { NavLink } from "react-router";

import { sideRoutes } from "../../../../helpers/sideBarRoutes.jsx";

import styles from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.navigateContainer}>
                {sideRoutes.map(({ path, icon, label }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={ ({ isActive }) =>
                            `${styles.link} ${isActive ? styles.activeLink : ""}`
                        }
                    >
                        <span className={styles.icon}>
                            {icon}
                        </span>
                        <span>
                            {label}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
export default SideBar;