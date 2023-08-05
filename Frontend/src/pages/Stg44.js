import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import STG44Model from "./3dModels/stg_-_44__sturmgewehr/Stg_-_44__sturmgewehr";


const Stg44Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <STG44Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Stg44Page;