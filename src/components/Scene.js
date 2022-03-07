/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: HomeLane (https://sketchfab.com/homelane)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/294fe8b676bd4e30978e215a83ab7111
title: L-Shaped Contemporary Modular Kitchen 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Object007_mtl} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.Object009_mtl} />
        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
        <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
        <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
        <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
        <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
        <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
        <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
        <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
        <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
        <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
        <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
        <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
        <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
        <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
        <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
        <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
        <mesh geometry={nodes.mesh_20.geometry} material={materials.Object012_mtl} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')