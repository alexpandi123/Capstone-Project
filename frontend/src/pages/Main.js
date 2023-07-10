import React from "react";
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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



    return(
        <Container>
      <Row>
        <Col className="d-flex align-items-center justify-content-around m-5" xs={6} md={4}>
            {weaponInfo.map(weapon => (
                            <div key={weapon._id} className="card-img-top" style={{objectFit: "cover"}}><Image src={`${weapon.image}`} thumbnail/></div>
                        ))}
        </Col>
      </Row>
    </Container>
    );
};

export default Main;