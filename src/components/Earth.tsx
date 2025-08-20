import { useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Earth() {
    const earth = useGLTF('./earth_4/scene.gltf');
    const [scale, setScale] = useState(0.15);

    useEffect(() => {
        const handleResize = () => {
            setScale(window.innerWidth < 600 ? 0.15 : 0.2);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Canvas
            frameloop="demand"
            camera={{ position: [0, 2, 8], fov: 45, near: 0.1, far: 200 }}
        >
            <OrbitControls autoRotate enableZoom={false} enablePan={false} />
            <primitive object={earth.scene} scale={scale} position={[0, 0.5, 0]} />
            <ambientLight intensity={1.5} />
            <directionalLight
                position={[5, 10, 7.5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <directionalLight
                position={[-7.5, -5, -5]}
                intensity={0.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
        </Canvas>
    );
}