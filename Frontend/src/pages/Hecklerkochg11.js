import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import G11Model from "./3dModels/g11/G11";


const Hecklerkochg11Page = () => {

    const onClick = (event) => {
        console.log("Clicked Hecklerkochg11 Image, Fetching results...");
    };

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={10} />
                    <directionalLight position={[-1,-1,-1]} intensity={10} />
                        <G11Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Hecklerkochg11Page;