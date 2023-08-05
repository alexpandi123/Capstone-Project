import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AK47Model from "./3dModels/ak-47/Ak-47_kalashnikov";


const AK47Page = () => {


    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <AK47Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default AK47Page;