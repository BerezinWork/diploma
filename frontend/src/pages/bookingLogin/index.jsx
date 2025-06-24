import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router";
import { login } from "../../store/thunks/authThunk.js";

import Button from "../../components/UI/atoms/Button";

import styles from "./BookingLogin.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [formError, setFormError] = useState("");

    const { loading, error } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/booking";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email && !password) {
            setFormError("Email and password are required");
            return;
        } else if (!email || !password) {
            setFormError("Email or password are required");
            return;
        }
        setFormError("");

        const result = await dispatch(login({ email, password }));

        if(result.meta.requestStatus === "fulfilled") {
            navigate(from, { replace: true });
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign <span>In</span></h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                {(error || formError) && (
                    <div className={styles.errorBox}>
                        {formError || "Wrong email or password"}
                    </div>
                )}
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.button}>
                    <Button
                        htmlType="submit"
                        disabled={loading}
                        text="Login"
                    />
                </div>
                <div className={styles.bottomText}>No account? - <span><Link to="/booking/signup">Sign Up</Link></span></div>
            </form>
        </div>
    )
}

export default Login;