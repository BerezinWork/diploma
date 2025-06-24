import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { signUp } from "../../store/thunks/authThunk.js";

import styles from "./BookingSignUp.module.css";
import Button from "../../components/UI/atoms/Button/index.jsx";

const nameRegex = /^[a-zA-Z]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/;

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!nameRegex.test(name)) {
            errors.name = "Name must be at least 2 letters long.";
        }
        if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (!passwordRegex.test(password)) {
            errors.password = "Please enter a valid password.";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setFormErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const result = await dispatch(signUp({ name, email, password }));
        if(result.meta.requestStatus === "fulfilled") {
            navigate("/booking/login", { replace: true });
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign <span>Up</span></h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {formErrors.name &&
                        <div className={styles.errorBox}>
                            {formErrors.name}
                        </div>
                    }
                </div>

                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {formErrors.email &&
                        <div className={styles.errorBox}>
                            {formErrors.email}
                        </div>
                    }
                </div>

                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {formErrors.password &&
                        <div className={styles.errorBox}>
                            {formErrors.password}
                        </div>
                    }
                </div>
                <div className={styles.button}>
                    <Button
                        htmlType="submit"
                        disabled={loading}
                        text="Sign Up"
                    />
                </div>

                <div className={styles.bottomText}>Already registered? - <span><Link to="/booking/login">Login</Link></span></div>
            </form>
        </div>
    )
}

export default SignUp;