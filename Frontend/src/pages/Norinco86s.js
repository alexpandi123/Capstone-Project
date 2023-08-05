import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NorincoModel from "./3dModels/norinco_type_86s/Low-poly_norinco_type_86s";

const Norinco86sPage = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <NorincoModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Norinco86sPage;