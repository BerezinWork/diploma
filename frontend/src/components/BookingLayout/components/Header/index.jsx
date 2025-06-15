import { NavLink } from "react-router";

import { bookingRoutes } from "../../../../helpers/bookingRoutes.jsx";

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.navigateContainer}>
                {bookingRoutes.map(({ path, label, icon}) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === "/booking"}
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
export default Header;