/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 mg_42_ww2.glb 
Author: Ara_my45yt (https://sketchfab.com/Ara_my45yt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mg-42-ww2-c63321cd4f5045f78f511be20d7ea0c4
Title: Mg 42 ww2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MG42Model(props) {
  const { nodes, materials } = useGLTF('/mg_42_ww2.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[1,0,1]} scale={0.05}>
          <mesh geometry={nodes.body_1001_0.geometry} material={materials['1001']} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.loader_1001_0.geometry} material={materials['1001']} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.mag_1001_0.geometry} material={materials['1001']} position={[-1, -3, -0.5]} rotation={[-Math.PI / 2, 0.07, 0]} />
        </group>
      </group>
  )
}

useGLTF.preload('/mg_42_ww2.glb')