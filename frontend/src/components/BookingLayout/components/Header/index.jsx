import { NavLink } from "react-router";

import { bookingRoutes } from "../../../../helpers/bookingRoutes.jsx";

import Button from "../../../UI/atoms/Button";
import LogoImage from "../../../../assets/icons/logo.svg";

import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.navigateContainer}>
                <div className={styles.logoContainer}>
                    <NavLink to="/booking" className={styles.logoLink}>
                        <img className={styles.logo} alt="Logo" src={LogoImage} />
                    </NavLink>
                </div>
                <div className={styles.menuContainer}>
                    <nav className={styles.menuNav}>
                        {bookingRoutes.map(({ path, label}) => (
                            <NavLink
                                key={path}
                                to={path}
                                end={path === "/booking"}
                                className={ ({ isActive }) =>
                                    `${styles.link} ${isActive ? styles.activeLink : ""}`
                                }
                            >
                        <span>
                            {label}
                        </span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <Button
                    text="Sing Up"
                    onClick={() => {}}
                ></Button>
            </div>
        </header>
    )
}
export default Header;