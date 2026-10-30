import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import type { Group } from "three";
function Centerpiece({ reduce }: { reduce: boolean }) {
  const g = useRef<Group>(null);
  useFrame((s, dt) => {
    if (!g.current) return;
    if (!reduce) g.current.rotation.y += dt * 0.25;
    g.current.rotation.x += (s.pointer.y * 0.5 - g.current.rotation.x) * 0.05;
    g.current.position.x += (s.pointer.x * 0.4 - g.current.position.x) * 0.05;
  });
  return (
    <Float speed={reduce ? 0 : 1.5} floatIntensity={1.2}>
      <group ref={g}>
        <mesh>
          <torusKnotGeometry args={[1, 0.34, 160, 24, 2, 3]} />
          <meshStandardMaterial color="#d8d8d8" metalness={1} roughness={0.12} />
        </mesh>
        {[[1.9, 0.9, 0.3], [-1.8, -0.8, 0.6], [0.4, -1.8, -0.4], [-1.2, 1.7, -0.5]].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]} scale={0.18 + i * 0.04}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#c7ff41" metalness={0.6} roughness={0.25} emissive="#c7ff41" emissiveIntensity={0.25} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
export default function Scene3D({ reduce, mobile }: { reduce: boolean; mobile: boolean }) {
  return (
    <Canvas dpr={mobile ? 1 : [1, 1.75]} camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: !mobile }} aria-hidden="true">
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#c7ff41" />
      <Centerpiece reduce={reduce} />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 4, -3]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={3} color="#c7ff41" position={[-5, 0, 2]} scale={[2, 6, 1]} />
        <Lightformer form="ring" intensity={2} position={[4, -2, 3]} scale={3} />
      </Environment>
    </Canvas>
  );
}
