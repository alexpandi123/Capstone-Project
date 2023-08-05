import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RemingtonModel95Model from "./3dModels/remington_model_95_double_derringer/Remington_model_95_double_derringer";

const Remington95Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={15} />
                    <directionalLight position={[-1,-1,-1]} intensity={15} />
                        <RemingtonModel95Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Remington95Page;