import React, { useEffect, useState } from "react";

import { createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";
import NavbarHead from "./components/NavbarHead";
import NavbarVertical from "./components/NavbarVertical";
import Register from "./components/Register";

const LoginPage = () => {

  const [show, setShow] = useState(false);
  


  const handleClose = () => setShow(prev => !prev);

  const handleShow = (e) => {
    e.preventDefault();
    console.log("got here!")
    setShow(prev => !prev)}


  const FetchRequest = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`);
    const data = await response.json();
    console.log("worked", data);
  };

  useEffect(()=>{
    FetchRequest()

  }, []);

  return (
    <>
      <GlobalStyle />
      <NavbarHead  />
      <NavbarVertical handleShow={e=>{handleShow(e)}}/>
      <Register show={show}  handleClose={handleClose}/>
      {/* <button type="submit"  onClick={handleShow}> check button</button> */}
    </>
  );
}
const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
 

}`;

export default LoginPage;
