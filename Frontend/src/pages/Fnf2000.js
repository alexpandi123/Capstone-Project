import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FNF2000Model from "./3dModels/fn_f2000/Low-poly_fn_f2000";

const Fnf2000Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <FNF2000Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Fnf2000Page;