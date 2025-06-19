import Main from './components/Main';
import About from './components/About';



import styles from './BookingHome.module.css';

const BookingHome = () => {
    return (
        <div className={styles.container}>
            <Main />
            <About />
        </div>
    )
}
export default BookingHome;