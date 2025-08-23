import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Orbiting particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float key={i} speed={2 + i * 0.2} rotationIntensity={1} floatIntensity={1}>
          <Sphere 
            args={[0.05, 16, 16]} 
            position={[
              Math.cos(i * Math.PI * 0.25) * 2.5,
              Math.sin(i * Math.PI * 0.25) * 0.5,
              Math.sin(i * Math.PI * 0.25) * 2.5
            ]}
          >
            <MeshDistortMaterial
              color="#22C55E"
              attach="material"
              distort={0.2}
              speed={3}
              emissive="#22C55E"
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      ))}
    </Float>
  );
}

export default function AIBrain3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22C55E" />
        <Environment preset="night" />
        <AnimatedBrain />
      </Canvas>
    </div>
  );
}