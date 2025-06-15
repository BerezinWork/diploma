import { useNavigate } from "react-router";

import { Card, Button } from "antd";

const Hotel = ({ hotel }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/booking/hotels/${hotel.id}`);
    }

    return (
        <Card
            title={hotel.name}
            cover={<img alt="Name" src={hotel.url} />}
        >
            <p><strong>Address: </strong>{hotel.address}</p>
            <p><strong>City: </strong>{hotel.city}</p>
            <p><strong>State: </strong>{hotel.state}</p>
            <p><strong>Rating: </strong>{hotel["hotel_rating"]}</p>

            <Button type="primary" onClick={handleNavigate}>More</Button>
        </Card>
    )
}

export default Hotel;