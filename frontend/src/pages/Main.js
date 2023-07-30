import React from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";



const Main = () => {
    const [ weaponInfo, setWeaponInfo ] = useState([]);

    const mainPageEntries = () => {
        fetch(`http://localhost:3005/weapons/all`)
        .then(response => response.json())
        .then(data => {
            data.sort(() => Math.random() - 0.5);
            const slicedData = data.slice(0,8);
            console.log(slicedData);
            setWeaponInfo(slicedData);
        })
    };

    useEffect(() => {mainPageEntries()}, []);


    const onClick = (event) => {
       console.log(`Fetching results...`);
    };


    return(
        <Container>
            <div>
                <h1 className="mt-5 text-center ">
                    Welcome to the Weapons Wiki
                </h1>
                <h5 className=" text-center ">
                    Your one place to learn about the weapons that have been used by humanity!
                </h5>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap sm-6 lg-4 xl-3 mt-5">
                {weaponInfo.map(weapon => (
                    <span key={weapon._id} onClick={(event) => onClick(event, "")}>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={`${weapon.path}`}>
                                    <Image style={{width: "30rem", height: "15rem", objectFit: "cover"}} src={`${weapon.image}`} thumbnail/>
                            </Nav.Link>
                        </Nav>
                    </span>
                ))}
            </div>
    </Container>
    );
};

export default Main;