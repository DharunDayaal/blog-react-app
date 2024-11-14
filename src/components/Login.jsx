import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../configuration/UserAuthContext";
import "./commonloginsignup.css";
import { auth } from "../configuration/firebase-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const {logIn, googleSignIn, resetPasswordWithEmail} = useUserAuth()

	const handleSignIn = async (e) => {
		e.preventDefault()
    try{
      await logIn(email, password)
      navigate("/home")
    }
    catch(e) {
      setError(e.message)
    }
	}

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try{
      await googleSignIn()
      navigate("/home");
    }
    catch(e) {
      console.log(e.message)
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault()
    try {
      await resetPasswordWithEmail(email)
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
      <div className="body">
        <div className="p-4 box">
          <h2 className="mb-3">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div className="w-100 align-items-center d-flex justify-content-center">
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        <div className="mt-2">
          <p style={{textAlign:'left', color:'rgb(66, 133, 244)', cursor:'pointer'}} className="mb-0" onClick={handleResetPassword}>forget password?</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
