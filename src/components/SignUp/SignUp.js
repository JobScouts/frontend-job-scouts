import { useState } from "react";
import { Button } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        confirmPassword: "",
        imageUrl: "",
    });

    const [warnEmail, setWarnEmail] = useState(false);
    const [warnPass, setWarnPass] = useState(false);
    const [danger, setDanger] = useState(true);
    const [eye, setEye] = useState(true);
    const [pass, setPass] = useState("password");

    const isEmailValid = (email) => {
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password) => {
        // Regular expression to validate password format (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "email") {
            if (value.length > 0) {
                setDanger(true);
            }
        }
        setInputs((lastValue) => {
            return {
                ...lastValue,
                [name]: value,
            };
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        setWarnEmail(false);
        setWarnPass(false);

        // Validate email format
        if (!isEmailValid(inputs.email)) {
            setWarnEmail(true);
            return;
        }

        // Validate password format
        if (!isPasswordValid(inputs.password)) {
            setWarnPass(true);
            return;
        }

        // Validate other fields (full name, phone number, confirming password)
        if (inputs.fullName === "") {
            alert("Please enter your Full Name.");
            return;
        }

        if (inputs.phoneNumber === "") {
            alert("Please enter your Phone Number.");
            return;
        }

        if (inputs.password !== inputs.confirmPassword) {
            alert("Passwords do not match. Please confirm your password correctly.");
            return;
        }

        alert("Logged in Successfully");
    };

    const Eye = () => {
        setPass((prevPass) => (prevPass === "password" ? "text" : "password"));
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="form">
                        <div className="left-side">
                            <img src="https://imgur.com/XaTWxJX.jpg" alt="Logo" />
                        </div>

                        <div className="right-side">
                            <div className="hello">
                                <h2>Welcom to our Wepsite!</h2>
                            </div>

                            <form onSubmit={submitForm}>
                                <div className="input_text">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="fullName"
                                        value={inputs.fullName}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="input_text">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        value={inputs.phoneNumber}
                                        onChange={inputEvent}
                                    />
                                </div>
                                <div className="input_text">
                                    <input
                                        className={` ${warnEmail ? "warning" : ""}`}
                                        type="text"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={inputEvent}
                                    />
                                    <p className={` ${danger ? "danger" : ""}`}>
                                        <i className="fa fa-warning"></i>
                                        Please enter a valid email address.
                                    </p>
                                </div>
                                <div className="input_text">
                                    <input
                                        className={` ${warnPass ? "warning" : ""}`}
                                        type={pass}
                                        placeholder="Enter Password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={inputEvent}
                                    />
                                    <i
                                        onClick={Eye}
                                        className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                                    ></i>
                                </div>


                                <div className="input_text">
                                    <input
                                        type={pass}
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={inputs.confirmPassword}
                                        onChange={inputEvent}
                                    />
                                    <i
                                        onClick={Eye}
                                        className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                                    ></i>
                                </div>
                                <div className="input_text">
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        name="imageUrl"
                                        value={inputs.imageUrl}
                                        onChange={inputEvent}
                                    />
                                </div>

                                <Button variant="primary" size="lg" active onClick={submitForm}>
                                    Sign Up
                                </Button>

                            </form>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SignUp;