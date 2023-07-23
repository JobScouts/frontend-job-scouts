import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [warnemail, setWarnEmail] = useState(false);
  const [warnpass, setWarnPass] = useState(false);
  const [eye, setEye] = useState(true);

  const handleLogin = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/login`;
    let objData = {
      email: inputs.email,
      password: inputs.password,
    };

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objData),
      });

      if (response.status === 200) {
        alert('Login successfully');
        navigate("/SignUp", { replace: true });
      } else {
        console.log('Error:', response.statusText);
        alert('Failed to Login');
      }
    } catch (error) {
      console.log('Error:', error.message);
      alert('Failed to Login');
    }
  };

  const inputEvent = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      setWarnEmail(false);
    } else if (e.target.name === 'password') {
      setWarnPass(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      setWarnEmail(true);
    } else if (inputs.password === '') {
      setWarnPass(true);
    } else {
      handleLogin();
    }
  };

  const Eye = () => {
    setEye(!eye);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <img src="https://imgur.com/XaTWxJX.jpg" alt="MyImg" />
          </div>

          <div className="right-side">
            <div className="register">
              <p>Not a member? <a href="/SignUp">Register Now</a></p>
            </div>

            <div className="hello">
              <h2>Hello Again!</h2>
              <h4>Welcome back you have been missed! </h4>
            </div>

            <form onSubmit={submitForm}>
              <div className="input_text">
                <input
                  className={`${warnemail ? 'warning' : ''}`}
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={inputs.email}
                  onChange={inputEvent}
                />
                {warnemail && <p className="warning"><i className="fa fa-warning"></i>Please enter a valid email address.</p>}
              </div>
              <div className="input_text">
                <input
                  className={`${warnpass ? 'warning' : ''}`}
                  type={eye ? 'password' : 'text'}
                  placeholder="Enter Password"
                  name="password"
                  value={inputs.password}
                  onChange={inputEvent}
                />
                <i onClick={Eye} className={`fa ${eye ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </div>
              <div className="btn">
                <Button variant="primary" size="lg" active type="submit">
                  Log In
                </Button>
              </div>
            </form>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
