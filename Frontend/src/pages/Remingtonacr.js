import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ACRModel from "./3dModels/bushmaster_acr/Adaptive_combat_rifle";

const RemingtonacrPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <ACRModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default RemingtonacrPage;