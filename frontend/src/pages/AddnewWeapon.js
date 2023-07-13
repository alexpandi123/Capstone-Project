import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";


const AddNewWeapon = () => {

    const onClick = () => {
        const formData = document.getElementById('add-new-weapon-form')
        formData.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data)
      })};


    return(
        <>
        <h4 className="m-auto mt-4 mb-4 d-block w-50 text-center border-bottom border-info rounded-bottom">
            Please enter the details of the new weapon below:
        </h4>
        <div id="add-new-weapon-form" className="d-flex flex-column align-items-center justify-content-center">
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-2 col-sm-3">
                    <Form.Control type="string" placeholder="weapon name" />
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
                <FloatingLabel controlId="floatingDesc" label="Path" className="mb-2 col-sm-3">
                    <Form.Control type="string" placeholder="Password" />
                </FloatingLabel>
                <Button className="mt-3" onClick={() => onClick()} variant="outline-danger">Submit</Button>
        </div>
    </>
    );
};

export default AddNewWeapon;