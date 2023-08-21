import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

import M1GarandModel from "./3dModels/m1garand/M1_garand";

import './css/weapon-modifications.css'

const M1garandPage = () => {
    const [ weaponInfo, setWeaponInfo ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const fetch9a91Data = () => {
        setIsLoading(true)
        fetch("http://localhost:3005/weapons/64c03932a597d34c6d8694b7")
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            console.log(data);
            setWeaponInfo(data);
        })
    };

    useEffect(() => { fetch9a91Data() }, []);

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
            <h1 className="title_text text-center mt-5">M1 Garand</h1>
            <h6 className="subtitle_text text-center mb-5">also known as "M1 rifle"</h6>
            <div className="weapon_model_box" style={{width: '95vw', height: '50vh', margin: 'auto'}}>
            {isLoading && <div className="spinner-border" style={{width: "5rem", height: "5rem"}} role="status"> <span className="sr-only"></span></div>}
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <M1GarandModel />
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

export default M1garandPage;