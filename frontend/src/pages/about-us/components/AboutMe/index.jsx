import TelegramIcon from "../../../../assets/icons/about/telegram.svg?react";
import LinkedInIcon from "../../../../assets/icons/about/linkedin.svg?react";
import MailIcon from "../../../../assets/icons/about/mail.svg?react";
import GitHubIcon from "../../../../assets/icons/about/github.svg?react";

import styles from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>The Developer's Touch:<br/><span>A Note from the Creator</span></h2>
                <div className={styles.textItem}>
                    <p>
                        Hi, I'm <span>Illia Berezin</span>, the front-end
                        developer behind "Home Sweet Home".
                    </p>
                </div>
                <div className={styles.textItem}>
                    <p>
                        This project started as a challenge to myself: to build a complete,
                        beautiful, and functional application from scratch, putting into practice
                        everything I love about web development. For me, coding is not just about
                        writing lines of logic; it's about <span>solving problems</span>,
                        <span> crafting intuitive experiences</span>, and
                        <span> bringing ideas to life</span>.
                    </p>
                </div>
                <div className={styles.textItem}>
                    <p>
                        I believe that the best products are born from a blend of
                        <span>technical excellence</span> and a deep sense of
                        <span>empathy for the user</span>. Throughout this project,
                        I've focused on writing <span>clean, maintainable code</span>,
                        creating a <span>thoughtful user interface</span>, and paying
                        close attention to the small details that make a big difference.
                    </p>
                </div>
                <div className={styles.textItem}>
                    <p>
                        I'm always eager to <span>learn, grow, and take on new challenges</span>.
                        If you like what you see here, I'd be thrilled to connect.
                    </p>
                </div>
            </div>
            <div className={styles.imagesContainer}>
                <div className={styles.imgGroup}>
                    <div className={styles.icon1}>
                        <a href="https://t.me/foreverlimbo" target="_blank">
                            <TelegramIcon/>
                        </a>
                    </div>
                    <div className={styles.icon2}>
                        <a href="https://www.linkedin.com/in/illia-berezin-809b6536a/" target="_blank">
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
                <div className={styles.imgGroup}>
                    <div className={styles.icon1}>
                        <a href="mailto:berezin.main@gmail.com" target="_blank">
                            <MailIcon/>
                        </a>
                    </div>
                    <div className={styles.icon2}>
                        <a href="https://github.com/BerezinWork" target="_blank">
                            <GitHubIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;