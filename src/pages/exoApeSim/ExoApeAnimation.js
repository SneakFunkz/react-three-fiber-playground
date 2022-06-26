import { Html, Image, PerspectiveCamera, Scroll, ScrollControls, useAspect, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import sky from "../../static/sky.jpg";
import styles from "../../styles/exoApeAnimation.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap, { Power3 } from "gsap";
import * as THREE from "three";
import Scroller, { scrollerConfig } from "../gsap-scroll-dodeca/Scroller";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const imageRef = useRef();
  const { width, height, aspect } = useThree((state) => state.viewport);

  const scale = useAspect(width, height, 0.3);

  const tl = useRef();

  useLayoutEffect(() => {
    // console.log(imageRef.current);
    // console.log(aspect);
    // console.log(imageRef.current.material.scale[1]);

    // tl.current = gsap.timeline().to(imageRef.current.material.scale, { [0]: 1, [1]: 1 });
    tl.current = gsap.timeline().to(imageRef.current.scale, {
      scrollTrigger: { ...scrollerConfig, toggleActions: "play none reverse reset" },
      x: () => width + 0.1,
      y: () => height + 0.1,
      z: 1,
      onUpdate: () => {
        console.log(aspect);
        // console.log(imageRef.current.scale);
      },
    });
  });

  return (
    <>
      <Image url={sky} ref={imageRef} scale={scale} />
    </>
  );
};

const ExoApeAnimation = () => {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
      <Scroller />
    </>
  );
};

export default ExoApeAnimation;
