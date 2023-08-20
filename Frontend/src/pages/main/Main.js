import React from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { Col, Nav, Row } from "react-bootstrap";
import '../css/main-page-image.css';




const Main = () => {
    const [ weaponInfo, setWeaponInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const mainPageEntries = () => {
        setIsLoading(true)
        fetch(`http://localhost:3005/weapons/all`)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            data.sort(() => Math.random() - 0.5);
            const slicedData = data.slice(0,8);
            console.log(slicedData);
            setWeaponInfo(slicedData);
        })
    };

    useEffect(() => { mainPageEntries() }, []);


    const onClick = (event) => {
       console.log(`Fetching results...`);
    };


    return(
        <Container>
            <div>
                <h1 className="mt-5 text-center ">
                    Welcome to the Weapons Wiki!
                </h1>
                <h6 className=" text-center ">
                    Click on a weapon below for more information about it..
                </h6>
            </div>

            <Row>
                <Col className="mt-5 sm-6 md-4 lg-3 xl-2">
                    <div className="mt-5 d-flex justify-content-center align-items-center flex-wrap">
                    {isLoading && <div class="spinner-border" style={{width: "5rem", height: "5rem"}} role="status"> <span class="sr-only"></span></div>}
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
        </Container>
    );
};

export default Main;