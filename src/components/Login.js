import React,{useState} from 'react'

import styled from 'styled-components';

import Register from './Register'


const Login=({handleShow}) =>{


     






    return (
        <>
        
        <FormWrapper>
        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleShow}>Register</button>
            <p className="forgot-password text-right">
                Forgot <a href="#action">password?</a>
            </p>
        </form>
        </FormWrapper>
        
        </>
    
    )
}

const FormWrapper = styled.div`
// border:2px solid red;
width:40vw
height:40vh;
`


export default Login
