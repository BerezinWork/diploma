import { useLoaderData, useNavigate } from "react-router";

import { Button , Card } from "antd";

import styles from "./Hotel.module.css";

const Hotel = () => {
    const navigate = useNavigate();
    const { name, address, city, state, hotel_rating: rating } = useLoaderData();


    return(
        <div className={styles.wrapper}>
            <Button onClick={() => {navigate("/booking/hotels")}}>Go Back</Button>
            <Card
                title={name}
                cover={<img alt={name} src={city} />}
            >
                <p><strong>Address: </strong>{address}</p>
                <p><strong>City: </strong>{city}</p>
                <p><strong>State: </strong>{state}</p>
                <p><strong>Rating: </strong>{rating}</p>
            </Card>
        </div>
    )
}

export default Hotel;