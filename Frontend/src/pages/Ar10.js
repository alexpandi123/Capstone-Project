import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ar10Model from "./3dModels/ar-rifle/Ar_rifle_10";


const Ar10Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <Ar10Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Ar10Page;