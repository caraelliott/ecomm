import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'

const Register = ({ show, handleClose }) => {
    const [userEmailReg, setUserEmailReg] = useState("")
  const [userPassReg, setUserPassReg] = useState("")
//   console.log("email", {userNameReg})
//   console.log("pass", {userNameReg})
const handlerRegister= async(e)=>{
    // console.log("got here at register")
    e.preventDefault()
    try{
        const obj = JSON.stringify({
            email:userEmailReg,
            password:userPassReg
        });
        const reg = await fetch(`${process.env.REACT_APP_BASE_URL}/user/register`, {
            mode: "cors",
            method: "post",
            headers: {
                "Content-Type": "application/json" 
            },
            body: obj
        });
        handleClose();


    }catch (error) {
            console.log(error);
        }

        
}



  return (
    <>
    
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Register Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
          
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email " onChange={(e)=>{setUserEmailReg(e.target.value)}}/>
              
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>{setUserPassReg(e.target.value)}} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="button"  onClick={e=>{handlerRegister(e)}}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
