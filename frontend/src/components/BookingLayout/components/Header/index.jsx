import { NavLink, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../../store/slices/authSlice.js";

import { bookingRoutes } from "../../../../helpers/bookingRoutes.jsx";

import Button from "../../../UI/atoms/Button";
import LogoImage from "../../../../assets/icons/logo.svg";

import styles from './Header.module.css';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = !!useSelector(state => state.auth.token);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/booking');
    };

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
                <div>
                    {isLoggedIn ? (
                        <Button
                            text="Log Out"
                            onClick={handleLogout}
                        ></Button>
                    ) : (
                        <Button
                            text="Sign In"
                            onClick={() => navigate("/booking/login")}
                        ></Button>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Header;