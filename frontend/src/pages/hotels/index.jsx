import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getHotels } from "../../store/thunks/hotelsThunk.js";

import Hotel from "./components/Hotel";

import { Select, Input, Card, Button } from "antd";

import styles from "./Hotels.module.css"

const Hotels = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();

    const { destinations, error, loading } = useSelector(state => state.destinations);
    const { hotels, error: hotelsError, loading: hotelsLoading } = useSelector(state => state.hotels);

    useEffect(() => {
        if (selectedCity) {
            dispatch(getHotels({ destinationId: selectedCity, query: searchQuery }));
        }
    },[selectedCity, searchQuery]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <Select
                    placeholder={"Choose city"}
                    onChange={value => {setSelectedCity(value)}}
                >
                    {destinations.map(city => (
                        <Select.Option key={city.id} value={city.id}>
                            {city.label}
                        </Select.Option>
                    ))}
                </Select>

                <Input
                    placeholder={"Search hotels"}
                    value={searchQuery}
                    onChange={e => {setSearchQuery(e.target.value)}}
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