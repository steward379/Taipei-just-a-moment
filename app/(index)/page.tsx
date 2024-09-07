
"use client"

import { extend } from '@react-three/fiber'
import { BoxGeometry } from 'three'
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs"


import dynamic from 'next/dynamic';

// 動態導入 ARScene 組件並禁用 SSR
const ARScene = dynamic(() => import('../../components/ARScene'), { ssr: false });



export default function Index() {
    // const { scene } = useGLTF('/ball.glb')

    return (
        <>
            <ARScene/>
            {/*<ARCanvas*/}
            {/*    camera={{ position: [0, 0, 0] }}*/}
            {/*    onCreated={({ gl }) => {*/}
            {/*        gl.setSize(window.innerWidth, window.innerHeight)*/}
            {/*    }}>*/}
            {/*    <ambientLight />*/}
            {/*    <pointLight position={[10, 10, 0]} />*/}
            {/*    <ARMarker*/}
            {/*        type={"pattern"}*/}
            {/*        patternUrl={"data/hiro.patt"}>*/}
            {/*        <mesh>*/}
            {/*            <boxGeometry args={[1, 1, 1]} />*/}
            {/*            <meshStandardMaterial color={"green"} />*/}


            {/*        </mesh>*/}

            {/*    </ARMarker>*/}


            {/*</ARCanvas>*/}
        </>
    )
}

