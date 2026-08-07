"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { forwardRef, Suspense, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Box3, FrontSide, Vector3, } from "three";
import { animated, useSpring } from "@react-spring/three";

const TOTAL_FACES = 8;
const ANGLE_STEP = (Math.PI * 2) / TOTAL_FACES;
const FACE_ANGLE_OFFSET = 0.48
const FACE_RADIUS = 0.034;
const FACE_CENTER_Y = 0.022;
const PLANE_WIDTH = 0.022;
const PLANE_HEIGHT = 0.022;

export interface BraceletViewerRef {
  rotateRight: () => void;
  rotateLeft: () => void;
}

interface WristbandProps {
  rotation: any; // React Spring internal type
  scale: number;
  currentIndex: number;
  onPlaneClick: (index: number) => void;
}


interface InteractiveFacePlaneProps {
  index: number;
  angle: number;
  radius: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

function InteractiveFacePlane({
  index,
  angle,
  radius,
  isActive,
  onClick,
  
}: InteractiveFacePlaneProps) {

  
  

  // Place each plane evenly around the bracelet's outer perimeter.
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

    if (isActive) {
   
}

  return (
      <mesh 
        
        position={[x, FACE_CENTER_Y, z]} 
        rotation={[0, angle, 0]}
        onClick={() => onClick(index)}
      >

      <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT]} />
      <meshPhysicalMaterial
        transparent
        opacity={0}
        roughness={0.1}
        transmission={0.6}
        thickness={0.2}
        side={FrontSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function Wristband({ 
  rotation, 
  scale, 
  currentIndex,
  onPlaneClick,
}: WristbandProps) {


  // Load the model from the public folder.
  const { scene } = useGLTF("/models/wristband.glb");

  // Clone the scene to avoid mutation and rendering conflicts.
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.updateWorldMatrix(true, true);
    const boundingBox = new Box3().setFromObject(clonedScene);
    const size = boundingBox.getSize(new Vector3());
    const center = boundingBox.getCenter(new Vector3());
   
  }, [clonedScene]);

  return (
    <animated.group
      /* 
        FIX: Z position is locked to 0 now. 
        This keeps the model stable at the center origin point.
      */
      position={[0, scale >= 25 ? -0.6 : -0.3, 0]}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={clonedScene} />



      {Array.from({ length: TOTAL_FACES }, (_, index) => {
      const angle = FACE_ANGLE_OFFSET + index * ANGLE_STEP;

      return (
        <InteractiveFacePlane
          key={index}
          index={index}
          angle={angle}
          radius={FACE_RADIUS}
          isActive={index === currentIndex}
          onClick={onPlaneClick}
        />
      );
    })}
        
    </animated.group>
  );
}

const BraceletViewer = forwardRef<
  BraceletViewerRef,
  {
    scale: number;
    onCenteredIndexChange: (index: number) => void;
    onPlaneClick: (index: number) => void;
  }
>(
  function BraceletViewer(
    {
      scale,
      onCenteredIndexChange,
      onPlaneClick,
    },
    ref
  ) {
    const HOME_ROTATION = -0.45; 
    const TOTAL_QR_CODES = 8;
    const currentIndex = useRef(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const currentRotation = useRef(HOME_ROTATION);

    useEffect(() => {
    onCenteredIndexChange(currentIndex.current);
}, [onCenteredIndexChange]);
    
    
    
   

    // Keep the bracelet rotation as a spring-driven coordinate array.
    const [{ rotation }, api] = useSpring(() => ({
      rotation: [0, HOME_ROTATION, 0],
      config: {
        tension: 170,
        friction: 26,
      },
    }));

    useImperativeHandle(
      ref,
      () => ({
        rotateRight() {
          currentIndex.current = (currentIndex.current + 1) % TOTAL_QR_CODES;
          setDisplayIndex(currentIndex.current);
          onCenteredIndexChange(currentIndex.current);
          currentRotation.current -= Math.PI / 4;
          api.start({
            rotation: [0, currentRotation.current, 0],
          });
        },


        rotateLeft() {
          currentIndex.current = (currentIndex.current - 1 + TOTAL_QR_CODES) % TOTAL_QR_CODES;
          setDisplayIndex(currentIndex.current);
          onCenteredIndexChange(currentIndex.current);
          currentRotation.current += Math.PI / 4;
          api.start({
            rotation: [0, currentRotation.current, 0],
          });
        },
      }),
      [api]
    );

    return (
      <div className="relative h-[50dvh] w-full">
        <Canvas
          className="h-full w-full"
          /*
            FOV 15 is safe from precision artifacts while keeping 
            the bracelet sized beautifully inside the viewport box frame.
          */
          camera={{
            position: [0, 0.3, 9],
            fov: 18, 
          }}
        >
          <ambientLight intensity={0.8} color="#DDEBFF" />
          <directionalLight position={[5, 2, 5]} intensity={1.5} color="#FFC978" />
          <directionalLight position={[-2, 1, -3]} intensity={0.35} color="#BFD8FF" />
          <Suspense fallback={null}>
            <Wristband 
              rotation={rotation} 
              scale={scale} 
              currentIndex={displayIndex}
              onPlaneClick={(index) => {
                onPlaneClick(index);
              }}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  }
);

export default BraceletViewer;
