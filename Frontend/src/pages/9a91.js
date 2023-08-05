import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import W9a91Model from "./3dModels/9a-91/9a-91";


const W9a91Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={30} />
                    <directionalLight position={[-1,-1,-1]} intensity={60} />
                        <W9a91Model />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default W9a91Page;