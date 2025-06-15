import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getHotels } from "../../store/thunks/hotelsThunk.js";

import Hotel from "./components/Hotel";
import Form from "./components/Form";

import styles from "./Hotels.module.css"

const Hotels = () => {
    const [selectedCity, setSelectedCity] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();

    const { destinations, error, loading } = useSelector(state => state.destinations);
    const { hotels, error: hotelsError, loading: hotelsLoading } = useSelector(state => state.hotels);

    useEffect(() => {
        if (selectedCity) {
            const destinationId = selectedCity === "all" ? null : selectedCity;
            dispatch(getHotels({ destinationId, query: searchQuery }));
        }
    },[selectedCity, searchQuery]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <Form
                    destinations={destinations}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>

            <div className={styles.hotels}>
                {hotels.map(hotel => (
                    <Hotel
                        key={hotel.id}
                        hotel={hotel}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hotels;