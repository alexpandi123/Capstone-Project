import React from "react";
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Main = () => {
    const [ weaponInfo, setWeaponInfo ] = useState([]);

    const mainPageEntries = () => {
        fetch('http://localhost:3005/weapons?page=1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeaponInfo(data);
        })
    };

    useEffect(() => {mainPageEntries()}, []);


    const onClick = (event) => {
       console.log(`Fetching results...`);
    };


    return(
        <Container>
      <Row>
            <Col className="d-flex flex-column align-items-center justify-content-between mt-5">
                {weaponInfo.map(weapon => (
                                <div key={weapon._id} onClick={(event) => onClick(event, "")} style={{objectFit: "cover"}}>
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to={`${weapon.path}`}><Image src={`${weapon.image}`} fluid thumbnail/></Nav.Link>
                                    </Nav>
                                </div>
                            ))}
                            
            </Col>
      </Row>
    </Container>
    );
};

export default Main;