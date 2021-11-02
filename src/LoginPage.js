import React, { useEffect, useState } from "react";

import { createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";

import Register from "./components/Register";
import Login from "./components/Login";

const LoginPage = ({user, setUser}) => {

  const [show, setShow] = useState(false);
  


  const handleClose = () => setShow(prev => !prev);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(prev => !prev)}


  // const FetchRequest = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`);
  //   const data = await response.json();
  //   console.log("worked", data);
  // };

  // useEffect(()=>{
  //   FetchRequest()

  // }, []);

  return (
    <>
      <GlobalStyle />
      {/* <NavbarHead  />
      <NavbarVertical /> */}
      <Login handleShow={e=>{handleShow(e)}} user={user} setUser={setUser}/>
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
