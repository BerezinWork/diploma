import {useNavigate} from 'react-router';

import Button from "../../../../components/UI/atoms/Button";

import styles from './About.module.css';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <div className={styles.titleFirstColumn}>
                    <div>Crafted with</div>
                    <div>Built with</div>
                </div>
                <div className={styles.titleSecondColumn}>
                    <div>Passion</div>
                    <div>Code</div>
                </div>
            </h2>
            <div className={styles.text}>
                <p className={styles.textBlock}>
                    This "Home Sweet Home" project is more than just a booking platform. It's a developer's journey into creating beautiful, user-centric digital experiences. Crafted by Illia Berezin, this application serves as a testament to what's possible when passion for code meets thoughtful design.
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