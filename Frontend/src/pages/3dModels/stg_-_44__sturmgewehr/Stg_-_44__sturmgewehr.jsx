/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 stg_-_44__sturmgewehr.glb 
Author: ELIZION (https://sketchfab.com/ELIZION)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stg-44-sturmgewehr-fa37bef729e141a6a29bb022a3e0be41
Title: STG - 44 | Sturmgewehr
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function STG44Model(props) {
  const { nodes, materials } = useGLTF('/stg_-_44__sturmgewehr.glb')
  return (
    <group position={[-1,0,0]} scale={0.09} rotation={[0.1,1.5,0.2]} {...props} dispose={null}>
      <group position={[-0.827, 0.176, -0.477]} rotation={[-1.442, 0.22, -0.026]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 8.567, 40.85]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Stock_Stock_0.geometry} material={materials.Stock} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[-1.32, 11.388, 15.575]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_FiremodeButton_E_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[-0.828, 9.302, 13.42]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Safety_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 9.442, 11.09]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Trigger_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 14.144, -1.097]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Bolt_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, -1.746, -2.665]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Magazine_Magazine_0.geometry} material={materials.Magazine} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 3.895, 18.773]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Recievers_Body_0.geometry} material={materials.Body} position={[0, -1.332, 0]} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 19.561, -4.926]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Sight_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 16.456, 1.603]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Piston_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 19.559, -0.609]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_Sight_Distance_Body_0.geometry} material={materials.Body} position={[0, 0.561, 0]} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[0, 16.456, -27.487]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Barrel_Barrel_0.geometry} material={materials.Barrel} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[-1.735, 11.388, 15.575]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Body_FiremodeButton_D_Body_0.geometry} material={materials.Body} rotation={[0, 0, -Math.PI / 2]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/stg_-_44__sturmgewehr.glb')
