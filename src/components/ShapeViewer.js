// ShapeViewer.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

// Mapping for GLTF models
const GLTFModels = {
  starPrism: "/models/star_prism.glb",
  gear: "/models/gear.glb",
  ringCylinder: "/models/ring_cylinder.glb"
};

// Component to load GLTF models
function GLTFShape({ path }) {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function ShapeViewer({ model }) {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />

      {/* Built-in shapes */}
      {model === "box" && (
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      )}
      {model === "sphere" && (
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>
      )}
      {model === "cylinder" && (
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 2.5, 32]} />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      )}
      {model === "cone" && (
        <mesh>
          <coneGeometry args={[1.5, 2.5, 32]} />
          <meshStandardMaterial color="pink" />
        </mesh>
      )}
      {model === "torus" && (
        <mesh>
          <torusGeometry args={[1.2, 0.4, 16, 100]} />
          <meshStandardMaterial color="violet" />
        </mesh>
      )}
      {model === "tetrahedron" && (
        <mesh>
          <tetrahedronGeometry args={[1.8]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      )}
      {model === "octahedron" && (
        <mesh>
          <octahedronGeometry args={[1.8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      )}
      {model === "dodecahedron" && (
        <mesh>
          <dodecahedronGeometry args={[1.8]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
      )}
      {model === "icosahedron" && (
        <mesh>
          <icosahedronGeometry args={[1.8]} />
          <meshStandardMaterial color="white" />
        </mesh>
      )}
      {model === "capsule" && (
        <mesh>
          <capsuleGeometry args={[1, 2, 4, 8]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      )}

      {/* GLTF shapes */}
      {["starPrism", "gear", "ringCylinder"].includes(model) && (
        <Suspense fallback={null}>
          <GLTFShape path={GLTFModels[model]} />
        </Suspense>
      )}

      <OrbitControls />
    </Canvas>
  );
}
