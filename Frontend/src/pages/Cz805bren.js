import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CZ805BrenModel from "./3dModels/cz_805_bren/Low-poly_cz_805_bren";


const Cz805brenPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <CZ805BrenModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Cz805brenPage;