"use client";

import {
    Canvas,
} from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
import {
    forwardRef,
    useImperativeHandle,
    useRef,
} from "react";
import { Group } from "three";
import {
    animated,
    to,
    SpringValue,
    useSpring,
} from "@react-spring/three";


function Wristband({
        rotation,
        scale,
    }: {
        rotation: SpringValue<number[]>;
        scale: number;
    }) {

    const { scene } = useGLTF("/models/wristband.glb");
    const groupRef = useRef<Group>(null);
 


    

    return (

        
        <animated.group
            //Home Pose - H center
            ref={groupRef}
            position={[
                0,
                scale >= 25 ? -0.6 : -0.3,
                0,
            ]}
            rotation={to(rotation, (r) => [r[0], r[1], r[2]] as [number, number, number])}
            scale={scale}
        >
            <primitive object={scene} />
          
        </animated.group>
        
    );

}
    const BraceletViewer = forwardRef(function BraceletViewer(
        {
            scale,
        }: {
            scale: number;
        },
        ref
    ) {

    const HOME_ROTATION = -0.45;
    const TOTAL_QR_CODES = 8;

    const currentIndex = useRef(0);

    const currentRotation = useRef(HOME_ROTATION);

    const [{ rotation }, api] = useSpring(() => ({
        rotation: [0, HOME_ROTATION, 0],
        config: {
            tension: 170,
            friction: 26,
        },
    }));

    

    useImperativeHandle(ref, () => ({
            rotateRight() {

                currentIndex.current =
                    (currentIndex.current + 1) % TOTAL_QR_CODES;

                currentRotation.current -= Math.PI / 4;

                api.start({
                    rotation: [
                        0,
                        currentRotation.current,
                        0,
                    ],
                });

            },

            rotateLeft() {

                currentIndex.current =
                    (currentIndex.current - 1 + TOTAL_QR_CODES) % TOTAL_QR_CODES;

                currentRotation.current += Math.PI / 4;

                api.start({
                    rotation: [
                        0,
                        currentRotation.current,
                        0,
                    ],
                });

            },
    }));

    return (
        <div
            className="
                relative
                w-full
                h-[50dvh]
            "
        >

          

            <Canvas
                camera={{
                    position: [0, 0.3, 4],
                    fov: 40
                }}
            >

                <ambientLight 
                    intensity={0.8} 
                    color="#DDEBFF"
                />
                <directionalLight
                    position={[5, 2, 5]}
                    intensity={1.5}
                    color="#FFC978"
                />

                <directionalLight
                    position={[-2, 1, -3]}
                    intensity={0.35}
                    color="#BFD8FF"
                />

                <Wristband
                    rotation={rotation}
                    scale={scale}
                />

            </Canvas>
        </div>
    );
});

export default BraceletViewer;