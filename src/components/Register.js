import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styled from "styled-components";

const Register = ({ show, handleClose }) => {
  const [userEmailReg, setUserEmailReg] = useState("");
  const [userPassReg, setUserPassReg] = useState("");
  const [errorReg, setErrorReg] = useState(false);
  const [regStat, setRegStat] = useState(false)
  const [userName, setUserName] = useState("")




  const handlerRegisterName = async () => {
    console.log("got here at register name")
    const obj = JSON.stringify({
      email: userEmailReg,
      name: userName,
    });
    await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/register`,
      {
        mode: "cors",
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      }
    );
      handleClose();



      
  }

  const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      const obj = JSON.stringify({
        email: userEmailReg,
        password: userPassReg,
      });
      const reg = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/register`,
        {
          mode: "cors",
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: obj,
        }
      );
      const data = await reg.json();
      if (data.error) {
        setRegStat(false)
        throw new Error(data.error);
        
      }else{
        setRegStat(true)
        setErrorReg(false)
        
        
      }



    } catch (error) {
      setErrorReg(true);
      
    }

  


    

  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Register Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email "
                onChange={(e) => {
                  setUserEmailReg(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setUserPassReg(e.target.value);
                }}
              />
            </Form.Group>

            <ButtonWrapper>
              <Button
                variant="primary"
                type="button"
                onClick={(e) => {
                  handlerRegister(e);
                }}
              >
                Submit
              </Button>

              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </ButtonWrapper>
          </Form>
        </Modal.Body>

        {regStat?
         <Modal.Body>
           <Alert>Registration Successful! Add username </Alert>
          
        
         <Form>
             <Form.Label>Enter Username</Form.Label>
             <Form.Control type="text" placeholder="Enter Username" onChange={(e) => {
                  setUserName(e.target.value);
                }}/>
             <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
            <Button
                variant="primary"
                type="button"
                onClick={handlerRegisterName}
              >
                Submit
              </Button>
          </Form>
         
         
       </Modal.Body>:""

        }

        <Modal.Footer>
          {errorReg ? <Alert>There is an Error</Alert> : ""
          
          }
        </Modal.Footer>
      </Modal>
</>

  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Register;
