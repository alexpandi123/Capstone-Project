import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import VEPRModel from "./3dModels/vepr_vpo_205-00/Vepr_vpo_205-00";


const Vepr12Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <VEPRModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Vepr12Page;