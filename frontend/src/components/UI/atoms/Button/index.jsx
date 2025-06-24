import styles from "./Button.module.css";

const Button = ({
    disabled = false,
    htmlType = 'button',
    type = 'primary',
    text = 'Click',
    onClick = () => {}
}) => {
    return (
        <button
            disabled={disabled}
            type={htmlType}
            className={`${styles[type]} ${styles.button}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
export default Button;