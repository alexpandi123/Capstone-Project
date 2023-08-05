import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import XM29OICWModel from "./3dModels/maximum_action_mod_xm-29_oicw_rifle/Maximum_action_mod_xm-29_oicw_rifle";


const Xm29oicwPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <XM29OICWModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Xm29oicwPage;