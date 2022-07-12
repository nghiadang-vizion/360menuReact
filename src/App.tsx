import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useTexture, useHelper } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { PointLight } from 'three';

function ThreeContent() {
  const lightRef = useRef<PointLight>(null);
  useHelper(lightRef, PointLight, 1, "red");
  return(
    <>
      <ambientLight/>
      <pointLight ref={lightRef} position={[5,5,0]} intensity={4}/>
      <OrbitControls/>
    </>
  )
}

function Scene() {
  return (
    <Canvas camera={{position: [0,10,5]}}>
      <ThreeContent/>
    </Canvas>
  )
}

export default function App() {
  return (
    <div className='App h-screen'>
      <Scene/>
    </div>
  )
}
