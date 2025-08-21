import React, { useEffect, useRef } from "react";

interface MouseFollowCircleProps {
  delay: number;
  className?: string;
}

const MouseFollowCircle = ({ delay, className }: MouseFollowCircleProps) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const revisedMousePos = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>(0);

  useEffect(() => {
    // Check if screen is desktop size
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (!mediaQuery.matches) {
      return; // Don't run on mobile/tablet
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX/clientY for viewport-relative positioning with position: fixed
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const delayMouseFollow = () => {
      if (!circleRef.current) return;

      revisedMousePos.current.x +=
        (mousePos.current.x - revisedMousePos.current.x) / delay;
      revisedMousePos.current.y +=
        (mousePos.current.y - revisedMousePos.current.y) / delay;

      circleRef.current.style.top = `${revisedMousePos.current.y}px`;
      circleRef.current.style.left = `${revisedMousePos.current.x}px`;

      animationId.current = requestAnimationFrame(delayMouseFollow);
    };

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Start animation
    delayMouseFollow();

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [delay]);

  // Don't render on mobile/tablet
  if (!window.matchMedia("(min-width: 768px)").matches) {
    return null;
  }

  return (
    <div
      ref={circleRef}
      className={className}
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 9999,
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255)",
        // Center the circle perfectly on cursor
        marginLeft: "-10px",
        marginTop: "-10px",
        transition: "none",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default MouseFollowCircle;
