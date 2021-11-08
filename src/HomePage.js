import React from 'react'
import NavbarHead from "./components/NavbarHead";
import NavbarVertical from "./components/NavbarVertical";
import styled,{ createGlobalStyle } from "styled-components";
import BackImage from "./assets/background.png";


function HomePage({user, setUser}) {
    return (
        <>
        { user.email ?
        <div>
            <GlobalStyle/>
            <HomePageWrapper>
        
            <NavbarHead/>
            <NavbarVertical setUser={setUser}/>
            
            </HomePageWrapper>
            
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
//   margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
  overflow-y: auto;
  overflow-x: hidden;
}`;
const HomePageWrapper = styled.div`
        position:absolute;
        top:10%;
        left:5%;
        width:95vw;
        height:100vh;
        background-color:rgb(0,0,0,0.4);
        border-radius:10px;
        padding:20px;
        color: white;
        -webkit-box-shadow: -20px -20px 21px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: -20px -20px 21px -4px rgba(0,0,0,0.75);
        box-shadow: -20px -20px 21px -4px rgba(0,0,0,0.75);`
