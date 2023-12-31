/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 9a-91.glb 
Author: zzzs570 (https://sketchfab.com/zzzs570)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/9a-91-dc1e831495214e228a148c2bd43fdb06
Title: 9a-91
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function W9a91Model(props) {
  const { nodes, materials } = useGLTF('/9a-91.glb')
  return (
    <group position={[1.7,0,0]} rotation={[4.9,0,4.8]} {...props} dispose={null}>
      <group scale={0.7}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['9A_91_Base_Color.jpg']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material02} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material_4.jpg']} />
      </group>
    </group>
  )
}

useGLTF.preload('/9a-91.glb')
