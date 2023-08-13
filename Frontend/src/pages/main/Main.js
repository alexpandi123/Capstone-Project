import React from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import SideBarMenu from "./Sidebar";




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
                <h5 className=" text-center ">
                    Click on a weapon below for more information about it..
                </h5>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-wrap sm-6 md-4 lg-4 xl-3 xxl-3 mt-5">
                {weaponInfo.map(weapon => (
                    <span key={weapon._id} onClick={(event) => onClick(event, "")}>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={`${weapon.path}`}>
                                    <Image style={{width: "34vh", height: "19vh", objectFit: "contain"}} src={`${weapon.image}`} rounded thumbnail/>
                            </Nav.Link>
                        </Nav>
                    </span>
                ))}
            </div>
        </Container>
    );
};

export default Main;