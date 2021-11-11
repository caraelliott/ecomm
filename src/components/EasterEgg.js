import React from "react";
import Konami from "react-konami-code";
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert'


function EasterEgg() {
  const easterEgg =() =>{
    alert('Hey, you typed the Konami Code!')
  }

  return(
   
    <div>
      <Konami action={easterEgg}>
        <Alert variant='primary'>You found the Discount Code <Badge bg="secondary">KONAMI</Badge></Alert>
  
      </Konami>
    </div>
  )
}

export default EasterEgg;
