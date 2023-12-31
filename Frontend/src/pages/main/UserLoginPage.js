import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import "../css/userpage.css";

import { Button } from "react-bootstrap";
import { useState } from "react";

const UserLoginPage = (props) => {
    const [ formData, setformData ] = useState(props.formData);
    const [ confirmation, setConfirmation ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        try{
                 fetch('http://localhost:3005/users/login', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {'Content-Type': 'application/json'}
                })
                .then(response => {
                    let success = response.ok;
    
                        if(!success) {
                            setErrorMessage(true);
                            setTimeout(() => {
                                setErrorMessage(false);
                            }, 3000);
                        } else {
                            setConfirmation(true);
                            setTimeout(() => {
                                setConfirmation(false);
                            }, 3000);
                        };
                });
            event.target.reset();
        }
        catch (error) {
            console.error(error.message);
        }
    };

    return(
        <div className="w-100">
                <h2 className="m-auto mt-5 mb-5 d-block w-50 text-center title_text">
                    LOG IN:
                </h2>
                    <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center sm-6 md-4 lg-3 xl-2">
                            <FloatingLabel label="Name" className="mb-2">
                                <Form.Control name="username" onChange={(event) => setformData({...formData, username: event.target.value})} type="string" placeholder="name" />
                            </FloatingLabel>
                            <FloatingLabel label="E-mail" className="mb-2">
                                <Form.Control name="username" onChange={(event) => setformData({...formData, email: event.target.value})} type="string" placeholder="email" />
                            </FloatingLabel>
                            <FloatingLabel label="Password" className="mb-2">
                                <Form.Control name="password" onChange={(event) => setformData({...formData, password: event.target.value})} type="string" placeholder="password"  />
                            </FloatingLabel>
                            <Button className="mt-5 mb-5" type="submit" variant="outline-danger">Submit</Button>
                            <div>{errorMessage && <p>Wrong Credentials!</p>}</div>
                            <div>{confirmation && <p>Log In Succesfull!</p>}</div>
                    </Form>
        </div>
    );
};

export default UserLoginPage;