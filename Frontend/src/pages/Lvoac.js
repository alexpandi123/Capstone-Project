import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LvoacModel from "./3dModels/lvoac/Low_poly_m4_carbine_lvoa-c";

const LvoacPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <LvoacModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default LvoacPage;