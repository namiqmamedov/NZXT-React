import React from 'react'
import '../styles/login.css'
import Form from 'react-bootstrap/Form';
import { Checkbox } from "@nextui-org/react";
import {Link} from 'react-router-dom'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const Register = () => {
  return (
    <div className='login-index'>
      <svg  className='nzxt-logo' viewBox="0 0 94 24" width="1em" height="1em">
        <path d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z" fill-rule="evenodd">
        </path>
      </svg>
      <div className="login-wrapper">
        <div className="login-google">
            <button>
                <svg className='icon-google' viewBox="0 0 48 48" width="1em" height="1em" ><path fill="#fbc02d" d="M44 20H24v8h11a12 12 0 11-3-13l6-6A20 20 0 004 24a20 20 0 1040-4z"></path><path fill="#e53935" d="M6 15l7 5a12 12 0 0119-5l6-6a20 20 0 00-32 6z"></path><path fill="#4caf50" d="M24 44c5 0 10-2 13-5l-6-5a12 12 0 01-18-6l-7 5c4 7 10 11 18 11z"></path><path fill="#1565c0" d="M44 20H24v8h11c0 2-2 4-4 6l6 5s7-5 7-15v-4z"></path></svg>
                <span>Sign up with Google</span>
            </button>
        </div>
        <div className="login-main">
           <h2><span>Or sign up with</span></h2>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Select aria-label="Default select example">
                <option value="1">North America</option>
                <option value="2">Europe</option>
                <option value="3">Oceania</option>
                <option value="4">United Kingdom</option>
            </Form.Select>
            <div className="remember-check">
                <Checkbox className="checkbox-index" color="secondary">
                    <span className='remember-text'>Remember me</span>
                </Checkbox>
                <div className="forgot-password-block">
                    <Link to='../register'>
                    Forgot password?
                  <MdOutlineArrowForwardIos/>
                    </Link>
                </div>
            </div>
            <button className="sign-in-btn">
                Sign Up
            </button>
            <div className="create-account">
                <p>Have an account? 
                </p>
                <Link>Sign In
                      <MdOutlineArrowForwardIos/>
                </Link>
            </div>
        </Form>
        </div>
      </div>
    </div>
  )
}

export default Register