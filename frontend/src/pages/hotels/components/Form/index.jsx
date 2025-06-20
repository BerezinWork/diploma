import {Input, Select} from "antd";

import styles from "./Form.module.css";

const Form = ( { destinations, searchQuery, setSearchQuery, selectedCity, setSelectedCity} ) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.fieldsGroup}>
                <div className={styles.fieldWrapper}>
                    <Select
                        className={styles.select}
                        placeholder={"Choose city"}
                        value={selectedCity}
                        onChange={value => {setSelectedCity(value)}}
                    >
                        <Select.Option key="all" value="all">All Cities</Select.Option>
                        {destinations.map(city => (
                            <Select.Option key={city.id} value={city.id}>
                                {city.label}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className={styles.fieldWrapper}>
                    <Input
                        className={styles.input}
                        placeholder={"Search hotels"}
                        value={searchQuery}
                        onChange={e => {setSearchQuery(e.target.value)}}
                    />
                </div>
            </div>
        </div>
    )
}
export default Form;