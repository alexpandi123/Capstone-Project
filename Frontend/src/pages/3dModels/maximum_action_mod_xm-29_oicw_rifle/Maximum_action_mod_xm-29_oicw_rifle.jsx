/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 maximum_action_mod_xm-29_oicw_rifle.glb 
Author: Jasper Carmack (https://sketchfab.com/JasperCarmack)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/maximum-action-mod-xm-29-oicw-rifle-a33100ee717c420daec2016d88822280
Title: [MAXIMUM ACTION MOD] XM-29 OICW Rifle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function XM29OICWModel(props) {
  const { nodes, materials } = useGLTF('/maximum_action_mod_xm-29_oicw_rifle.glb')
  return (
    <group scale={9} {...props} dispose={null}>
      <group position={[0, -0.002, 0]} rotation={[Math.PI / 2, -0.001, 0.001]}>
        <mesh geometry={nodes['OICW_01_-_Default_0'].geometry} material={materials['01_-_Default']} rotation={[-Math.PI, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/maximum_action_mod_xm-29_oicw_rifle.glb')