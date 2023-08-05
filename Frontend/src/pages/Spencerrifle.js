import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spencer1860Model from "./3dModels/1860_spencer_carbine_with_engravings/1860_spencer_carbine_with_engravings";


const SpencerriflePage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <Spencer1860Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default SpencerriflePage;