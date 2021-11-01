import React, { useEffect } from "react";

import { createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";
import NavbarHead from "./components/NavbarHead";
import NavbarVertical from "./components/NavbarVertical";

const LoginPage = () => {
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
      <NavbarHead />
      <NavbarVertical />
    </>
  );
};
const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
 

}`;

export default LoginPage;
