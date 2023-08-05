import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import K98Model from "./3dModels/mauser_k98_sniper_rilfe/Mauser_k98_sniper_rilfe";


const Karabiner98kPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={15} />
                    <directionalLight position={[-1,-1,-1]} intensity={15} />
                        <K98Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Karabiner98kPage;