import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

export default function Import(props) {
    const result = useLoader(GLTFLoader, './'+props.file)
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.z += 0;
    })

    return (
        <primitive ref={ref} {... props} object={result.scene}/>
    );
}