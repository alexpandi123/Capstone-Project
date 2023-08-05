import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import XM8Model from "./3dModels/xm8_rifle/Xm8_rifle";

const Xm8Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <XM8Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Xm8Page;