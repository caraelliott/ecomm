import React, { useState } from "react";
import Logo from "../assets/gameLogoTransparent.png";
import Button from "react-bootstrap/Button";

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

      setUser({ email: data.user.email, name: data.user.name});
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
          <img src={Logo} alt="logo" />
          <div className="form-group">
            {/* <label>Email address</label> */}
            <input
              type="email"
              className="form-control styleInput"
              placeholder="Enter email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group ">
            <input
              type="password"
              className="form-control styleInput"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          Forgot <a href="#action">password?</a>
          <br />
          <Button
            variant="dark"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Login
          </Button>{" "}
          <Button variant="dark" onClick={handleShow}>
            Register
          </Button>
        </form>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.div`
  background-color: rgb(0, 0, 0);
  width: 40vw;
  height: 100vh;
  padding: 50px;
  text-align: center;
  color: white;
  .styleInput {
    background-color: transparent;
    border-style: none;
    border-bottom: 5px solid white;
    color: white;
  }
`;

export default Login;
