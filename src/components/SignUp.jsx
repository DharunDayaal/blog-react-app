import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Alert } from  "react-bootstrap"
import { useUserAuth } from "../configuration/UserAuthContext";

const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const {signUp} = useUserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
      navigate("/")
    } catch (e) {
      setError(e.message)
      console.log(e)
    }
  }

  return (
    <>
      <div className="body">
        <div className="p-4 box">
          <h2 className="mb-3">Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
