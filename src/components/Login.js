import React, { useState } from "react";
import Logo from "../assets/gameLogoTransparent.png";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { SiNetlify, SiHeroku, SiPostgresql } from "react-icons/si";
import Nav from "react-bootstrap/Nav";
import LogoG from "../assets/gameLogoTransparent.png";


import { FaStarHalf, FaCopyright, FaReact, FaNodeJs } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";

import styled, { keyframes } from "styled-components";

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

      setUser({ email: data.user.email, name: data.user.name });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand
            href="#home"
            style={{ fontSize: "25px", color: "white" }}
          >
            <img
              alt=""
              src={LogoG}
              width="80"
              height="50"
              className="d-inline-block "
            />{" "}
            TheGamePortal
          </Navbar.Brand>
      
      </Navbar>
      <Wrapper>
        <FormWrapper>
          <form>
            <Rotate>
              <img
                src={Logo}
                alt="logo"
                style={{ width: "30%", height: "30%" }}
              />
            </Rotate>
            <br />
            <div>
              {/* <label>Email address</label> */}
              <input
                type="email"
                className=" styleInput"
                placeholder="Enter email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group ">
              <input
                type="password"
                className=" styleInput"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            Forgot <a href="#action">password?</a>
            <br />
            <br />
            <div className="formButton">
              <Button
                variant="dark"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Login
              </Button>
              &nbsp;&nbsp;
              <Button variant="dark" onClick={handleShow}>
                Register
              </Button>
            </div>
          </form>
        </FormWrapper>
        <div>
          <Carousel style={{ width: "50vw", height: "50vh" }}>
            <Carousel.Item>
              <Image
                src="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Tomb Raider (2013)</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>The Witcher 3: Wild Hunt</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Grand Theft Auto V </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Wrapper>
      <ReviewWrapper>
        <h4>Ratings and Reviews</h4>
        <Stack direction="horizontal" gap={3}>
          <Card style={{ width: "18rem", color: "black" }}>
            <Card.Body>
              <Card.Header>
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <FaStarHalf style={{ color: "goldenrod" }} />
              </Card.Header>
              <Card.Title>-Lucas Lederman</Card.Title>
              <Card.Text>“The world leader for buying video games”</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", color: "black" }}>
            <Card.Body>
              <Card.Header>
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <FaStarHalf style={{ color: "goldenrod" }} />
              </Card.Header>
              <Card.Title> - L Williams</Card.Title>
              <Card.Text>
                "If I don't play games for a week, I start to feel really upset.
                I need to console myself"
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", color: "black" }}>
            <Card.Body>
              <Card.Header>
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
              </Card.Header>
              <Card.Title>-Cara</Card.Title>
              <Card.Text>
                "Look no further than Game Portal for all your gaming needs"
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", color: "black" }}>
            <Card.Body>
              <Card.Header>
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
                <AiFillStar style={{ color: "goldenrod" }} />
              </Card.Header>
              <Card.Title>-Anam</Card.Title>
              <Card.Text>
                "A clean, modern website, that will serve all your gaming needs
                "
              </Card.Text>
            </Card.Body>
          </Card>
        </Stack>
      </ReviewWrapper>
      <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
        <Navbar.Brand style={{ padding: "10px" }}>
          <FaCopyright /> TheGamePortal
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{ color: "white" }}>
          <Nav.Item>
            Powered by : <FaReact /> <SiHeroku /> <SiNetlify /> <SiPostgresql />{" "}
            <FaNodeJs />
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.8);
  width: 50vw;
  height: 60vh;
  // padding: 50px;
  text-align: center;
  color: white;
  .styleInput {
    background-color: transparent;
    border-style: none;
    border-bottom: 5px solid white;
    color: white;
    width: 25vw;
  }
  .formButton {
    display: flex;
    padding: 20px;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 50vw;
  height: 60vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 12s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ReviewWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  margin-top: 10px;
  padding: 5px;
  color: white;
`;

export default Login;
