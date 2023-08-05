import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import OTs14GrozaModel from "./3dModels//ots-14_groza/Ots-14_groza";

const Ots14grozaPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <OTs14GrozaModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Ots14grozaPage;