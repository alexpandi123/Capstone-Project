import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState } from "react";


const AddNewWeaponPage = (props) => {
    const [formData, setformData] = useState(props.formData);


    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3005/weapons/add-weapon', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {'Content-Type': 'application/json'}
                })
        event.target.reset();
    };

    return(
        <>
            <h4 className="m-auto mt-4 mb-4 d-block w-50 text-center border-bottom border-info rounded-bottom">
                Please enter the details of the new weapon below:
            </h4>
                <Form onSubmit={handleSubmit} id="add-new-weapon-form" className="d-flex flex-column align-items-center justify-content-center">
                        <FloatingLabel label="Name" className="mb-2 col-sm-3">
                            <Form.Control name="name" onChange={(event) => setformData({...formData, name: event.target.value})} type="string" placeholder="name" />
                        </FloatingLabel>
                        <FloatingLabel label="Country Of Origin" className="mb-2 col-sm-3">
                            <Form.Control name="countryOfOrigin" onChange={(event) => setformData({...formData, countryOfOrigin: event.target.value})} type="string" placeholder="countryoforigin"  />
                        </FloatingLabel>
                        <FloatingLabel label="Manufacturing Year" className="mb-2 col-sm-3">
                            <Form.Control name="designYear" onChange={(event) => setformData({...formData, designYear: event.target.value})} type="string" placeholder="designyear"  />
                        </FloatingLabel>
                        <FloatingLabel label="Effective Firing Range" className="mb-2 col-sm-3">
                            <Form.Control name="effectiveFiringRange" onChange={(event) => setformData({...formData, effectiveFiringRange: event.target.value})} type="string" placeholder="effectiveFiringRange"  />
                        </FloatingLabel>
                        <FloatingLabel label="Rate Of Fire" className="mb-2 col-sm-3">
                            <Form.Control name="rateOfFire" onChange={(event) => setformData({...formData, rateOfFire: event.target.value})} type="string"  placeholder="rateOfFire" />
                        </FloatingLabel>
                        <FloatingLabel label="Type" className="mb-2 col-sm-3">
                            <Form.Control name="type" onChange={(event) => setformData({...formData, type: event.target.value})} type="string"  placeholder="type" />
                        </FloatingLabel>
                        <FloatingLabel label="Description" className="mb-2 col-sm-3">
                            <Form.Control name="description" onChange={(event) => setformData({...formData, description: event.target.value})} style={{ height: '100px' }} type="string" placeholder="description"  />
                        </FloatingLabel>
                        <FloatingLabel label="Image" className="mb-2 col-sm-3">
                            <Form.Control name="image" onChange={(event) => setformData({...formData, image: event.target.value})} type="URL" placeholder="image" /> 
                        </FloatingLabel>
                        <FloatingLabel label="Path" className="mb-2 col-sm-3">
                            <Form.Control name="path" onChange={(event) => setformData({...formData, path: event.target.value})} type="string"  placeholder="path" />
                        </FloatingLabel>
                        <Button className="mt-3" type="submit" variant="outline-danger">Submit</Button>
                </Form>
        </>
    );
};

export default AddNewWeaponPage;