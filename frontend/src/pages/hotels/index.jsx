import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useDebounce from "../../hooks/useDebounce.js";

import { getHotels } from "../../store/thunks/hotelsThunk.js";

import Hotel from "./components/Hotel";
import Form from "./components/Form";
import PaginationBlock from "./components/PaginationBlock";

import styles from "./Hotels.module.css"

const Hotels = () => {
    const [selectedCity, setSelectedCity] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const debouncedQuery = useDebounce(searchQuery);

    const hotelsPerPage = 6;

    const { destinations, error, loading } = useSelector(state => state.destinations);
    const {
        items: hotels,
        totalCount,
        error: hotelsError,
        loading: hotelsLoading
    } = useSelector(state => state.hotels);

    useEffect(() => {
        const destinationId = selectedCity === "all" ? null : selectedCity;
        dispatch(getHotels({
            destinationId,
            query: debouncedQuery,
            page: currentPage,
            limit: hotelsPerPage,
        }));
    },[selectedCity, debouncedQuery, currentPage, dispatch]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCity, debouncedQuery])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Find Your <span>Sweet Home</span></h2>

            <div className={styles.form}>
                <Form
                    destinations={destinations}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>

            {!hotelsLoading && hotels.length === 0 && (
                <div className={styles.noResultContainer}>
                    <h3 className={styles.noResultTitle}><span>Sorry</span><br/>No Hotels Found</h3>
                    <p className={styles.noResultText}>We couldn't find any hotels matching your search. <span>Try adjusting your filters.</span></p>
                </div>
            )}

            {!hotelsLoading && hotels.length > 0 && (
                <div className={styles.hotels}>
                    {hotels.map(hotel => (
                        <Hotel
                            key={hotel.id}
                            hotel={hotel}
                        />
                    ))}
                </div>
            )}

            {!hotelsLoading && hotels.length > 0 && (
                <div className={styles.pagination}>
                    <PaginationBlock
                        currentPage={currentPage}
                        totalItems={totalCount}
                        pageSize={hotelsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
}

export default Hotels;