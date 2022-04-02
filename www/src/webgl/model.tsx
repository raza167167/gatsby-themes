/* eslint-disable camelcase */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    Block_Above: THREE.Mesh
    Logos: THREE.Mesh
    base: THREE.Mesh
    Braces: THREE.Mesh
    base_1: THREE.Mesh
    Database: THREE.Mesh
    base_2: THREE.Mesh
    Triangle1: THREE.Mesh
    Hexagon1: THREE.Mesh
    Rectangle1: THREE.Mesh
    Triangle: THREE.Mesh
    Triangle1_1: THREE.Mesh
    Hexagon1_1: THREE.Mesh
    Rectangle: THREE.Mesh
    ["Rectangle-Base1"]: THREE.Mesh
    Belt_1: THREE.Mesh
    Logo: THREE.Mesh
    Block: THREE.Mesh
    Tubes: THREE.Mesh
  }
  materials: {
    Gray: THREE.MeshStandardMaterial
    Gatsby: THREE.MeshStandardMaterial
    Plurble: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Magenta: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
  }
}

const MODEL_PATH = `/model/dracoGatsby.gltf`

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(MODEL_PATH) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[1, 1, -1]}>
        <group position={[0.21, 8.75, 59.69]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_Above.geometry}
            material={nodes.Block_Above.material}
            position={[-0.28, 0.23, 0.6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logos.geometry}
            material={nodes.Logos.material}
            position={[0.28, 5.76, -0.6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base.geometry}
            material={nodes.base.material}
            position={[-0.05, -5.76, 0.01]}
          />
        </group>
        <group position={[-59.45, 4.97, 0.07]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Braces.geometry}
            material={materials.Green}
            position={[0.09, 1.98, 0.07]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_1.geometry}
            material={nodes.base_1.material}
            position={[-0.09, -1.98, -0.07]}
          />
        </group>
        <group position={[0.01, 7.39, -59.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Database.geometry}
            material={materials.Orange}
            position={[-0.15, 4.4, -0.3]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_2.geometry}
            material={nodes.base_2.material}
            position={[0.15, -4.4, 0.3]}
          />
        </group>
        <group position={[31.41, 27.55, -1.56]}>
          <group position={[10.82, -19.57, 0]}>
            <group position={[-8.66, 2.1, 0.65]} rotation={[-1.57, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Triangle1.geometry}
                material={nodes.Triangle1.material}
                position={[11.77, -0.07, -0.03]}
                rotation={[1.57, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hexagon1.geometry}
                material={nodes.Hexagon1.material}
                position={[0.04, -0.07, -0.03]}
                rotation={[1.57, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle1.geometry}
                material={nodes.Rectangle1.material}
                position={[-11.77, 0.07, 0.03]}
                rotation={[1.57, 0, 0]}
              />
            </group>
            <group position={[17.45, 2.37, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Triangle.geometry}
                material={nodes.Triangle.material}
                position={[2.72, 0.61, -3.31]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Triangle1_1.geometry}
                material={nodes.Triangle1_1.material}
                position={[-2.98, 0.61, 3.31]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hexagon1_1.geometry}
                material={nodes.Hexagon1_1.material}
                position={[2.98, 0.7, 2.26]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle.geometry}
                material={nodes.Rectangle.material}
                position={[-2.78, 0.67, -2.02]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes[`Rectangle-Base1`].geometry}
                material={nodes[`Rectangle-Base1`].material}
                position={[0.27, -0.7, 0.5]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Belt_1.geometry}
              material={nodes.Belt_1.material}
              position={[-1.72, -3.07, 0.84]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo.geometry}
            material={nodes.Logo.material}
            position={[-30.29, 22.65, 3.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block.geometry}
            material={nodes.Block.material}
            position={[-31.25, -12.06, 1.56]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes.geometry}
          material={nodes.Tubes.material}
          position={[-23.4, 3.04, 0.36]}
        />
      </group>
    </group>
  )
}

useGLTF.preload(MODEL_PATH)
