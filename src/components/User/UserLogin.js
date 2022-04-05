import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class UserLogin extends Component {
  render() {
    return (
      
        <div className="container">
        <div className="row">
            <div className="col">

            </div>
            <div className="p-3 m-2 bg-dark text-white col-5">
                <Form>
                    <h1> Login</h1><br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile No </Form.Label>
                        <Form.Control type="Mobile NO" placeholder="Mobile No" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to="/UserDashboard">
                    <Button className="m-4"variant="primary" type="submit">
                        Sign In
                    </Button>
                    </Link>
                    <Link to="/User/register">
                        <Button className="m-4" variant="danger">Register</Button>
                    </Link>
                </Form>
            </div>
            <div className="col">

            </div>
        </div>
    </div>
    )
  }
}

export default UserLogin


