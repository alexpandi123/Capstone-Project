import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState } from "react";

const AddNewWeaponPage = () => {
    
    // const formElements = document.getElementById('add-new-weapon-form');
    // formElements.addEventListener('submit', (event) => {
    //     event.preventDefault();

    //     const formData = new FormData(formElements);
    //     formData.get('name');
    //     console.log(formData);
    // });

    const formDataSending = () => {
        const formData = new FormData(document.getElementById('add-new-weapon-form'));
        
        fetch('http://localhost:3005/weapons/add-weapon', {
            method: "POST",
            body: formData
        });
        console.log('fetched');
    };


    return(
        <>
            <h4 className="m-auto mt-4 mb-4 d-block w-50 text-center border-bottom border-info rounded-bottom">
                Please enter the details of the new weapon below:
            </h4>
                <Form id="add-new-weapon-form" className="d-flex flex-column align-items-center justify-content-center">
                        <FloatingLabel label="Name" className="mb-2 col-sm-3">
                            <Form.Control controlId="floatingName" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingCountry" label="Country Of Origin" className="mb-2 col-sm-3">
                            <Form.Control type="string" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingManYear" label="Manufacturing Year" className="mb-2 col-sm-3">
                            <Form.Control type="string" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingEFR" label="Effective Firing Range" className="mb-2 col-sm-3">
                            <Form.Control type="string" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingROF" label="Rate Of Fire" className="mb-2 col-sm-3">
                            <Form.Control type="string" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingType" label="Type" className="mb-2 col-sm-3">
                            <Form.Control type="string" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingImage" label="Image" className="mb-2 col-sm-3">
                            <Form.Control type="URL" placeholder="Image" className=""/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingDesc" label="Description" className="mb-2 col-sm-3">
                            <Form.Control style={{ height: '100px' }} type="string" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPath" label="Path" className="mb-2 col-sm-3">
                            <Form.Control type="string" placeholder="Password" />
                        </FloatingLabel>
                        <Button className="mt-3" onClick={() => formDataSending()} variant="outline-danger">Submit</Button>
                </Form>
        </>
    );
};

export default AddNewWeaponPage;