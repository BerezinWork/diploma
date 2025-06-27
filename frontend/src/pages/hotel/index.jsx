import { useLoaderData, useNavigate } from "react-router";

import Button from "../../components/UI/atoms/Button";

import CityIcon from "../../assets/icons/hotelCard/city.svg?react";
import AddressIcon from "../../assets/icons/hotelCard/address.svg?react";
import StateIcon from "../../assets/icons/hotelCard/state.svg?react";
import RatingIcon from "../../assets/icons/hotelCard/rating.svg?react";

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
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.main}>
                <img className={styles.mainImage} alt={name} src={url} />
                <div className={styles.textContent}>
                    <div className={styles.item}>
                        <span className={styles.icon}><CityIcon /></span>
                        <span>City</span>
                        <span></span>
                        <span className={styles.infoColor}>{city}</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}><AddressIcon /></span>
                        <span>Address</span>
                        <span></span>
                        <span className={styles.infoColor}>{address}</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}><StateIcon /></span>
                        <span>State</span>
                        <span></span>
                        <span className={styles.infoColor}>{state}</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}><RatingIcon /></span>
                        <span>Rating</span>
                        <span></span>
                        <span className={styles.infoColor}>{rating} / 5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;