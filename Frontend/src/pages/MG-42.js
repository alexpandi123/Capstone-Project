import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MG42Model from "./3dModels/mg-42/Mg_42_ww2";

const MG42Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <MG42Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    );
};

export default MG42Page;