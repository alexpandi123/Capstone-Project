import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import "../css/userpage.css";

import { Button } from "react-bootstrap";
import { useState } from "react";

const UserLoginPage = (props) => {
    const [ formData, setformData ] = useState(props.formData);
    const [ confirmation, setConfirmation ] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3005/users/add-new-user', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {'Content-Type': 'application/json'}
                })

            setConfirmation(true);
            setTimeout(() => {
                setConfirmation(false);
            }, 3000);
            event.target.reset();
    };

    return(
        <div className="w-100">
                <h3 className="m-auto mt-5 mb-5 d-block w-50 text-center">
                    Log In:
                </h3>
                    <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center sm-6 md-4 lg-3 xl-2">
                            <FloatingLabel label="Name" className="mb-2">
                                <Form.Control name="username" onChange={(event) => setformData({...formData, username: event.target.value})} type="string" placeholder="name" />
                            </FloatingLabel>
                            <FloatingLabel label="Password" className="mb-2">
                                <Form.Control name="password" onChange={(event) => setformData({...formData, password: event.target.value})} type="string" placeholder="password"  />
                            </FloatingLabel>
                            <Button className="mt-5 mb-5" type="submit" variant="outline-danger">Submit</Button>
                            {confirmation && <div>Logged in Succesfully!</div>}
                    </Form>
        </div>
    );
};

export default UserLoginPage;