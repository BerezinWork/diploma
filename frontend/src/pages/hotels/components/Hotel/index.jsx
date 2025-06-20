import { useNavigate } from "react-router";
import PropTypes from "prop-types";

import Button from "../../../../components/UI/atoms/Button";

import styles from "./Hotel.module.css";

const Hotel = ({ hotel }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/booking/hotels/${hotel.id}`);
    }

    return (
        <div className={styles.hotelCard}>
            <h3 className={styles.title}>{hotel.name}</h3>
            <div className={styles.hotelImage}>
                <img alt={hotel.name} src={hotel.url} />
            </div>
            <div className={styles.content}>
                <span>City:</span> <span className={styles.difColor}>{hotel.city}</span>
                <span>Address:</span> <span className={styles.difColor}>{hotel.address}</span>
                <span>Rating:</span> <span className={styles.difColor}>{hotel.hotel_rating}</span>
            </div>
            <div className={styles.button}>
                <Button
                    text="See More"
                    type="secondary"
                    onClick={() => handleNavigate}
                />
            </div>
        </div>
    );
};

Hotel.propTypes = {
    hotel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        hotel_rating: PropTypes.number.isRequired,
    })
}

export default Hotel;