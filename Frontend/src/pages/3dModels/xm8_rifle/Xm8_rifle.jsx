/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 xm8_rifle.glb 
Author: Kelisei Ventura (https://sketchfab.com/frankestudios71)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/xm8-rifle-02691b534bb2457f85b0ceb0534f1bc4
Title: XM8 Rifle
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function XM8Model(props) {
  const { nodes, materials } = useGLTF('/xm8_rifle.glb')
  return (
    <group position={[0.4,0,0]} scale={0.013} {...props} dispose={null}>
      <mesh geometry={nodes.XM8_xm8_0.geometry} material={materials.material} position={[0.184, 3.685, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Mag_xm8_0.geometry} material={materials.material} position={[-5.105, -101.848, -0.011]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/xm8_rifle.glb')
