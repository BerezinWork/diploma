import { useNavigate } from "react-router";
import PropTypes from "prop-types";

import { Card, Button } from "antd";

const Hotel = ({ hotel }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/booking/hotels/${hotel.id}`);
    }

    return (
        <Card
            title={hotel.name}
            cover={<img alt="Hotel Img" src={hotel.url} />}
        >
            <p><strong>Address: </strong>{hotel.address}</p>
            <p><strong>City: </strong>{hotel.city}</p>
            <p><strong>State: </strong>{hotel.state}</p>
            <p><strong>Rating: </strong>{hotel.hotel_rating}</p>

            <Button type="primary" onClick={handleNavigate}>More</Button>
        </Card>
    );
};

Hotel.propTypes = {
    hotel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        hotel_rating: PropTypes.number.isRequired,
    })
}

export default Hotel;