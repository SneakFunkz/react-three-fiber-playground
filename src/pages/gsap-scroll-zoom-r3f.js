import React, { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Environment, Image, Scroll, ScrollControls, SpotLight } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import sky from "../static/sky.jpg";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";
import { LayerMaterial, Depth, Noise } from "lamina";

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

const Item = ({ url, ...props }) => {
  return (
    <group {...props}>
      <Image url={url} />
    </group>
  );
};

const Items = () => {
  //   const { height: h, width: w } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item url={sky} position={[0, 0, 0]}></Item>
    </Scroll>
  );
};

const Camera = () => {
  const ref = useRef();
  //   useFrame((state) => {
  //     if (!!orbitControlsRef) {
  //       const { x, y } = state.mouse;
  //       orbitControlsRef.current.setAzimuthalAngle(-angleToRadians(90 * x * 0.2));
  //       orbitControlsRef.current.setPolarAngle(angleToRadians(100 * y * 0.2 + 90));
  //       orbitControlsRef.current.update();
  //     }
  //   });

  useEffect(() => {
    if (!!ref) {
      console.log(ref.current);
      gsap.to(ref.current.position, {
        scrollTrigger: { trigger: ref.current, start: "top", scrub: "true", end: "bottom" },
        z: 2,
        duration: 2,
      });
    }
  }, [ref.current]);
  return (
    <>
      <PerspectiveCamera ref={ref} makeDefault position={[0, 0, 5]} />
      {/* <OrbitControls ref={orbitControlsRef} /> */}
    </>
  );
};

export default function GsapScrollZoomR3F() {
  return (
    <div className="wrapper">
      <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <Camera />
          <ScrollControls pages={3} damping={4}>
            <Items />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
