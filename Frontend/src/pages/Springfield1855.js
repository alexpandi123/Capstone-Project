import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SpringfielMusketdModel from "./3dModels/springfield-musket/1855_springfield_rifle_musket_-_game_asset";


const Springfield1855Page = () => {

    return(
        <>
            <div style={{width: '95vw', height: '50vh', margin: 'auto'}}>
                <Canvas>
                    <directionalLight position={[1,1,1]} intensity={15} />
                    <directionalLight position={[-1,-1,-1]} intensity={15} />
                        <SpringfielMusketdModel />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
};

export default Springfield1855Page;