/*
Root and frame for all the 3d components
*/
import { Canvas } from '@react-three/fiber'
import Box from './components/box'
import { PerspectiveCamera, Group } from '@react-three/drei';
import { useRef } from 'react';
import Import from './components/import';

function rad(deg) {
    return deg*Math.PI/180;
}

export default function Window(props) {
    const camRef = useRef(null);
    const canvas = useRef();
    canvas.height = window.innerHeight;
    

    return (
        <Canvas ref={canvas} class="border">
            <PerspectiveCamera 
                main makeDefault
                position={[0, 0, 5]}
                aspect={props.aspect}
                ref={camRef}
                rotation={[rad(props.roll), rad(props.yaw), rad(props.pitch)]}
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <Import file={props.file} position={[-1, -1, 6]} />
        </Canvas>
    );
}

/*
<PerspectiveCamera 
                makeDefault manual
                position={[0, 0, 5]}
                aspect={props.aspect}
                ref={camRef}
                rotation={[rad(props.roll), rad(props.yaw), rad(props.pitch)]}
            />
*/