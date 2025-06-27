import ReactIcon from "../../../../assets/icons/about/react.svg?react";
import JsIcon from "../../../../assets/icons/about/js.svg?react";
import ReduxIcon from "../../../../assets/icons/about/redux.svg?react";
import AntIcon from "../../../../assets/icons/about/ant.svg?react";


import styles from "./AboutProject.module.css";

const AboutProject = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imagesContainer}>
                <div className={styles.imgGroup}>
                    <div className={styles.icon1}><ReactIcon /></div>
                    <div className={styles.icon2}><JsIcon /></div>
                </div>
                <div className={styles.imgGroup}>
                    <div className={styles.icon1}><ReduxIcon /></div>
                    <div className={styles.icon2}><AntIcon /></div>
                </div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Under the Hood:<br/><span>The Tech Behind the Comfort</span></h1>
                <div className={styles.textItem}>
                    <p>
                        "Home Sweet Home" is built on a foundation of modern, robust, and scalable technologies, chosen to deliver a seamless and responsive user experience.
                    </p>
                </div>
                <div className={styles.textItem}>
                    <h3>Core & Architecture:</h3>
                    <p>
                        The application is a Single Page Application (SPA) built with <span>React</span>.
                        At its heart is a component-based architecture, which allows for reusable and
                        maintainable UI elements. To manage the application's state predictably,
                        I've implemented <span>Redux Toolkit</span>, utilizing its powerful
                        <span> `createSlice` </span> for logic separation and
                        <span> `createAsyncThunk` </span> for handling all asynchronous operations,
                        such as fetching data from the server.
                    </p>
                </div>
                <div className={styles.textItem}>
                    <h3>Navigation & UI:</h3>
                    <p>
                        Client-side routing is flawlessly handled by <span>React Router v6</span>,
                        leveraging its data loading capabilities with <span>`loader` functions</span> for
                        efficient data fetching before a page renders. The entire user interface is
                        custom-built. For the core layout and structure, I used pure
                        <span>CSS Modules</span> with <span>Flexbox and Grid</span>, giving me full
                        control over the design. For more complex components like selects and pagination,
                        I chose the powerful <span>Ant Design</span> library, which was deeply
                        customized to fit the project's unique brand identity.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject;