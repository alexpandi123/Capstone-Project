import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

import XM8Model from "./3dModels/xm8_rifle/Xm8_rifle";

import './css/weapon-modifications.css'


const Xm8Page = () => {
    const [ weaponInfo, setWeaponInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const fetchData = () => {
        setIsLoading(true)
        fetch("http://localhost:3005/weapons/64c043d0899506ac37222116")
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            console.log(data);
            setWeaponInfo(data);
        })
    };

    useEffect(() => { fetchData() }, []);

    return(
        <div className="main_div">
            <div className="controls_div_box">
                <span className="controls_text_span">Controls:</span>
            <div className="controls_mouse_items">
                    <span>Left Click:
                        <ul>
                            <li>Rotate Weapon</li>
                        </ul>
                    </span>
                    <span>Scroll Up:
                        <ul>
                            <li>Zoom In</li>
                        </ul>
                    </span>
                    <span>Scroll Down:
                        <ul>
                            <li>Zoom Out</li>
                        </ul>
                    </span>
                    <span>
                        Right Click:
                        <ul>
                            <li>Move Weapon</li>
                        </ul>
                    </span>
            </div>
            </div>
            <span className="weapon_inspection_text">Weapon Inspection</span>
            <h1 className="title_text text-center mt-5">XM8</h1>
            <h6 className="subtitle_text text-center mb-5">also known as "Heckler & Koch XM8"</h6>
            <div className="weapon_model_box" style={{width: '95vw', height: '50vh', margin: 'auto'}}>
            {isLoading && <div className="spinner-border" style={{width: "5rem", height: "5rem"}} role="status"> <span className="sr-only"></span></div>}
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <XM8Model />
                    <OrbitControls />
                </Canvas>
                <div>
                        {weaponInfo.map(weapon => (
                            <div key={weapon._id}>
                                <div className="d-flex justify-content-around mt-5">
                                     <div>
                                        <span className="category_title_span">Type</span> 
                                        <span className="category_content_span">{weapon.type}</span>
                                    </div>
                                    <div>
                                        <span className="category_title_span">Design Year</span> 
                                        <span className="category_content_span">{weapon.designYear}</span>
                                    </div>
                                    <div>
                                        <span id="efr_span" className="category_title_span">Effective Firing Range</span> 
                                        <span className="category_content_span">{weapon.effectiveFiringRange}</span>
                                    </div>
                                    <div>
                                        <span className="category_title_span">Rate of Fire</span> 
                                        <span className="category_content_span">{weapon.rateOfFire}*</span>
                                    </div>
                                </div>
                                <div className="description_div w-100">
                                    <span className="category_title_span_description">Description</span> 
                                    <div className="category_content_span_description">{weapon.description}</div>
                                </div>
                                <div>*RPM = Rounds Per Minute</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
};

export default Xm8Page;