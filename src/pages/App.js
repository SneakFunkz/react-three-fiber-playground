import styles from "../styles/app.module.css";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Image, Scroll, ScrollControls, shaderMaterial, useIntersect } from "@react-three/drei";
import { useRef } from "react";
import sky from "../static/sky.jpg";
import * as THREE from 'three'

const Item = ({url, scale, ...props}) => {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const {height} = useThree((state) => state.viewport);
  useFrame((state, delta) => {

    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height/2+1, 4, delta);
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })

  return (
    <group {...props} >
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}

const Items = () => {
  const {width: w, height: h} = useThree(state => state.viewport);

  return (
    <Scroll >
      <Item url={sky} scale={[w/3, w/3, 1]} position={[w/6, 0, 0]} />z
      <Item url={sky} scale={[w/3, w/3, 1]} position={[w/6, -h, 0]} />z
    </Scroll>
  )

}


const App = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach={'background'} args={['#f0f0f0']}/>
      <ScrollControls damping={6} pages={5}>
        <Items />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
