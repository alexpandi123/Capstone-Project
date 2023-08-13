/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 low-poly_cz_805_bren.glb 
Author: TastyTony (https://sketchfab.com/TastyTony)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-cz-805-bren-ffc93e9963ab4566b8908f57209f98a1
Title: Low-Poly CZ 805 Bren
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function CZ805BrenModel(props) {
  const { nodes, materials } = useGLTF('/low-poly_cz_805_bren.glb')
  return (
    <group scale={0.25} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.099}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[29.868, 16.32, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={41.061}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh geometry={nodes.Object_12.geometry} material={materials['Material.009']} skeleton={nodes.Object_12.skeleton} />
            <skinnedMesh geometry={nodes.Object_13.geometry} material={materials['Material.010']} skeleton={nodes.Object_13.skeleton} />
            <skinnedMesh geometry={nodes.Object_14.geometry} material={materials['Material.003']} skeleton={nodes.Object_14.skeleton} />
            <skinnedMesh geometry={nodes.Object_15.geometry} material={materials['Material.012']} skeleton={nodes.Object_15.skeleton} />
            <skinnedMesh geometry={nodes.Object_16.geometry} material={materials['Material.002']} skeleton={nodes.Object_16.skeleton} />
            <skinnedMesh geometry={nodes.Object_17.geometry} material={materials.material_0} skeleton={nodes.Object_17.skeleton} />
            <skinnedMesh geometry={nodes.Object_18.geometry} material={materials['Material.007']} skeleton={nodes.Object_18.skeleton} />
            <skinnedMesh geometry={nodes.Object_19.geometry} material={materials['Material.006']} skeleton={nodes.Object_19.skeleton} />
            <skinnedMesh geometry={nodes.Object_20.geometry} material={materials['Material.008']} skeleton={nodes.Object_20.skeleton} />
            <skinnedMesh geometry={nodes.Object_21.geometry} material={materials['Material.005']} skeleton={nodes.Object_21.skeleton} />
            <skinnedMesh geometry={nodes.Object_22.geometry} material={materials['Material.004']} skeleton={nodes.Object_22.skeleton} />
            <skinnedMesh geometry={nodes.Object_23.geometry} material={materials.Material} skeleton={nodes.Object_23.skeleton} />
            <skinnedMesh geometry={nodes.Object_24.geometry} material={materials['Material.011']} skeleton={nodes.Object_24.skeleton} />
            <skinnedMesh geometry={nodes.Object_25.geometry} material={materials['Material.013']} skeleton={nodes.Object_25.skeleton} />
          </group>
          <mesh geometry={nodes.Cube000_Material_0.geometry} material={materials.Material} position={[73.355, 56.31, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.854, 4.419, 6.854]} />
          <mesh geometry={nodes.Cube001_Material004_0.geometry} material={materials['Material.004']} position={[73.355, 56.31, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.854, 4.419, 6.854]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/low-poly_cz_805_bren.glb')
