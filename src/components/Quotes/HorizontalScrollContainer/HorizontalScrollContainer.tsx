import React, { useState, useEffect, useRef } from "react";
import {
  TallOuterContainer,
  StickyInnerContainer,
  HorizontalTranslateContainer,
} from "./styled";

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
}

const calcDynamicHeight = (objectWidth: number): number => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (
  ref: React.RefObject<HTMLDivElement | null>,
  setDynamicHeight: React.Dispatch<React.SetStateAction<number | null>>,
): void => {
  if (ref.current) {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }
};

const applyScrollListener = (
  ref: React.RefObject<HTMLDivElement | null>,
  setTranslateX: React.Dispatch<React.SetStateAction<number>>,
): void => {
  const handleScroll = () => {
    if (ref.current) {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    }
  };

  window.addEventListener("scroll", handleScroll);
};

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({
  children,
}) => {
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const resizeHandler = (): void => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default HorizontalScrollContainer;
