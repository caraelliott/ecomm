import React from 'react'
import NavbarHead from "./components/NavbarHead";
import NavbarVertical from "./components/NavbarVertical";
import { createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";



function HomePage({user}) {
    return (
        <>
        { user.email ?
        <div>
            <GlobalStyle/>
            <NavbarHead/>
            <NavbarVertical/>
            
        </div>:
        <div>
        <p>"You do not access"</p>
        <p>{user.email}</p>
        </div>
        }
        </>
    )
}

export default HomePage;

const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
 

}`;
