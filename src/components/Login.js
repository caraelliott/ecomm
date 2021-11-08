import React, { useState } from "react";
import Logo from "../assets/gameLogoTransparent.png";


import styled from "styled-components";

const Login = ({ handleShow, user, setUser }) => {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const obj = JSON.stringify({
        email: userEmail,
        password: password,
      });
      const reg = await fetch(`${process.env.REACT_APP_BASE_URL}/user/login`, {
        mode: "cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      });
      const data = await reg.json();

      setUser({ email: data.user.email, token: data.token });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("got here at login")
  // console.log({userEmail, setUserEmail})

  return (
    <>

      <FormWrapper>
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}

          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleShow}
          >
            Register
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#action">password?</a>
          </p>
        </form>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  // background-image:url(${Logo});
  // margin: 0 20px;
  // border:2px solid red;
  width: 40vw;
  height: 100vh;
  padding: 20px;
`;

export default Login;
