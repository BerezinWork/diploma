import {useNavigate} from 'react-router';

import Button from "../../../../components/UI/atoms/Button";

import styles from './About.module.css';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Crafted with <span>Passion</span>, Built with <span>Code</span></h2>
            </div>
            <div className={styles.text}>
                <p>
                    This "Home Sweet Home" project is more than just a booking platform. It's a developer's journey into creating beautiful, user-centric digital experiences. Crafted by Illia Berezin, this application serves as a testament to what's possible when passion for code meets thoughtful design.
                </p>
                <p>
                    The application is built from the ground up using a modern React stack. State management is powerfully handled by Redux Toolkit, ensuring predictable and scalable data flow. Seamless client-side navigation is implemented with React Router, while all visual components are custom-built using CSS Modules to maintain a unique and consistent design system without relying on external UI libraries.
                </p>
            </div>
            <div className={styles.button}>
                <Button
                    text="Learn More"
                    onClick={() => navigate('/booking/about-us')}
                />
            </div>
        </div>
    )
}
export default About;