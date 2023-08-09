import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import OTs14GrozaModel from "./3dModels//ots-14_groza/Ots-14_groza";

const Ots14grozaPage = () => {

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
            <h1 className="text-center mt-5">OTs-14 Groza</h1>
            <h6 className="text-center mb-5">also known as "OTs-14-4 (Groza-4)"</h6>
            <div className="weapon_model_box" style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <OTs14GrozaModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    )
};

export default Ots14grozaPage;