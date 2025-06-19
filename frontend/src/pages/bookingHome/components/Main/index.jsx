import { useNavigate } from "react-router";

import MainImage from "../../../../assets/img/home/mainImg.jpg";
import Image1 from "../../../../assets/img/home/image1.jpg";
import Image2 from "../../../../assets/img/home/image2.jpg";
import Image3 from "../../../../assets/img/home/image3.jpg";

import Button from "../../../../components/UI/atoms/Button";

import styles from './Main.module.css';

const Main = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.collageContainer}>
                <div className={styles.imageWrapper1}>
                    <img src={`${Image1}`} alt="Image 1" />
                </div>
                <div className={styles.imageWrapper2}>
                    <img src={`${Image3}`} alt="Image 2" />
                </div>
                <div className={styles.imageWrapper3}>
                    <img src={`${Image2}`} alt="Image 3" />
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.title}>
                    <h1>
                        The Art of<br/>Feeling at Home,<br/>
                        <span className={styles.titleBig}>Anywhere</span>
                    </h1>
                </div>
                <div className={styles.text}>
                    <p>
                        Welcome to a new standard of comfort. Each property in our collection is more than a destination.
                    </p>
                    <p>
                        It's a sanctuary designed to feel like your own. From cozy corners to breathtaking views, your perfect retreat is waiting.
                    </p>
                </div>
                <div className={styles.button}>
                    <Button

                        text={"Discover Places"}
                        onClick={() => navigate("/booking/hotels")}
                    />
                </div>
            </div>
        </div>
    )
}
export default Main;