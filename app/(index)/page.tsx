"use client"

import { extend } from '@react-three/fiber'
import { BoxGeometry } from 'three'
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs"



import { useGLTF, DRACOLoader } from '@react-three/drei'

useGLTF.preload('/ball.gltf')
extend({ BoxGeometry })
function Model(props) {
    // const { scene } = useGLTF('/ball.glb')
    // return <primitive object={scene} {...props} />
    return (
        <mesh
            onClick={e => {
                window.alert("click")
                console.log(e)
            }}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"hotpink"} />
        </mesh>
    )
}

export default function Index() {
    const { scene } = useGLTF('/ball.glb')

    return (
        <>

            <ARCanvas
                camera={{ position: [0, 0, 0] }}
                onCreated={({ gl }) => {
                    gl.setSize(window.innerWidth, window.innerHeight)
                }}>
                <ambientLight />
                <pointLight position={[10, 10, 0]} />
                <ARMarker
                    type={"pattern"}
                    patternUrl={"data/hiro.patt"}>
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={"green"} />


                    </mesh>

                </ARMarker>


            </ARCanvas>
        </>
    )
}

