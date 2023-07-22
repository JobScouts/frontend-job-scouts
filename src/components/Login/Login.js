import { useState } from 'react';
import SignUp from "../SignUp/SignUp";

function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [warnEmail, setWarnEmail] = useState(false);
    const [warnPass, setWarnPass] = useState(false);
    const [danger, setDanger] = useState(true);
    const [eye, setEye] = useState(true);
    const [passType, setPassType] = useState("password");

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
                [name]: value
            };
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        setWarnEmail(false);
        setWarnPass(false);

        if (inputs.email.length < 1) {
            setDanger(false);
        }

        if (inputs.email === "") {
            setWarnEmail(true);
        } else if (inputs.password === "") {
            setWarnPass(true);
        } else {
            alert("Logged in Successfully");
        }
    };

    const togglePasswordVisibility = () => {
        if (passType === "password") {
            setPassType("text");
            setEye(false);
        } else {
            setPassType("password");
            setEye(true);
        }
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="form">
                        <div className="right-side">
                            <img src="https://imgur.com/XaTWxJX.jpg" alt="Logo" />
                        </div>

                        <div className="left-side">
                            <div className="register">
                                <p>
                                    Not a member? <SignUp />
                                </p>
                            </div>

                            <div className="hello">
                                <h2>Hello Again!</h2>
                                <h4>Welcome back; you have been missed!</h4>
                            </div>

                            <form onSubmit={submitForm}>
                                <div className="input_text">
                                    <input
                                        className={`${warnEmail ? "warning" : ""}`}
                                        type="text"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={inputEvent}
                                    />
                                    <p className={`${danger ? "danger" : ""}`}>
                                        <i className="fa fa-warning"></i>Please enter a valid email address.
                                    </p>
                                </div>
                                <div className="input_text">
                                    <input
                                        className={`${warnPass ? "warning" : ""}`}
                                        type={passType}
                                        placeholder="Enter Password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={inputEvent}
                                    />
                                    <i onClick={togglePasswordVisibility} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>
                                <div className="btn">
                                    <button type="submit">Log In</button>
                                </div>
                            </form>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
