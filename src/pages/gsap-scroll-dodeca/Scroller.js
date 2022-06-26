import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

export const scrollerConfig = {
  scroller: ".scroll-container",
  trigger: ".scroll-height",
  start: "top top",
  end: `100%`,
  scrub: true,
};

export default function Scroller({ height = 10 }) {
  const multiplier = 1000;
  return (
    <ScrollContainer className="scroll-container">
      <ScrollHeight $height={height * multiplier} className="scroll-height" />
    </ScrollContainer>
  );
}

export const ScrollContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: calc(100% + 20px);
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 1;
  top: 0;
  left: 0;
`;

export const ScrollHeight = styled.div`
  background: transparent;
  height: ${(props) => props.$height}px;
  width: 100vw;
`;
