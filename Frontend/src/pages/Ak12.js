import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ak12Model from "./3dModels/ak_12/Ak_12";

const Ak12Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <Ak12Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Ak12Page;