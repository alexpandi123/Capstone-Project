import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import M16Model from "./3dModels/m-16/M16_a2_rifle";


const M16Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <M16Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default M16Page;