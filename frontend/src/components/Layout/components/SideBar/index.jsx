import { useState } from 'react';
import { NavLink } from "react-router";

import { sideRoutes } from "../../../../helpers/sideBarRoutes.jsx";

import styles from "./SideBar.module.css"

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.sideBarContainer} ${isOpen ? styles.open : ''}`}>
            <button
                className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
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