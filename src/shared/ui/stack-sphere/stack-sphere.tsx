import { Canvas } from "@react-three/fiber"

export const StackSphere = () => {
    return(
        <Canvas
        camera={{ fov: 35, near: 1, far: 100, position: [6, 6, 10] }}
        >

        </Canvas>
    )
}