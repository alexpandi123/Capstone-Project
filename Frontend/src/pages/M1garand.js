import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import M1GarandModel from "./3dModels/m1garand/M1_garand";


const M1garandPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <M1GarandModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default M1garandPage;