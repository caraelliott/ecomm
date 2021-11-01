import React from 'react'


import { createGlobalStyle } from 'styled-components';
import BackImage from './assets/background.png'
import NavbarHead from './components/NavbarHead';
import NavbarVertical from './components/NavbarVertical';


const LoginPage=()=>{
    console.log("testing env",process.env)
  return(
    
        
    <>
    
    <GlobalStyle/>
      <NavbarHead/>
      <NavbarVertical/>
      

  </>
  );
            
   
}
const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
 

}`

export default LoginPage


