import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BrenMk2Model from "./3dModels/brenmk2/Bren_mk_2";


const BrengunPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={20} />
                    <directionalLight position={[-1,-1,-1]} intensity={20} />
                        <BrenMk2Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default BrengunPage;