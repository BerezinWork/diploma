import { useLoaderData, useNavigate } from "react-router";

import Button from "../../components/UI/atoms/Button";

import styles from "./Hotel.module.css";

const Hotel = () => {
    const navigate = useNavigate();
    const { name, address, city, state, hotel_rating: rating, url } = useLoaderData();


    return(
        <div className={styles.wrapper}>
            <div className={styles.button}>
                <Button
                    type="secondary"
                    text="Go Back"
                    onClick={() => navigate("/booking/hotels")}
                />
            </div>
            <div className={styles.main}>
                <h1 className={styles.title}>{name}</h1>
                <img className={styles.mainImage} alt={name} src={url} />
                <div className={styles.textContent}>
                    <span>Address:</span> <span>{address}</span>
                    <span>City:</span> <span>{city}</span>
                    <span>State:</span> <span>{state}</span>
                    <span>Rating:</span> <span>{rating}</span>
                </div>
            </div>
        </div>
    )
}

export default Hotel;