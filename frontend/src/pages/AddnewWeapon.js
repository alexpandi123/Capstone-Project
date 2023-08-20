import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { Button } from "react-bootstrap";
import { useState } from "react";

import "./css/addneweapon.css"

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
        <div className="w-100">
                <h3 className="m-auto mt-5 mb-5 d-block w-50 text-center h3_size">
                    Please enter the details of the new weapon below:
                </h3>
                <div className="pos_rel">
                    <div className="span_decoration_circle_left"></div>
                    <div className="span_decoration_circle_right"></div>
                    <div className="span_decoration_image_one"></div>
                    <div className="span_decoration_image_two"></div>
                    <div className="span_decoration_image_three"></div>
                    <div className="span_decoration_image_four"></div>
                    <div className="span_decoration_image_five"></div>
                    <div className="span_decoration_image_six"></div>
                </div>
                    <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center sm-6 md-4 lg-3 xl-2 form_sizes">
                            <FloatingLabel label="Name" className="mb-2">
                                <Form.Control name="name" onChange={(event) => setformData({...formData, name: event.target.value})} type="string" placeholder="name" />
                            </FloatingLabel>
                            <FloatingLabel label="Country Of Origin" className="mb-2">
                                <Form.Control name="countryOfOrigin" onChange={(event) => setformData({...formData, countryOfOrigin: event.target.value})} type="string" placeholder="countryoforigin"  />
                            </FloatingLabel>
                            <FloatingLabel label="Manufacturing Year" className="mb-2">
                                <Form.Control name="designYear" onChange={(event) => setformData({...formData, designYear: event.target.value})} type="string" placeholder="designyear"  />
                            </FloatingLabel>
                            <FloatingLabel label="Effective Firing Range" className="mb-2">
                                <Form.Control name="effectiveFiringRange" onChange={(event) => setformData({...formData, effectiveFiringRange: event.target.value})} type="string" placeholder="effectiveFiringRange"  />
                            </FloatingLabel>
                            <FloatingLabel label="Rate Of Fire" className="mb-2">
                                <Form.Control name="rateOfFire" onChange={(event) => setformData({...formData, rateOfFire: event.target.value})} type="string"  placeholder="rateOfFire" />
                            </FloatingLabel>
                            <FloatingLabel label="Type" className="mb-2">
                                <Form.Control name="type" onChange={(event) => setformData({...formData, type: event.target.value})} type="string"  placeholder="type" />
                            </FloatingLabel>
                            <FloatingLabel label="Description" className="mb-2">
                                <Form.Control name="description" onChange={(event) => setformData({...formData, description: event.target.value})} type="string" placeholder="description"  />
                            </FloatingLabel>
                            <FloatingLabel label="Image" className="mb-2">
                                <Form.Control name="image" onChange={(event) => setformData({...formData, image: event.target.value})} type="URL" placeholder="image" /> 
                            </FloatingLabel>
                            <FloatingLabel label="Path" className="mb-2">
                                <Form.Control name="path" onChange={(event) => setformData({...formData, path: event.target.value})} type="string"  placeholder="path" />
                            </FloatingLabel>
                            <Button className="mt-5 mb-5" type="submit" variant="outline-danger">Submit</Button>
                    </Form>
        </div>
    );
};

export default AddNewWeaponPage;