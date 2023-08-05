import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import M1918a2Model from "./3dModels/m1918a2/M1918a2_bar";


const M1918browningPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <M1918a2Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default M1918browningPage;