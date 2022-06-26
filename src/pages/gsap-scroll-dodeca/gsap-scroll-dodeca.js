import { Stage, Box, Image, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
// import Scroller, { scrollerConfig } from "./Scroller";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import sky from "../../static/sky.jpg";
import Scroller, { scrollerConfig } from "./Scroller";

const Item = () => {
  const imageRef = useRef();
  const [imagePosition] = useState({ z: 0 });

  useEffect(() => {
    if (!!imageRef) {
      console.log(imageRef.current);
      gsap.to(imageRef.current.position, {
        scrollTrigger: {
          ...scrollerConfig,
        },
        z: 3,
      });
    }
  }, [imagePosition.current]);
  return <Image position={[0, 0, imagePosition.z]} rotation={[0, 0, 0]} ref={imageRef} url={sky} />;
};

const Scene = () => {
  return (
    <>
      <Item />;
    </>
  );
};

const GsapScrollDodecaApp = () => {
  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Scroller />
    </>
  );
};

export default GsapScrollDodecaApp;
