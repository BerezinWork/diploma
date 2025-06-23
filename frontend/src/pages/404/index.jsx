import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><span>404</span><br/>Page Not Found</h1>
        </div>
    )
}
export default PageNotFound;