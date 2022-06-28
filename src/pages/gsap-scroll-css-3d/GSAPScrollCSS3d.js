import gsap from "gsap";
import styles from "../../styles/GSAPScrollCSS3d.module.css";
import sky from "../../static/sky.jpg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import styled from "styled-components";
import Scroller, { scrollerConfig } from "../gsap-scroll-dodeca/Scroller";
gsap.registerPlugin(ScrollTrigger);

const GSAPScrollCSS3d = () => {
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline().to("#imageContainerMain", {
      scrollTrigger: {
        ...scrollerConfig,
        pinSpacing: "1000",
      },
      transform: "translateZ(6px)",
    });
  });

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.section}`} id="main">
        <div className={styles.sectionGrid}>
          <div className={`${styles.imageContainerMain}`} id="imageContainerMain">
            <img src={sky} className={`${styles.image}`}></img>
          </div>
          <div className={`${styles.gridItem} ${styles.image1}`}>
            <img src={sky} className={styles.image} alt=""></img>
          </div>
          <div className={`${styles.gridItem} ${styles.image2}`}>
            <img src={sky} className={styles.image} alt=""></img>
          </div>
          <div className={`${styles.gridItem} ${styles.image3}`}>
            <img src={sky} className={styles.image} alt=""></img>
          </div>
          <div className={`${styles.gridItem} ${styles.image4}`}>
            <img src={sky} className={styles.image} alt=""></img>
          </div>
          <div className={`${styles.gridItem} ${styles.image5}`}>
            <img src={sky} className={styles.image} alt=""></img>
          </div>
        </div>
      </div>
      <section className={styles.section}>yo</section>
      <section className={styles.section}>yo</section>
      <Scroller />
    </div>
  );
};

export default GSAPScrollCSS3d;
