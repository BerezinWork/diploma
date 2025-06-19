import { socialMediaRoutes } from "../../../../helpers/socialMediaRoutes.jsx";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.infoContainer}>
                {socialMediaRoutes.map( link => (
                    <div key={link.path}>
                        <a
                            className={styles.item}
                            href={link.path}
                            target="_blank"
                            title={link.label}
                        >
                            <span className={styles.link}>{link.label}</span>
                            <span className={styles.icon}>{link.icon}</span>
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.madeBy}>
                © {new Date().getFullYear()} Illia Berezin
            </div>
        </footer>
    )
}
export default Footer;