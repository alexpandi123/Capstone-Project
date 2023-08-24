import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Nav, Pagination, Row } from "react-bootstrap";

import './css/main-page-image.css';

const AllWeaponsPage = () => {
    const [ weaponInfo, setWeaponInfo ] = useState([]);

    const mainPageEntries = () => {
        fetch(`http://localhost:3005/weapons/weapon-page?page=1`)
        .then(response => response.json())
        .then(data => {
            setWeaponInfo(data);
        })
    };

    const secondPageEntries = () => {
        fetch(`http://localhost:3005/weapons/weapon-page?page=2`)
        .then(response => response.json())
        .then(data => {
            setWeaponInfo(data);
        })
    };

    const thirdPageEntries = () => {
        fetch(`http://localhost:3005/weapons/weapon-page?page=3`)
        .then(response => response.json())
        .then(data => {
            setWeaponInfo(data);
        })
    };

    useEffect(() => { mainPageEntries() }, []);


    const onClick = (event) => {
       console.log(`Fetching results...`);
    };


    return(
        <Container>
            <div>
                <h3 className="mt-5 text-center title_text">
                    All Weapons From Weapons Wiki:
                </h3>
            </div>

            <Row>
                <Col className="sm-6 md-4 lg-3 xl-2">
                    <div className="mt-5 d-flex justify-content-center align-items-center flex-wrap">
                        {weaponInfo.map(weapon => (
                            <div key={weapon._id} onClick={(event) => onClick(event, "")}>
                                <Nav>
                                    <Nav.Link as={Link} to={`${weapon.path}`}>
                                            <Image className="image_from_fetch" src={`${weapon.image}`} rounded />
                                    </Nav.Link>
                                </Nav>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>  

            <Pagination className="d-flex justify-content-center align-items-center mt-5">  
                <Pagination.Item onClick={mainPageEntries} >1</Pagination.Item>  
                <Pagination.Item onClick={secondPageEntries} >2</Pagination.Item>  
                <Pagination.Item onClick={thirdPageEntries} >3</Pagination.Item>   
            </Pagination>

        </Container>
    );
};

export default AllWeaponsPage;
