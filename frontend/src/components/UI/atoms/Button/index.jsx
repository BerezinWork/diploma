import styles from "./Button.module.css";

const Button = ({
    type = 'primary',
    text = 'Click',
    onClick = () => {
    }
}) => {
    return (
        <button className={`${styles[type]} ${styles.button}`} onClick={onClick}>{text}</button>
    )
}
export default Button;