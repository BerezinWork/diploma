import { useLoaderData, useNavigate } from "react-router";

import SCard from "../../components/UI/molecules/SCard";

const hotels = [
    {
        id: 1,
        name: "Hotel 1",
        description: "Index 1 text",
    },
    {
        id: 2,
        name: "Hotel 2",
        description: "Index 2 text",
    },
    {
        id: 3,
        name: "Hotel 3",
        description: "Index 3 text",
    }
]

const AboutUs = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);
    return (
        <div>
            About Us
            <div >
                {hotels.map((hotel) => (
                    <SCard
                        key={hotel.id}
                        title={hotel.name}
                        text={hotel.description}
                        onClick={() => navigate(`/hotels/${hotel.id}`)}
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutUs;