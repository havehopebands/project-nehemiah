"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useRef, useMemo, Suspense } from "react";
import { Group } from "three";
import { animated, useSpring } from "@react-spring/three";

export interface BraceletViewerRef {
    rotateRight: () => void;
    rotateLeft: () => void;
}

interface WristbandProps {
    rotation: any; // React Spring internal type
    scale: number;
}

function Wristband({ rotation, scale }: WristbandProps) {
    // 1. Load the model from your public folder
    const { scene } = useGLTF("/models/wristband.glb");
    const groupRef = useRef<Group>(null);

    // 2. Clone to avoid mutation and rendering conflicts
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    return (
        /* 
           FIX 1: Pass the spring object directly to rotation. 
           @react-spring/three natively understands spring arrays if mapped correctly.
        */
        <animated.group
            ref={groupRef}
            position={[0, scale >= 25 ? -0.6 : -0.3, 0]}
            rotation={rotation} 
            scale={scale}
        >
            <primitive object={clonedScene} />
        </animated.group>
    );
}

const BraceletViewer = forwardRef<BraceletViewerRef, { scale: number }>(
    function BraceletViewer({ scale }, ref) {
        const HOME_ROTATION = -0.45;
        const TOTAL_QR_CODES = 8;

        const currentIndex = useRef(0);
        const currentRotation = useRef(HOME_ROTATION);

        // Define the spring structure explicitly as coordinates
        const [{ rotation }, api] = useSpring(() => ({
            rotation: [0, HOME_ROTATION, 0],
            config: {
                tension: 170,
                friction: 26,
            },
        }));

        useImperativeHandle(ref, () => ({
            rotateRight() {
                currentIndex.current = (currentIndex.current + 1) % TOTAL_QR_CODES;
                currentRotation.current -= Math.PI / 4;
                api.start({
                    rotation: [0, currentRotation.current, 0],
                });
            },

            rotateLeft() {
                currentIndex.current = (currentIndex.current - 1 + TOTAL_QR_CODES) % TOTAL_QR_CODES;
                currentRotation.current += Math.PI / 4;
                api.start({
                    rotation: [0, currentRotation.current, 0],
                });
            },
        }));

        return (
            <div className="relative w-full h-[50dvh]">
                <Canvas
                    className="w-full h-full"
                    camera={{
                        position: [0, 0.3, 9],
                        fov: 18,
                    }}
                >
                    <ambientLight intensity={0.8} color="#DDEBFF" />
                    <directionalLight position={[5, 2, 5]} intensity={1.5} color="#FFC978" />
                    <directionalLight position={[-2, 1, -3]} intensity={0.35} color="#BFD8FF" />

                    {/* FIX 2: Wrapped in Suspense so the Canvas waits for the file to fetch */}
                    <Suspense fallback={null}>
                        <Wristband rotation={rotation} scale={scale} />
                    </Suspense>
                </Canvas>
            </div>
        );
    }
);

export default BraceletViewer;

