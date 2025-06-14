import { Button } from "@mui/material";

import styles from './SCard.module.scss';

const SCard = ({
    title = "Index Name",
    text = "...",
    onClick = () => {},
    btnLabel = "See more"
}) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
            <Button
                onClick={onClick}
                size="small"
                variant="contained"
                style={{
                    padding: 40,
                    color: "white",
                    backgroundColor: "red",
                }}
            >
                {btnLabel}
            </Button>
        </div>
    )
}

export default SCard;