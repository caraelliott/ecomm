import React, { useState } from "react";

import {  createGlobalStyle } from "styled-components";
// import styled,{ keyframes, createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";

import Register from "./components/Register";
import Login from "./components/Login";

const LoginPage = ({user, setUser}) => {

  const [show, setShow] = useState(false);
  


  const handleClose = () => setShow(prev => !prev);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(prev => !prev)}




  return (
    <>
      <GlobalStyle />
      {/* <Rotate>
      <h3>Logo</h3>
      </Rotate> */}
     
      <Login handleShow={e=>{handleShow(e)}} user={user} setUser={setUser}/>
      <Register show={show}  handleClose={handleClose}/>
   
    </>
  );
}
const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
 

}`;
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 4s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

export default LoginPage;
