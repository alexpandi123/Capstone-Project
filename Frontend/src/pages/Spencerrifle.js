import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spencer1860Model from "./3dModels/1860_spencer_carbine_with_engravings/1860_spencer_carbine_with_engravings";


const SpencerriflePage = () => {

    return(
        <div className="main_div">
            <div className="controls_div_text">
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
            <h1 className="text-center mt-5">M1865 Spencer rifle</h1>
            <h6 className="text-center mb-5">also known as "Spencer repeating rifle"</h6>
            <div className="weapon_model_box" style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <Spencer1860Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    )
};

export default SpencerriflePage;